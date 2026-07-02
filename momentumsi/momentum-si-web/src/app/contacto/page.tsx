import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para resolver tus dudas sobre créditos, solicitudes y servicios de MoMentum SÍ.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="¿Tienes alguna duda?"
        description="Desde tu primera consulta hasta el desembolso de tu crédito, nuestro equipo estará contigo para resolver tus dudas."
        imageLabel="Decoración visual pendiente por exportar desde Figma"
      />

      <section className="bg-brand-soft px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-black text-brand-aqua md:text-5xl">
            Queremos que te sientas seguro en cada paso.
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-xl font-bold leading-relaxed text-brand-dark">
            Si necesitas orientación sobre nuestros créditos o tu solicitud,
            nuestro equipo está listo para ayudarte de la forma que prefieras.
          </p>

          <article className="mx-auto mt-16 max-w-xl rounded-[2rem] bg-white px-8 py-12 shadow-sm">
            <h2 className="text-4xl font-black text-brand-dark">Escríbenos</h2>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-2 inline-block text-2xl font-black text-brand-aqua transition hover:text-brand-dark"
            >
              {SITE_CONFIG.email}
            </a>

            <div className="mx-auto mt-2 h-1 w-48 rounded-full bg-brand-lime" />

            <p className="mx-auto mt-6 max-w-sm text-xl font-bold leading-tight text-brand-dark">
              Te respondemos lo antes posible para resolver tus dudas.
            </p>
          </article>
        </div>
      </section>

      <section className="min-h-[260px] bg-white" />
    </main>
  );
}
