"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/components/common/language-provider";
import { navItems, siteConfig } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/dictionary";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslation();
  const { locale } = useLanguage();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t.header.openMenu}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left font-semibold tracking-tight">
            {siteConfig.brand}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <a href={siteConfig.cvUrl[locale]} download onClick={() => setOpen(false)}>
              {t.header.downloadCv}
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
