import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos de formulario inválidos.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { name, email, company, inquiryType, budget, message } = parsed.data;
  const contactEmail = process.env.CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !resendApiKey) {
    console.error(
      "Contact form: missing CONTACT_EMAIL or RESEND_API_KEY environment variables.",
    );
    return NextResponse.json(
      { error: "El envío de correo no está configurado en este momento." },
      { status: 503 },
    );
  }

  const emailBody = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    company ? `Empresa: ${company}` : null,
    `Tipo de consulta: ${inquiryType}`,
    budget ? `Presupuesto estimado: ${budget}` : null,
    "",
    "Mensaje:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SOJO DEV <onboarding@resend.dev>",
      to: [contactEmail],
      reply_to: email,
      subject: `Nuevo contacto — ${inquiryType}`,
      text: emailBody,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", errorText);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta nuevamente más tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
