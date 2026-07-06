import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce la esencia de MoMentum SÍ, la financiera del Grupo Momentum creada para brindar soluciones simples, digitales y humanas.",
};

const values = [
  {
    title: "Cercanía",
    description: "Te acompañamos siempre con una atención humana y cercana.",
    icon: "/images/quienes-somos/icon-cercania.png",
    alt: "Ícono de cercanía",
  },
  {
    title: "Confianza",
    description:
      "Construimos relaciones basadas en la transparencia y el respeto.",
    icon: "/images/quienes-somos/icon-confianza.png",
    alt: "Ícono de confianza",
  },
  {
    title: "Agilidad",
    description:
      "Procesos simples, 100 % digitales y pensados para ahorrar tu tiempo.",
    icon: "/images/quienes-somos/icon-agilidad.png",
    alt: "Ícono de agilidad",
  },
  {
    title: "Oportunidades",
    description: "Creamos soluciones para que cumplas tus metas y sueños.",
    icon: "/images/quienes-somos/icon-oportunidades.png",
    alt: "Ícono de oportunidades",
  },
];

export default function QuienesSomosPage() {
  return (
    <main className="bg-white">
      <div className="h-[12px] bg-white" aria-hidden="true" />

      <section className="relative overflow-hidden bg-brand-aqua">
        <div
          className="absolute -left-[110px] bottom-[-55px] hidden h-[300px] w-[300px] rounded-full border-[58px] border-white/18 md:block"
          aria-hidden="true"
        />

        <div
          className="absolute right-[-300px] top-[-515px] hidden h-[1040px] w-[1040px] rounded-full border-[220px] border-white/12 lg:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-4 px-5 py-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[660px] lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-white md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              Nuestra <span className="text-brand-dark">esencia</span>
            </h1>

            <p className="font-brand mt-2 max-w-[560px] text-[20px] font-bold leading-[26px] tracking-[0em] text-white md:text-[24px] md:leading-[30px]">
              Diseñamos soluciones financieras simples,
              <br />
              digitales y humanas para acompañarte a
              <br />
              cumplir tus proyectos de vida.
            </p>

            <div className="mt-8">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 hidden min-h-[560px] items-end justify-center lg:flex"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/quienes-somos/hero-quienes-somos.png"
              alt="Dos mujeres celebrando la esencia de MoMentum SÍ"
              width={900}
              height={680}
              priority
              className="absolute bottom-0 right-[-40px] h-[550px] w-auto max-w-none object-contain xl:right-[-20px] xl:h-[580px] 2xl:right-[-35px]"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 md:px-8 lg:py-[72px]">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatedSection
            className="relative z-10 lg:pl-6 xl:pl-10"
            direction="left"
          >
            <Image
              src="/images/logos/momentum-si-logo.png"
              alt="MoMentum SÍ"
              width={860}
              height={290}
              className="h-auto w-[320px] object-contain"
            />

            <p className="font-brand mt-5 max-w-[490px] text-[22px] font-bold leading-[28px] tracking-[0em] text-brand-dark">
              Es la financiera del{" "}
              <span className="text-brand-aqua">Grupo Momentum</span>, una
              empresa creada para brindar segundas oportunidades a través de
              propuestas de valor innovadoras.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10"
            direction="right"
            delay={0.15}
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_10px_24px_rgba(11,56,59,0.16)]">
              <Image
                src="/images/quienes-somos/video-quienes-somos.png"
                alt="Video institucional de MoMentum SÍ"
                width={820}
                height={420}
                className="h-auto w-full object-cover"
              />

              <button
                type="button"
                aria-label="Reproducir video institucional"
                className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-[0_10px_24px_rgba(11,56,59,0.25)] transition hover:scale-105 hover:bg-white focus:outline-none focus:ring-4 focus:ring-brand-aqua/30"
              >
                <Play
                  size={42}
                  strokeWidth={0}
                  fill="currentColor"
                  className="ml-1"
                />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-[64px]">
        <div className="mx-auto grid max-w-[1240px] gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.08}>
              <article className="text-center">
                <Image
                  src={value.icon}
                  alt={value.alt}
                  width={92}
                  height={92}
                  className="mx-auto h-[92px] w-[92px] object-contain"
                />

                <h2 className="font-display mt-5 text-[34px] font-bold leading-[36px] tracking-[0.02em] text-brand-dark">
                  {value.title}
                </h2>

                <p className="font-brand mx-auto mt-2 max-w-[250px] text-[20px] font-bold leading-[24px] tracking-[0em] text-brand-dark">
                  {value.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-soft">
        <div
          className="absolute right-[-135px] top-[-125px] hidden h-[420px] w-[420px] rounded-full border-[60px] border-[#D6F6F9]/70 lg:block"
          aria-hidden="true"
        />

        <div className="mx-auto min-h-[270px] max-w-[1440px] px-5 md:px-8">
          <AnimatedSection className="relative min-h-[270px]" direction="left">
            <Image
              src="/images/quienes-somos/pareja-quienes-somos.png"
              alt="Pareja sonriendo como parte de la comunidad MoMentum SÍ"
              width={520}
              height={340}
              className="absolute bottom-0 left-0 h-[255px] w-auto object-contain md:left-4 lg:left-8"
            />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
