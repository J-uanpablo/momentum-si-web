import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "MoMentum SÍ es la financiera del Grupo MoMentum, creada para brindar segundas oportunidades.",
};

const values = [
  {
    title: "Cercanía",
    description: "Te acompañamos siempre con una atención humana y cercana.",
  },
  {
    title: "Confianza",
    description:
      "Construimos relaciones basadas en la transparencia y el respeto.",
  },
  {
    title: "Agilidad",
    description:
      "Procesos simples, 100% digitales y pensados para ahorrar tu tiempo.",
  },
  {
    title: "Oportunidades",
    description: "Creamos soluciones para que cumplas tus metas y sueños.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="h-[12px] bg-white" aria-hidden="true" />
      <PageHero
        title="Somos la financiera del"
        highlighted="Grupo MoMentum"
        description="Una empresa creada para brindar segundas oportunidades a través de propuestas de valor innovadoras."
      />

      <section className="bg-brand-soft px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection direction="left">
            <h1 className="text-5xl font-black leading-none text-brand-dark">
              MoMentum<span className="text-brand-aqua">SÍ</span>
            </h1>

            <p className="mt-5 text-xl font-bold leading-relaxed text-brand-dark">
              Es la financiera del Grupo MoMentum, una empresa creada para
              brindar segundas oportunidades a través de propuestas de valor
              innovadoras.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="flex min-h-[320px] items-center justify-center rounded-[2rem] bg-white shadow-xl"
            direction="right"
            delay={0.15}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-dark text-4xl text-white">
              ▶
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimatedSection
              key={value.title}
              className="text-center"
              delay={index * 0.08}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-aqua text-3xl text-white">
                ♡
              </div>
              <h2 className="mt-5 text-3xl font-black text-brand-dark">
                {value.title}
              </h2>
              <p className="mt-2 text-lg font-bold leading-relaxed text-brand-dark">
                {value.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
