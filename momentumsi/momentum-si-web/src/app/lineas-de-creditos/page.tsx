import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Líneas de créditos",
  description:
    "Soluciones financieras para cada momento de tu vida: libre inversión, compra de moto y crédito rotativo.",
};

const creditLines = [
  {
    title: "Libre Inversión",
    description:
      "Dinero para lo que necesites, con desembolso rápido y hasta 18 meses de plazo.",
  },
  {
    title: "Compra de Moto",
    description: "Financia hasta el 80% de tu moto y mejora tu movilidad.",
  },
  {
    title: "Revolvente o Rotativo",
    description: "Tu cupo disponible siempre. Usa, paga y vuelve a utilizar.",
  },
];

const stats = [
  "+1.000 Clientes",
  "Cobertura nacional",
  "+10 Líneas de crédito",
  "100% Digitales",
];

export default function CreditLinesPage() {
  return (
    <main>
      <PageHero
        dark
        title="Más que créditos"
        highlighted="acompañamos historias"
        description="Diseñamos soluciones financieras pensando en las personas, sus metas y la tranquilidad de sus hogares."
      />

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Soluciones para cada momento"
            highlighted="de tu vida"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {creditLines.map((line) => (
              <article
                key={line.title}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgba(11,56,59,0.18)] transition duration-300 hover:-translate-y-2"
              >
                <div className="flex h-56 items-center justify-center bg-brand-soft p-8 text-center">
                  <p className="text-lg font-black text-brand-aqua">
                    Imagen pendiente
                  </p>
                </div>

                <div className="p-7">
                  <h2 className="text-3xl font-black leading-none text-brand-dark">
                    {line.title}
                  </h2>
                  <p className="mt-3 text-lg font-bold leading-relaxed text-brand-dark">
                    {line.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-18 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-brand-dark md:text-6xl">
            Empieza a gestionar tu crédito
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat}>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-aqua text-3xl font-black text-white">
                  ✓
                </div>
                <p className="text-xl font-black text-brand-dark">{stat}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
