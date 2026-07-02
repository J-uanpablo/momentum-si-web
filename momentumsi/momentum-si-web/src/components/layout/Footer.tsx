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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr_1fr] md:px-8">
          <div>
            <Link
              href="/"
              className="text-3xl font-black tracking-tight text-brand-dark"
              aria-label="MoMentum SÍ"
            >
              MoMentum<span className="text-brand-aqua">SÍ</span>
            </Link>

            <p className="mt-3 max-w-xs text-base leading-relaxed text-brand-gray">
              Crédito de libranza con descuento por nómina.
              <br />
              Rápido, seguro y 100% digital.
            </p>

            <address className="mt-8 not-italic text-base leading-relaxed text-brand-gray">
              NIT: {SITE_CONFIG.nit}
              <br />
              {SITE_CONFIG.address}
              <br />
              {SITE_CONFIG.phone}
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-dark">Legales</h2>
            <ul className="mt-3 space-y-1.5">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-brand-gray transition hover:text-brand-aqua"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-9">
            <ul className="space-y-1.5">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-brand-gray transition hover:text-brand-aqua"
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
          <p className="text-sm text-white/80">
            Todos los derechos reservados - © 2026 MOMentum SÍ
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.35em] text-white/70">
              Vigilado
            </span>

            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Facebook" className="hover:opacity-75">
                <FaFacebookF size={26} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:opacity-75"
              >
                <FaInstagram size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
