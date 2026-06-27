import { NextResponse } from "next/server";

/**
 * Captura de lista VIP (pre-lanzamiento).
 *
 * Hoy: valida y responde OK (stub). NO persiste todavía.
 * Para activar el envío real, conecta UN proveedor (a confirmar con el
 * usuario): Resend, Mailchimp o Buttondown. Documenta la variable de entorno.
 *
 * Ejemplo (Resend):
 *   const res = await fetch("https://api.resend.com/audiences/AUDIENCE_ID/contacts", {
 *     method: "POST",
 *     headers: {
 *       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
 *       "Content-Type": "application/json",
 *     },
 *     body: JSON.stringify({ email, first_name: name }),
 *   });
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
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 422 });
  }

  // TODO(provider): reenviar { email, name, source } al proveedor de correo.
  // Por ahora confirmamos la recepción para no bloquear el pre-lanzamiento.
  return NextResponse.json({ ok: true }, { status: 200 });
}
