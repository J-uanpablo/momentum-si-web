import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para resolver tus dudas sobre créditos, solicitudes y servicios de MoMentum SÍ.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="h-[12px] bg-white" aria-hidden="true" />

      <section className="relative overflow-hidden bg-brand-aqua">
        <div
          className="absolute -left-[115px] bottom-[-55px] hidden h-[300px] w-[300px] rounded-full border-[58px] border-white/18 md:block"
          aria-hidden="true"
        />

        <div
          className="absolute right-[-260px] top-[-525px] hidden h-[1040px] w-[1040px] rounded-full border-[220px] border-white/10 lg:block"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[520px] max-w-[1440px] items-center px-5 py-14 md:px-10 lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[680px] lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-brand-dark md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              ¿Tienes alguna duda?
            </h1>

            <p className="font-brand mt-3 max-w-[650px] text-[20px] font-bold leading-[26px] tracking-[0em] text-white md:text-[24px] md:leading-[30px]">
              Desde tu primera consulta hasta el desembolso de tu
              <br />
              crédito, nuestro equipo estará contigo para resolver tus
              <br />
              dudas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-20 md:px-8 lg:py-[92px]">
        <AnimatedSection className="mx-auto max-w-[920px] text-center">
          <h2 className="font-display text-[34px] font-bold leading-[38px] tracking-[0.02em] text-brand-aqua md:text-[42px] md:leading-[46px]">
            Queremos que te sientas seguro en cada paso.
          </h2>

          <p className="font-brand mx-auto mt-2 max-w-[860px] text-[20px] font-bold leading-[25px] tracking-[0em] text-brand-dark md:text-[22px] md:leading-[28px]">
            Si necesitas orientación sobre nuestros créditos o tu solicitud,
            nuestro equipo
            <br className="hidden md:block" />
            está listo para ayudarte de la forma que prefieras.
          </p>

          <article className="mx-auto mt-16 max-w-[560px] rounded-[28px] bg-white px-8 py-12 shadow-sm md:px-12">
            <h3 className="font-display text-[38px] font-bold leading-none tracking-[0.02em] text-brand-dark md:text-[42px]">
              Escríbenos
            </h3>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-brand mt-3 inline-block text-[22px] font-bold leading-none text-brand-aqua transition hover:text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
            >
              {SITE_CONFIG.email}
            </a>

            <div
              className="mx-auto mt-2 h-[5px] w-[190px] rounded-full bg-brand-lime"
              aria-hidden="true"
            />

            <p className="font-brand mx-auto mt-7 max-w-[370px] text-[21px] font-bold leading-[24px] tracking-[0em] text-brand-dark">
              Te respondemos lo antes posible
              <br />
              para resolver tus dudas.
            </p>
          </article>
        </AnimatedSection>
      </section>

      <section className="min-h-[360px] bg-white" aria-hidden="true" />
    </main>
  );
}
