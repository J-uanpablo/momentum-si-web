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

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-4 px-5 pb-0 pt-14 max-sm:min-h-0 max-sm:pt-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[660px] max-lg:mx-auto max-lg:text-center lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-white max-sm:text-[38px] max-sm:leading-[38px] max-[380px]:text-[34px] max-[380px]:leading-[35px] md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              Nuestra <span className="text-brand-dark">esencia</span>
            </h1>

            <p className="font-brand mt-2 max-w-[560px] text-[20px] font-bold leading-[26px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[18px] max-sm:leading-[24px] md:text-[24px] md:leading-[30px]">
              Diseñamos soluciones financieras simples,
              <br className="hidden sm:block" />
              digitales y humanas para acompañarte a
              <br className="hidden sm:block" />
              cumplir tus proyectos de vida.
            </p>

            <div className="mt-8">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px] max-sm:text-[20px]"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 flex min-h-[360px] items-end justify-center max-sm:min-h-[320px] lg:min-h-[560px]"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/quienes-somos/hero-quienes-somos.png"
              alt="Dos mujeres celebrando la esencia de MoMentum SÍ"
              width={900}
              height={680}
              priority
              className="absolute bottom-0 left-1/2 h-[360px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[320px] lg:left-auto lg:right-[-40px] lg:bottom-[-30px] lg:h-[550px] lg:translate-x-0 xl:right-[-20px] xl:h-[615px] 2xl:right-[-35px]"
              draggable={false}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 max-sm:py-12 md:px-8 lg:py-[72px]">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 max-lg:text-center lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatedSection
            className="relative z-10 lg:pl-6 xl:pl-10"
            direction="left"
          >
            <Image
              src="/images/logos/momentum-si-logo-2.png"
              alt="MoMentum SÍ"
              width={860}
              height={290}
              className="h-auto w-[320px] object-contain max-lg:mx-auto max-sm:w-[260px]"
              draggable={false}
            />

            <p className="font-brand mt-5 max-w-[490px] text-[22px] font-bold leading-[28px] tracking-[0em] text-brand-dark max-lg:mx-auto max-sm:text-[19px] max-sm:leading-[25px]">
              Es la financiera del{" "}
              <span className="text-brand-aqua">Grupo MoMentum</span>, una
              empresa creada para brindar segundas oportunidades a través de
              propuestas de valor innovadoras.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10"
            direction="right"
            delay={0.15}
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_10px_24px_rgba(11,56,59,0.16)] max-sm:rounded-[24px]">
              <Image
                src="/images/quienes-somos/video-quienes-somos.png"
                alt="Video institucional de MoMentum SÍ"
                width={820}
                height={420}
                className="h-auto w-full object-cover"
                draggable={false}
              />

              <button
                type="button"
                aria-label="Reproducir video institucional"
                className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-[0_10px_24px_rgba(11,56,59,0.25)] transition hover:scale-105 hover:bg-white focus:outline-none focus:ring-4 focus:ring-brand-aqua/30 max-sm:h-[64px] max-sm:w-[64px]"
              >
                <Play
                  size={42}
                  strokeWidth={0}
                  fill="currentColor"
                  className="ml-1 max-sm:h-[30px] max-sm:w-[30px]"
                />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-16 max-sm:py-12 md:px-8 lg:py-[64px]">
        <div className="mx-auto grid max-w-[1240px] gap-10 max-sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.08}>
              <article className="text-center">
                <Image
                  src={value.icon}
                  alt={value.alt}
                  width={112}
                  height={112}
                  className="mx-auto h-[100px] w-[100px] object-contain max-sm:h-[92px] max-sm:w-[92px]"
                  draggable={false}
                />

                <h2 className="font-display mt-5 text-[34px] font-bold leading-[36px] tracking-[0.02em] text-brand-dark max-sm:text-[32px] max-sm:leading-[34px]">
                  {value.title}
                </h2>

                <p className="font-brand mx-auto mt-2 max-w-[250px] text-[20px] font-bold leading-[24px] tracking-[0em] text-brand-dark max-sm:text-[18px] max-sm:leading-[23px]">
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

        <div className="mx-auto grid min-h-[300px] max-w-[1440px] items-center gap-8 px-5 pb-0 pt-12 max-sm:pt-10 md:px-8 lg:grid-cols-[0.82fr_0.95fr_auto_0.85fr] lg:py-0">
          <AnimatedSection
            className="relative order-3 min-h-[280px] max-sm:min-h-[250px] lg:order-1 lg:min-h-[300px]"
            direction="left"
          >
            <Image
              src="/images/quienes-somos/pareja-quienes-somos.png"
              alt="Pareja sonriendo como parte de la comunidad MoMentum SÍ"
              width={520}
              height={340}
              className="absolute bottom-0 left-1/2 h-[270px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[235px] lg:left-[-28px] lg:h-[290px] lg:translate-x-0 xl:left-[-40px] xl:h-[305px] 2xl:left-[-52px]"
              draggable={false}
            />
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 order-1 text-center lg:order-2 lg:text-left"
            delay={0.1}
          >
            <h2 className="font-display text-[38px] font-bold leading-[40px] tracking-[0.02em] text-brand-dark max-sm:text-[32px] max-sm:leading-[34px] md:text-[48px] md:leading-[50px]">
              <span className="block lg:whitespace-nowrap">
                Creamos{"\u00A0"}soluciones
              </span>
              <span className="block">financieras</span>
              <span className="block text-brand-aqua">simples y humanas.</span>
            </h2>
          </AnimatedSection>

          <div
            className="hidden h-[210px] w-[2px] bg-brand-aqua lg:order-3 lg:block"
            aria-hidden="true"
          />

          <AnimatedSection
            className="relative z-10 order-2 text-center lg:order-4 lg:text-left"
            direction="right"
            delay={0.18}
          >
            <h2 className="font-display text-[38px] font-bold leading-[40px] tracking-[0.02em] text-brand-dark max-sm:text-[32px] max-sm:leading-[34px] md:text-[48px] md:leading-[50px]">
              <span className="block">Cada historia</span>
              <span className="block">
                merece <span className="text-brand-aqua">una</span>
              </span>
              <span className="block text-brand-aqua">oportunidad.</span>
            </h2>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
