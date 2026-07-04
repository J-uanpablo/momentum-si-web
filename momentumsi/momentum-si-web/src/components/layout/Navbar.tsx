"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/site";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-[100px] bg-white shadow-[0_6px_18px_rgba(11,56,59,0.18)]">
      <nav
        className="mx-auto grid h-[100px] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-8 px-8 md:px-10 lg:px-12"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="relative flex h-[58px] w-[285px] items-center transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
          aria-label="Ir al inicio de MoMentum SÍ"
          onClick={closeMenu}
        >
          <Image
            src="/images/logos/momentum-si-logo.png"
            alt="MoMentum SÍ"
            width={860}
            height={290}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        <div className="hidden items-center justify-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-navbar text-[20px] font-bold leading-none text-brand-dark/80 transition duration-300 hover:text-brand-aqua focus:outline-none focus:ring-4 focus:ring-brand-aqua/20",
                  isActive && "text-brand-aqua"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden justify-self-end lg:block">
          <Button
            href={SITE_CONFIG.creditUrl}
            className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80"
          >
            Solicita tu crédito
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-brand-dark/10 text-brand-dark transition hover:bg-brand-soft focus:outline-none focus:ring-4 focus:ring-brand-aqua/20 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-brand-dark/10 bg-white px-5 py-5 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "font-navbar rounded-2xl px-4 py-3 text-[20px] font-bold text-brand-dark/80 transition hover:bg-brand-soft hover:text-brand-aqua focus:outline-none focus:ring-4 focus:ring-brand-aqua/20",
                    isActive && "bg-brand-soft text-brand-aqua"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button
              href={SITE_CONFIG.creditUrl}
              className="mt-2 h-[54px] w-full rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80"
            >
              Solicita tu crédito
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
