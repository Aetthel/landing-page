import { NextResponse } from "next/server";
import { Resend } from "resend";

/* El envío usa el SDK de Resend, que solo corre en Node —no en el runtime edge—.
   La ruta es dinámica por definición: nunca se prerenderiza. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NEEDS = [
  "Landing page",
  "App a medida",
  "Automatización",
  "Otra cosa",
] as const;

type Need = (typeof NEEDS)[number];

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  need: Need;
}

/* Mismas reglas que el formulario del cliente. Se repiten aquí a propósito: la
   validación del navegador es comodidad, esta es la que de verdad protege el
   buzón —un POST puede llegar sin pasar por la página—. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Tope defensivo por campo: nadie escribe un nombre de 5.000 caracteres, y sin
   límite el correo que nos llega lo escribe quien envía el formulario. */
const MAX = { name: 120, email: 160, company: 160, phone: 40, message: 5000 };

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const validate = (body: Record<string, unknown>) => {
  const values = {
    name: asString(body.name),
    email: asString(body.email),
    company: asString(body.company),
    phone: asString(body.phone),
    message: asString(body.message),
    need: asString(body.need) as Need,
  };

  const errors: string[] = [];

  if (!values.name || values.name.length > MAX.name) errors.push("name");
  if (
    !values.email ||
    values.email.length > MAX.email ||
    !EMAIL_RE.test(values.email)
  ) {
    errors.push("email");
  }
  if (!values.company || values.company.length > MAX.company) {
    errors.push("company");
  }
  if (
    !values.phone ||
    values.phone.length > MAX.phone ||
    values.phone.replace(/\D/g, "").length < 9
  ) {
    errors.push("phone");
  }
  if (values.message.length < 10 || values.message.length > MAX.message) {
    errors.push("message");
  }
  if (!NEEDS.includes(values.need)) errors.push("need");

  return { values: values as ContactPayload, errors };
};

/* Los datos del visitante se pintan dentro del HTML del correo, así que se
   escapan: un `<` suelto en el mensaje no debe romper la maquetación —ni
   colar marcado— en la bandeja de entrada. */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #ececec;font:500 11px/1.4 -apple-system,Segoe UI,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a8a8a;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:10px 0 10px 24px;border-bottom:1px solid #ececec;font:400 15px/1.6 -apple-system,Segoe UI,sans-serif;color:#1a1a1e;">${value}</td>
  </tr>`;

const buildHtml = (v: ContactPayload) => {
  const name = escapeHtml(v.name);
  const email = escapeHtml(v.email);
  const phone = escapeHtml(v.phone);

  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:32px 16px;background:#f6f6f4;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;width:100%;background:#ffffff;border:1px solid #ececec;border-radius:16px;">
      <tr>
        <td style="padding:32px 32px 24px;">
          <p style="margin:0 0 6px;font:500 11px/1.4 -apple-system,Segoe UI,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#8a8a8a;">Aetthel — nuevo contacto</p>
          <h1 style="margin:0;font:500 26px/1.25 Georgia,serif;color:#1a1a1e;">${name}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${row("Email", `<a href="mailto:${email}" style="color:#1a1a1e;">${email}</a>`)}
            ${row("Teléfono", `<a href="tel:${phone.replace(/[^\d+]/g, "")}" style="color:#1a1a1e;">${phone}</a>`)}
            ${row("Empresa", escapeHtml(v.company))}
            ${row("Necesita", escapeHtml(v.need))}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 32px 32px;">
          <p style="margin:0 0 8px;font:500 11px/1.4 -apple-system,Segoe UI,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a8a8a;">Mensaje</p>
          <p style="margin:0;white-space:pre-wrap;font:400 15px/1.7 -apple-system,Segoe UI,sans-serif;color:#1a1a1e;">${escapeHtml(v.message)}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 32px;">
          <a href="mailto:${email}" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#1a1a1e;color:#ffffff;text-decoration:none;font:500 12px/1 -apple-system,Segoe UI,sans-serif;letter-spacing:.1em;text-transform:uppercase;">Responder a ${name}</a>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

/* Versión en texto plano: la leen los clientes que no pintan HTML y ayuda a que
   el correo no acabe marcado como spam. */
const buildText = (v: ContactPayload) =>
  [
    "Aetthel — nuevo contacto",
    "",
    `Nombre:   ${v.name}`,
    `Email:    ${v.email}`,
    `Teléfono: ${v.phone}`,
    `Empresa:  ${v.company}`,
    `Necesita: ${v.need}`,
    "",
    "Mensaje:",
    v.message,
  ].join("\n");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  /* Si falta configuración es un fallo nuestro, no del visitante: se registra
     en el servidor y fuera se responde con el mismo error genérico, que la
     página traduce en "escríbenos directamente a…". */
  if (!apiKey || !to || !from) {
    console.error(
      "[contacto] Falta configuración de Resend (RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL)."
    );
    return NextResponse.json({ error: "unavailable" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const { values, errors } = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ error: "invalid", fields: errors }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: `Aetthel — Contacto <${from}>`,
      to: [to],
      // Responder al correo lleva directo al visitante, sin copiar su email a mano.
      replyTo: values.email,
      subject: `Nuevo contacto — ${values.name} · ${values.need}`,
      text: buildText(values),
      html: buildHtml(values),
    });

    if (error) {
      console.error("[contacto] Resend devolvió un error:", error);
      return NextResponse.json({ error: "send-failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (cause) {
    console.error("[contacto] No se ha podido enviar el correo:", cause);
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }
}
