import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CreditLinesSlider } from "@/components/sections/CreditLinesSlider";
import { SITE_CONFIG } from "@/constants/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Líneas de créditos",
  description:
    "Soluciones financieras para cada momento de tu vida: libre inversión, compra de moto, crédito rotativo y convenios.",
};

type CounterStat = {
  type: "counter";
  end: number;
  prefix?: string;
  suffix?: string;
  formatThousands?: boolean;
  label: string;
  icon: string;
  alt: string;
};

type TextStat = {
  type: "text";
  value: string;
  label: string;
  icon: string;
  alt: string;
};

type Stat = CounterStat | TextStat;

const stats: Stat[] = [
  {
    type: "counter",
    end: 1000,
    prefix: "+",
    formatThousands: true,
    label: "Clientes",
    icon: "/images/lineas-creditos/icon-clientes.png",
    alt: "Ícono de clientes",
  },
  {
    type: "text",
    value: "Cobertura",
    label: "nacional",
    icon: "/images/lineas-creditos/icon-cobertura.png",
    alt: "Ícono de cobertura nacional",
  },
  {
    type: "counter",
    end: 10,
    prefix: "+",
    suffix: " Líneas de",
    label: "crédito",
    icon: "/images/lineas-creditos/icon-lineas-credito.png",
    alt: "Ícono de líneas de crédito",
  },
  {
    type: "counter",
    end: 100,
    suffix: "%",
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

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-4 px-5 pb-0 pt-14 max-sm:min-h-0 max-sm:pt-12 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[760px] max-lg:mx-auto max-lg:text-center lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-white max-sm:text-[36px] max-sm:leading-[37px] max-[380px]:text-[32px] max-[380px]:leading-[34px] md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block lg:whitespace-nowrap">
                Más que créditos
              </span>
              <span className="block text-brand-aqua lg:whitespace-nowrap">
                acompañamos historias
              </span>
            </h1>

            <p className="font-brand mt-5 max-w-[600px] text-[20px] font-medium leading-[28px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[18px] max-sm:leading-[24px] md:text-[24px] md:leading-[32px]">
              Diseñamos soluciones financieras pensando
              <br className="hidden sm:block" />
              en las personas, sus metas y la tranquilidad
              <br className="hidden sm:block" />
              de sus hogares.
            </p>

            <div className="mt-10 max-sm:mt-8">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px] max-sm:text-[20px]"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 flex min-h-[370px] items-end justify-center max-sm:min-h-[335px] lg:min-h-[620px]"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/lineas-creditos/hero-lineas-creditos.png"
              alt="Mujer sonriendo con ambos pulgares arriba"
              width={900}
              height={760}
              priority
              className="absolute bottom-0 left-1/2 h-[370px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[335px] lg:left-auto lg:right-[-85px] lg:h-[600px] lg:translate-x-0 xl:right-[-70px] xl:h-[635px] 2xl:right-[-95px]"
              draggable={false}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-16 max-sm:py-12 md:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-[1240px]">
          <AnimatedSection className="text-center">
            <h2 className="font-display text-[40px] font-bold leading-[42px] tracking-[0.02em] max-sm:text-[34px] max-sm:leading-[36px] md:text-[56px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block text-brand-aqua">
                Soluciones para cada momento
              </span>
              <span className="block text-brand-dark">de tu vida</span>
            </h2>
          </AnimatedSection>

          <CreditLinesSlider />

          <div className="mt-12 text-center max-sm:mt-10">
            <Button
              href={SITE_CONFIG.creditUrl}
              className="h-[54px] w-[252px] rounded-[16px] px-0 py-0 font-button text-[18px] font-medium leading-none text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px]"
            >
              Solicita tu crédito
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 max-sm:py-12 md:px-8 lg:py-[70px]">
        <div className="mx-auto max-w-6xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-[38px] font-bold leading-[42px] tracking-[0.02em] text-brand-dark max-sm:text-[34px] max-sm:leading-[36px] md:text-[54px] md:leading-[56px]">
              Empieza a gestionar tu crédito
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-10 max-sm:gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {stats.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={112}
                    height={112}
                    className="h-[100px] w-[100px] object-contain max-sm:h-[92px] max-sm:w-[92px]"
                    draggable={false}
                  />

                  <h3 className="font-display mt-5 text-[24px] font-bold leading-[26px] tracking-[0.02em] text-brand-dark max-sm:text-[23px] max-sm:leading-[25px]">
                    <span className="block">
                      {item.type === "counter" ? (
                        <AnimatedCounter
                          end={item.end}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          formatThousands={item.formatThousands}
                          duration={2800}
                        />
                      ) : (
                        item.value
                      )}
                    </span>

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
