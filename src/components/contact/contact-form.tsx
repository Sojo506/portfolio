"use client";

import { useMemo, useState } from "react";
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
import { useLanguage } from "@/components/common/language-provider";
import { useTranslation } from "@/lib/i18n/dictionary";
import {
  getContactFormSchema,
  contactMethods,
  inquiryTypes,
  type ContactFormValues,
} from "@/lib/validations/contact";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { locale } = useLanguage();
  const t = useTranslation();

  const schema = useMemo(() => getContactFormSchema(locale), [locale]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
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

  function buildWhatsappMessage(values: ContactFormValues) {
    const inquiryLabel = t.contactForm.inquiryTypeLabels[values.inquiryType];
    const lines = [
      t.contactForm.whatsappMessage.greeting(values.name),
      "",
      t.contactForm.whatsappMessage.topic(inquiryLabel),
      "",
      values.company ? t.contactForm.whatsappMessage.company(values.company) : null,
      values.budget ? t.contactForm.whatsappMessage.budget(values.budget) : null,
      "",
      t.contactForm.whatsappMessage.messageLabel,
      values.message,
    ].filter((line) => line !== null);

    return lines.join("\n");
  }

  async function onSubmit(values: ContactFormValues) {
    setErrorMessage(null);

    if (values.preferredContact === "WhatsApp") {
      if (!siteConfig.whatsappNumber) {
        setErrorMessage(t.contactForm.whatsappNotConfigured);
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
        throw new Error(data?.error ?? t.contactForm.genericError);
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : t.contactForm.genericError);
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
          <Label htmlFor="name">{t.contactForm.name}</Label>
          <Input id="name" {...form.register("name")} aria-invalid={!!form.formState.errors.name} />
          {form.formState.errors.name ? (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t.contactForm.email}</Label>
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
          <Label htmlFor="company">{t.contactForm.company}</Label>
          <Input id="company" {...form.register("company")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">{t.contactForm.budget}</Label>
          <Input id="budget" {...form.register("budget")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType">{t.contactForm.inquiryType}</Label>
          <Select
            onValueChange={(value) =>
              form.setValue("inquiryType", value as ContactFormValues["inquiryType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="inquiryType" className="w-full">
              <SelectValue placeholder={t.contactForm.selectOption} />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {t.contactForm.inquiryTypeLabels[type]}
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
          <Label htmlFor="preferredContact">{t.contactForm.preferredContact}</Label>
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
                  {t.contactForm.contactMethodLabels[method]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contactForm.message}</Label>
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
          {t.contactForm.privacyConsent}
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
        {state === "submitting" ? t.contactForm.sending : t.contactForm.submit}
      </Button>

      {state === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          {preferredContact === "WhatsApp"
            ? t.contactForm.successWhatsapp
            : t.contactForm.successEmail}
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}
    </form>
  );
}
