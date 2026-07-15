import { z } from "zod";
import type { Locale } from "@/lib/i18n/locale";

export const inquiryTypes = [
  "Desarrollo de sitio web",
  "Aplicación web",
  "Colaboración profesional",
  "Oportunidad laboral",
  "Consultoría",
  "Otro",
] as const;

export const contactMethods = ["Correo electrónico", "WhatsApp"] as const;

const validationMessages: Record<
  Locale,
  {
    nameRequired: string;
    emailInvalid: string;
    inquiryRequired: string;
    messageMin: string;
    contactMethodRequired: string;
    privacyRequired: string;
  }
> = {
  es: {
    nameRequired: "Ingresa tu nombre completo.",
    emailInvalid: "Ingresa un correo electrónico válido.",
    inquiryRequired: "Selecciona el tipo de consulta.",
    messageMin: "Cuéntame un poco más sobre tu proyecto (mínimo 10 caracteres).",
    contactMethodRequired: "Selecciona un método de contacto preferido.",
    privacyRequired: "Debes aceptar la política de privacidad para continuar.",
  },
  en: {
    nameRequired: "Enter your full name.",
    emailInvalid: "Enter a valid email address.",
    inquiryRequired: "Select the inquiry type.",
    messageMin: "Tell me a bit more about your project (minimum 10 characters).",
    contactMethodRequired: "Select a preferred contact method.",
    privacyRequired: "You must accept the privacy policy to continue.",
  },
};

export function getContactFormSchema(locale: Locale = "es") {
  const messages = validationMessages[locale];

  return z.object({
    name: z.string().trim().min(2, messages.nameRequired),
    email: z.email(messages.emailInvalid),
    company: z.string().trim().optional().or(z.literal("")),
    inquiryType: z.enum(inquiryTypes, {
      error: messages.inquiryRequired,
    }),
    budget: z.string().trim().optional().or(z.literal("")),
    message: z.string().trim().min(10, messages.messageMin),
    preferredContact: z.enum(contactMethods, {
      error: messages.contactMethodRequired,
    }),
    acceptPrivacyPolicy: z.boolean().refine((value) => value === true, {
      error: messages.privacyRequired,
    }),
  });
}

export const contactFormSchema = getContactFormSchema("es");

export type ContactFormValues = z.infer<typeof contactFormSchema>;
