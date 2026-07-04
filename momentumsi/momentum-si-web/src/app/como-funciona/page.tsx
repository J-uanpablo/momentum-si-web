import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
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
    <main>
      <div className="h-[12px] bg-white" aria-hidden="true" />
      <PageHero
        title="Conoce el paso a paso para solicitar"
        highlighted="tu crédito."
        description="Todo el proceso es simple, rápido y 100% digital."
      />

      <section className="bg-brand-soft px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.08}>
              <article
                key={step.number}
                className={`relative min-h-[220px] rounded-3xl border-t-8 border-brand-lime p-8 shadow-sm ${
                  step.featured
                    ? "bg-brand-aqua text-white"
                    : "bg-white text-brand-dark"
                }`}
              >
                <div
                  className={`absolute -left-4 -top-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-black ${
                    step.featured
                      ? "bg-brand-lime text-brand-dark"
                      : "bg-brand-aqua text-white"
                  }`}
                >
                  {step.number}
                </div>

                <h2 className="mt-3 text-3xl font-black leading-none">
                  {step.title}
                </h2>
                <p
                  className={`mt-3 text-lg font-bold leading-relaxed ${
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

      <section className="bg-white px-5 py-20 text-center md:px-8">
        <AnimatedSection>
          <h2 className="text-5xl font-black text-brand-dark">
            ¿Listo para comenzar?
          </h2>

          <div className="mx-auto mt-4 h-1.5 w-72 rounded-full bg-gradient-to-r from-brand-aqua via-brand-aqua to-brand-lime" />

          <div className="mt-8">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
