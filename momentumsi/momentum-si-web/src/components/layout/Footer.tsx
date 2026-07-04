import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  FOOTER_INFO_LINKS,
  FOOTER_LEGAL_LINKS,
  SITE_CONFIG,
} from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="border-t border-brand-dark/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.1fr_1fr_1fr] md:px-8 lg:py-16">
          <div>
            <Image
              src="/images/logos/momentum-si-logo-2.png"
              alt="MoMentum SÍ"
              width={860}
              height={290}
              className="h-auto w-[220px] object-contain"
            />

            <p className="font-brand mt-5 max-w-[404px] text-[20px] font-normal leading-[30px] tracking-[0em] text-[#878787]">
              Crédito de libranza con descuento por nómina.
              <br />
              Rápido, seguro y 100% digital.
            </p>

            <address className="font-brand mt-9 not-italic text-[20px] font-normal leading-[30px] tracking-[0em] text-[#878787]">
              NIT: {SITE_CONFIG.nit}
              <br />
              {SITE_CONFIG.address}
              <br />
              {SITE_CONFIG.phone}
            </address>
          </div>

          <div>
            <h2 className="font-display text-[30px] font-bold leading-none tracking-[0em] text-brand-dark">
              Legales
            </h2>

            <ul className="font-brand mt-5 space-y-0">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[20px] font-normal leading-[30px] text-[#878787] transition hover:text-brand-aqua focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-[50px]">
            <ul className="font-brand space-y-0">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[20px] font-normal leading-[30px] text-[#878787] transition hover:text-brand-aqua focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
            <p className="font-brand text-[15px] font-normal leading-none text-white/80">
              Todos los derechos reservados - © 2026 MOMentum Sí
            </p>

            <div className="flex items-center gap-4">
              <span className="font-brand border-b border-t border-white/70 px-3 py-1 text-[11px] font-normal uppercase tracking-[0.35em] text-white/80">
                Vigilado
              </span>

              <span className="font-brand max-w-[130px] text-[8px] font-normal uppercase leading-[1.2] text-white/70">
                Superintendencia Financiera de Colombia
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
            >
              <FaFacebookF size={26} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
            >
              <FaInstagram size={28} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
