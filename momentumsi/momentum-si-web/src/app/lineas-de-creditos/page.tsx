import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Líneas de créditos",
  description:
    "Soluciones financieras para cada momento de tu vida: libre inversión, compra de moto y crédito rotativo.",
};

const creditLines = [
  {
    titleTop: "Libre",
    titleHighlight: "Inversión",
    description:
      "Dinero para lo que necesites, con desembolso rápido y hasta 18 meses de plazo.",
    image: "/images/lineas-creditos/card-libre-inversion.png",
    alt: "Personas disfrutando en la playa para crédito de libre inversión",
  },
  {
    titleTop: "Compra",
    titleHighlight: "de Moto",
    description: "Financia hasta el 80% de tu moto y mejora tu movilidad.",
    image: "/images/lineas-creditos/card-compra-moto.png",
    alt: "Persona recibiendo las llaves de una moto",
  },
  {
    titleTop: "Revolvente",
    titleHighlight: "o Rotativo",
    description: "Tu cupo disponible siempre. Usa, paga y vuelve a utilizar.",
    image: "/images/lineas-creditos/card-rotativo.png",
    alt: "Celular mostrando una plataforma digital de crédito rotativo",
  },
];

const stats = [
  {
    value: "+1.000",
    label: "Clientes",
    icon: "/images/lineas-creditos/icon-clientes.png",
    alt: "Ícono de clientes",
  },
  {
    value: "Cobertura",
    label: "nacional",
    icon: "/images/lineas-creditos/icon-cobertura.png",
    alt: "Ícono de cobertura nacional",
  },
  {
    value: "+10 Líneas de",
    label: "crédito",
    icon: "/images/lineas-creditos/icon-lineas-credito.png",
    alt: "Ícono de líneas de crédito",
  },
  {
    value: "100%",
    label: "Digitales",
    icon: "/images/lineas-creditos/icon-digital.png",
    alt: "Ícono de créditos digitales",
  },
];

export default function CreditLinesPage() {
  return (
    <main className="bg-white">
      <div className="h-[12px] bg-white" aria-hidden="true" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div
          className="absolute -left-[115px] bottom-[-70px] hidden h-[300px] w-[300px] rounded-full border-[58px] border-brand-aqua/25 md:block"
          aria-hidden="true"
        />

        <div
          className="absolute right-[-310px] top-[-520px] hidden h-[1040px] w-[1040px] rounded-full border-[220px] border-brand-aqua/15 lg:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-4 px-5 py-14 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[760px] lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-white md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block whitespace-nowrap">Más que créditos</span>
              <span className="block whitespace-nowrap text-brand-aqua">
                acompañamos historias
              </span>
            </h1>

            <p className="font-brand mt-5 max-w-[600px] text-[20px] font-medium leading-[28px] tracking-[0em] text-white md:text-[24px] md:leading-[32px]">
              Diseñamos soluciones financieras pensando
              <br />
              en las personas, sus metas y la tranquilidad
              <br />
              de sus hogares.
            </p>

            <div className="mt-10">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 hidden min-h-[620px] items-end justify-center lg:flex"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/lineas-creditos/hero-lineas-creditos.png"
              alt="Mujer sonriendo con ambos pulgares arriba"
              width={900}
              height={760}
              priority
              className="absolute bottom-0 right-[-85px] h-[600px] w-auto max-w-none object-contain xl:right-[-70px] xl:h-[635px] 2xl:right-[-95px]"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-[1240px]">
          <AnimatedSection className="text-center">
            <h2 className="font-display text-[40px] font-bold leading-[42px] tracking-[0.02em] md:text-[56px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block text-brand-aqua">
                Soluciones para cada momento
              </span>
              <span className="block text-brand-dark">de tu vida</span>
            </h2>
          </AnimatedSection>

          <div className="relative mt-12">
            <button
              type="button"
              aria-label="Ver línea anterior"
              className="absolute left-[-18px] top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-brand-dark transition hover:text-brand-aqua lg:flex xl:left-[-78px]"
            >
              <ArrowLeft size={52} strokeWidth={2.4} />
            </button>

            <div className="grid gap-8 md:grid-cols-3">
              {creditLines.map((line, index) => (
                <AnimatedSection key={line.titleHighlight} delay={index * 0.08}>
                  <article className="h-[558px] w-full max-w-[363px] overflow-hidden rounded-[24px] bg-white shadow-[0_8px_18px_rgba(11,56,59,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(11,56,59,0.24)]">
                    <div className="relative h-[302px] w-full overflow-hidden">
                      <Image
                        src={line.image}
                        alt={line.alt}
                        fill
                        sizes="363px"
                        className="object-cover"
                      />
                    </div>

                    <div className="h-[256px] px-6 pb-7 pt-5">
                      <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark md:text-[38px] md:leading-[36px]">
                        <span className="block">{line.titleTop}</span>
                        <span className="block text-brand-aqua">
                          {line.titleHighlight}
                        </span>
                      </h3>

                      <p className="font-brand mt-2 text-[18px] font-bold leading-[22px] tracking-[0em] text-brand-dark">
                        {line.description}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <button
              type="button"
              aria-label="Ver línea siguiente"
              className="absolute right-[-18px] top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-brand-dark transition hover:text-brand-aqua lg:flex xl:right-[-78px]"
            >
              <ArrowRight size={52} strokeWidth={2.4} />
            </button>
          </div>

          <div className="mt-12 text-center">
            <Button
              href={SITE_CONFIG.creditUrl}
              className="h-[54px] w-[252px] rounded-[16px] px-0 py-0 font-button text-[18px] font-medium leading-none text-brand-dark/80"
            >
              Solicita tu crédito
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 md:px-8 lg:py-[70px]">
        <div className="mx-auto max-w-6xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-[38px] font-bold leading-[42px] tracking-[0.02em] text-brand-dark md:text-[54px] md:leading-[56px]">
              Empieza a gestionar tu crédito
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {stats.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={92}
                    height={92}
                    className="h-[92px] w-[92px] object-contain"
                  />

                  <h3 className="font-display mt-5 text-[24px] font-bold leading-[26px] tracking-[0.02em] text-brand-dark">
                    <span className="block">{item.value}</span>
                    <span className="block">{item.label}</span>
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
