import { NextResponse } from "next/server";

/**
 * Captura de lista VIP (pre-lanzamiento).
 *
 * Integración recomendada (Google-nativa, sin cuentas nuevas):
 * un Google Apps Script ligado a una Google Sheet. Guarda cada correo en la
 * hoja y puede enviarte un aviso a tu Gmail + un correo de bienvenida, todo
 * desde tu propia cuenta de Google. Ver docs/email-setup.md.
 *
 * Variable de entorno: GOOGLE_SCRIPT_URL = URL del Web App del Apps Script.
 * - Si está configurada: reenvía la inscripción a la hoja.
 * - Si NO está configurada: responde OK (modo demo) para no bloquear el sitio.
 *
 * Para cambiar a otro proveedor (Resend / Mailchimp) más adelante, solo se
 * reemplaza el bloque de reenvío de abajo.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: { email?: string; name?: string; source?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const email = (payload.email ?? "").trim();
  const name = (payload.name ?? "").trim();
  const source = (payload.source ?? "site").trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 422 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  // Modo demo: sin proveedor configurado, confirmamos para no bloquear el sitio.
  if (!scriptUrl) {
    return NextResponse.json({ ok: true, stored: false }, { status: 200 });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, source }),
      // El Web App de Apps Script responde con redirección 302 a googleusercontent;
      // fetch la sigue automáticamente.
    });
    if (!res.ok) throw new Error(`script responded ${res.status}`);
    return NextResponse.json({ ok: true, stored: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "storage failed" }, { status: 502 });
  }
}
