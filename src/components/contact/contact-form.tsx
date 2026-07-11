"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";
import {
  contactFormSchema,
  contactMethods,
  inquiryTypes,
  type ContactFormValues,
} from "@/lib/validations/contact";

type SubmitState = "idle" | "submitting" | "success" | "error";

function buildWhatsappMessage(values: ContactFormValues) {
  const lines = [
    `Hola Fabián, mi nombre es ${values.name}.`,
    "",
    `Me gustaría conversar sobre: ${values.inquiryType}.`,
    "",
    values.company ? `Empresa: ${values.company}` : null,
    values.budget ? `Presupuesto estimado: ${values.budget}` : null,
    "",
    "Mensaje:",
    values.message,
  ].filter((line) => line !== null);

  return lines.join("\n");
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
      preferredContact: "Correo electrónico",
      acceptPrivacyPolicy: false,
    },
  });

  const preferredContact = form.watch("preferredContact");

  async function onSubmit(values: ContactFormValues) {
    setErrorMessage(null);

    if (values.preferredContact === "WhatsApp") {
      if (!siteConfig.whatsappNumber) {
        setErrorMessage(
          "El número de WhatsApp no está configurado. Escríbeme por correo mientras tanto.",
        );
        return;
      }
      const text = encodeURIComponent(buildWhatsappMessage(values));
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
      setState("success");
      form.reset();
      return;
    }

    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "No se pudo enviar el mensaje.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "No se pudo enviar el mensaje.",
      );
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" {...form.register("name")} aria-invalid={!!form.formState.errors.name} />
          {form.formState.errors.name ? (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            aria-invalid={!!form.formState.errors.email}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Empresa (opcional)</Label>
          <Input id="company" {...form.register("company")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Presupuesto estimado (opcional)</Label>
          <Input id="budget" {...form.register("budget")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType">Tipo de consulta</Label>
          <Select
            onValueChange={(value) =>
              form.setValue("inquiryType", value as ContactFormValues["inquiryType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="inquiryType" className="w-full">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.inquiryType ? (
            <p className="text-xs text-destructive">
              {form.formState.errors.inquiryType.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredContact">Método de contacto preferido</Label>
          <Select
            defaultValue="Correo electrónico"
            onValueChange={(value) =>
              form.setValue(
                "preferredContact",
                value as ContactFormValues["preferredContact"],
                { shouldValidate: true },
              )
            }
          >
            <SelectTrigger id="preferredContact" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {contactMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          rows={5}
          {...form.register("message")}
          aria-invalid={!!form.formState.errors.message}
        />
        {form.formState.errors.message ? (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex items-start gap-2.5">
        <Checkbox
          id="acceptPrivacyPolicy"
          onCheckedChange={(checked) =>
            form.setValue("acceptPrivacyPolicy", checked === true, {
              shouldValidate: true,
            })
          }
        />
        <Label htmlFor="acceptPrivacyPolicy" className="font-normal text-muted-foreground">
          Acepto la política de privacidad y el uso de mis datos para responder este mensaje.
        </Label>
      </div>
      {form.formState.errors.acceptPrivacyPolicy ? (
        <p className="text-xs text-destructive">
          {form.formState.errors.acceptPrivacyPolicy.message}
        </p>
      ) : null}

      <Button type="submit" disabled={state === "submitting"} className="gap-1.5">
        {state === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : preferredContact === "WhatsApp" ? (
          <MessageCircle className="h-4 w-4" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {state === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {state === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          {preferredContact === "WhatsApp"
            ? "Se abrió WhatsApp con tu mensaje. ¡Gracias por escribirme!"
            : "Mensaje enviado correctamente. Te responderé lo antes posible."}
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}
    </form>
  );
}
