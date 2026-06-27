# Lista VIP — Conectar el correo (Google Sheets + Gmail)

Esta es la opción **recomendada** para NATIVA en pre-lanzamiento: usa tu propia
cuenta de Google/Gmail, sin crear cuentas nuevas ni pagar nada.

**Qué hace:**

- Guarda cada inscripción (correo, nombre, fecha, origen) en una **Google Sheet** tuya.
- Te envía un **aviso a tu Gmail** cada vez que alguien se une.
- Envía un **correo de bienvenida** automático a la persona, desde tu Gmail.

---

## Paso 1 — Crear la hoja

1. Entra a [sheets.new](https://sheets.new) con tu cuenta de Gmail.
2. Ponle nombre, por ejemplo **"NATIVA — Lista VIP"**.

## Paso 2 — Pegar el script

1. En la hoja: menú **Extensiones → Apps Script**.
2. Borra lo que haya y pega este código:

```javascript
// NATIVA — Captura de lista VIP
const NOTIFY_TO = "TU_CORREO@gmail.com"; // <-- tu Gmail para los avisos

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = (data.email || "").trim();
    const name = (data.name || "").trim();
    const source = (data.source || "").trim();
    if (!email) return json({ error: "no email" });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Fecha", "Correo", "Nombre", "Origen"]);
    }
    sheet.appendRow([new Date(), email, name, source]);

    // Aviso a tu Gmail
    MailApp.sendEmail(NOTIFY_TO, "Nueva inscripción VIP — NATIVA",
      "Correo: " + email + "\nNombre: " + name + "\nOrigen: " + source);

    // Bienvenida a la persona (opcional; comenta si no la quieres aún)
    MailApp.sendEmail({
      to: email,
      name: "NATIVA",
      subject: "Bienvenida al ritual ✨",
      body: "Gracias por unirte a la lista VIP de NATIVA.\n\n" +
            "Serás de las primeras en saber cuando ROCÍO esté disponible.\n\n" +
            "Rituales de nuestra tierra.\n— NATIVA"
    });

    return json({ ok: true });
  } catch (err) {
    return json({ error: String(err) });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Cambia `TU_CORREO@gmail.com` por tu Gmail real.

## Paso 3 — Publicar como Web App

1. Botón **Implementar (Deploy) → Nueva implementación**.
2. Tipo: **Aplicación web (Web app)**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta).
   - **Quién tiene acceso:** **Cualquier usuario** (Anyone).
4. **Implementar** y autoriza los permisos (Google te pedirá confirmar).
5. Copia la **URL del Web App** (termina en `/exec`).

## Paso 4 — Conectar la URL al sitio (en Vercel)

1. En tu proyecto de Vercel: **Settings → Environment Variables**.
2. Añade:
   - **Name:** `GOOGLE_SCRIPT_URL`
   - **Value:** la URL `/exec` que copiaste.
3. **Redeploy** el proyecto (Deployments → ⋯ → Redeploy) para que tome la variable.

¡Listo! Cada inscripción aparece en tu hoja y te llega el aviso al Gmail.

---

### Notas

- Mientras `GOOGLE_SCRIPT_URL` no esté configurada, el formulario funciona en
  "modo demo": confirma al usuario pero **no guarda** nada.
- Para probar en local: crea un archivo `.env.local` con
  `GOOGLE_SCRIPT_URL=...` (no se sube al repo).
- Si más adelante quieres una plataforma de campañas (newsletters, segmentación),
  se puede migrar a Mailchimp o Resend exportando la hoja. El código del sitio
  solo cambia en `app/api/subscribe/route.ts`.
