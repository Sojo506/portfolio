import { z } from "zod";

export const inquiryTypes = [
  "Desarrollo de sitio web",
  "Aplicación web",
  "Colaboración profesional",
  "Oportunidad laboral",
  "Consultoría",
  "Otro",
] as const;

export const contactMethods = ["Correo electrónico", "WhatsApp"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo."),
  email: z.email("Ingresa un correo electrónico válido."),
  company: z.string().trim().optional().or(z.literal("")),
  inquiryType: z.enum(inquiryTypes, {
    error: "Selecciona el tipo de consulta.",
  }),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntame un poco más sobre tu proyecto (mínimo 10 caracteres)."),
  preferredContact: z.enum(contactMethods, {
    error: "Selecciona un método de contacto preferido.",
  }),
  acceptPrivacyPolicy: z
    .boolean()
    .refine((value) => value === true, {
      error: "Debes aceptar la política de privacidad para continuar.",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
