import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "¿Cómo Funciona?",
  description:
    "Conoce el paso a paso para solicitar tu crédito de forma simple, rápida y 100% digital.",
};

const steps = [
  {
    number: "1",
    title: "Acceso exclusivo a tu portal",
    description:
      "Ingresa a tu portal privado y realiza todos tus procesos de manera sencilla.",
  },
  {
    number: "2",
    title: "Regístrate",
    description:
      "Completa tus datos básicos. Parte de la información será validada con tu área de nómina.",
    featured: true,
  },
  {
    number: "3",
    title: "Simula crédito",
    description:
      "Elige la línea de crédito, el monto que necesitas y el plazo que prefieres.",
  },
  {
    number: "4",
    title: "Firma digital",
    description:
      "Si tu crédito es aprobado, firma tu contrato de manera electrónica y segura.",
  },
  {
    number: "5",
    title: "Recibe tu dinero",
    description: "Transferimos los fondos directamente a tu cuenta bancaria.",
    featured: true,
  },
  {
    number: "6",
    title: "Recaudo",
    description: "Descontamos tu cuota automáticamente desde la nómina.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      <div className="h-[12px] bg-white" aria-hidden="true" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div
          className="absolute -left-[115px] bottom-[-55px] hidden h-[300px] w-[300px] rounded-full border-[58px] border-white/18 md:block"
          aria-hidden="true"
        />

        <div
          className="absolute right-[-300px] top-[-515px] hidden h-[1040px] w-[1040px] rounded-full border-[220px] border-white/12 lg:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-4 px-5 pb-0 pt-14 max-sm:min-h-0 max-sm:pt-12 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[760px] max-lg:mx-auto max-lg:text-center lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[44px] font-bold leading-[44px] tracking-[0.02em] max-sm:text-[34px] max-sm:leading-[36px] max-[380px]:text-[31px] max-[380px]:leading-[33px] md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block text-brand-aqua lg:whitespace-nowrap">
                Conoce el paso a paso
              </span>
              <span className="block text-white lg:whitespace-nowrap">
                para solicitar tu crédito.
              </span>
            </h1>

            <p className="font-brand mt-4 max-w-[460px] text-[20px] font-bold leading-[26px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[18px] max-sm:leading-[24px] md:text-[24px] md:leading-[30px]">
              Todo el proceso es simple, rápido y
              <br />
              100 % digital.
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
            className="relative z-10 flex min-h-[370px] items-end justify-center max-sm:min-h-[335px] lg:min-h-[620px] lg:justify-end"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/como-funciona/hero-como-funciona.png"
              alt="Mujer revisando su celular para solicitar crédito"
              width={720}
              height={720}
              priority
              className="absolute bottom-0 left-1/2 h-[365px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[335px] lg:left-auto lg:right-[-35px] lg:h-[555px] lg:translate-x-0 xl:right-[-20px] xl:h-[615px] 2xl:right-[-10px]"
              draggable={false}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 max-sm:py-12 md:px-8 lg:py-[70px]">
        <div className="mx-auto grid max-w-[1320px] gap-x-12 gap-y-16 max-sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.08}>
              <article
                className={`relative min-h-[220px] rounded-[22px] border-t-[10px] border-brand-lime px-8 pb-8 pt-9 shadow-sm max-sm:min-h-[205px] max-sm:px-6 max-sm:pb-7 max-sm:pt-9 ${
                  step.featured
                    ? "bg-brand-aqua text-white"
                    : "bg-white text-brand-dark"
                }`}
              >
                <div
                  className={`absolute -left-3 -top-6 flex h-[58px] w-[58px] items-center justify-center rounded-full font-display text-[30px] font-bold leading-none max-sm:h-[54px] max-sm:w-[54px] max-sm:text-[28px] ${
                    step.featured
                      ? "bg-brand-lime text-brand-dark"
                      : "bg-brand-aqua text-white"
                  }`}
                >
                  {step.number}
                </div>

                <h2
                  className={`font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] max-sm:text-[30px] max-sm:leading-[31px] md:text-[38px] md:leading-[38px] ${
                    step.featured ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {step.title}
                </h2>

                <p
                  className={`font-brand mt-2 max-w-[320px] text-[20px] font-bold leading-[25px] tracking-[0em] max-sm:text-[18px] max-sm:leading-[23px] ${
                    step.featured ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {step.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-center max-sm:py-12 md:px-8 lg:py-[72px]">
        <AnimatedSection>
          <h2 className="font-display text-[42px] font-bold leading-[44px] tracking-[0.02em] text-brand-dark max-sm:text-[34px] max-sm:leading-[36px] md:text-[58px] md:leading-[58px]">
            ¿Listo para comenzar?
          </h2>

          <div className="mx-auto mt-4 flex h-[5px] w-[280px] overflow-hidden rounded-full max-sm:w-[230px] md:w-[310px]">
            <div className="h-full flex-1 bg-brand-aqua" />
            <div className="h-full flex-1 bg-brand-lime" />
          </div>

          <div className="mt-8">
            <Button
              href={SITE_CONFIG.creditUrl}
              className="h-[54px] w-[252px] rounded-[18px] px-0 py-0 font-button text-[22px] font-medium leading-none text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px] max-sm:text-[20px]"
            >
              Solicita tu crédito
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
