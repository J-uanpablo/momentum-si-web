"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-brand-dark"
          aria-label="Ir al inicio de MoMentum SÍ"
          onClick={() => setIsOpen(false)}
        >
          MoMentum<span className="text-brand-aqua">SÍ</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-extrabold text-brand-dark transition hover:text-brand-aqua focus:outline-none focus:ring-4 focus:ring-brand-aqua/20",
                  isActive && "text-brand-aqua"
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-brand-lime" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-dark/10 text-brand-dark lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-brand-dark/10 bg-white px-5 py-5 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-black text-brand-dark transition hover:bg-brand-soft hover:text-brand-aqua",
                    isActive && "bg-brand-soft text-brand-aqua"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button href={SITE_CONFIG.creditUrl} className="mt-2 w-full">
              Solicita tu crédito
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
