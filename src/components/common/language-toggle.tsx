"use client";

import { useLanguage } from "@/components/common/language-provider";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/dictionary";
import { useMounted } from "@/lib/use-mounted";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  const t = useTranslation();
  const mounted = useMounted();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t.header.changeLanguage}
      className="h-9 w-9 text-xs font-medium"
      onClick={toggleLocale}
    >
      {mounted ? (locale === "es" ? "EN" : "ES") : <span className="opacity-0">ES</span>}
    </Button>
  );
}
