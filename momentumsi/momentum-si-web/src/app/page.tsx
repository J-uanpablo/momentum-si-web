import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE_CONFIG } from "@/constants/site";

const benefits = [
  "Crédito de Libranza",
  "Compra de Motos",
  "Convenios",
  "Crédito Rotativo",
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-aqua">
        <div className="absolute -left-24 bottom-8 h-52 w-52 rounded-full border-[34px] border-white/15" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full border-[60px] border-white/10" />

        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1fr_0.9fr]">
          <AnimatedSection className="relative z-10 max-w-3xl" direction="left">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              El impulso financiero que necesitas,{" "}
              <span className="text-brand-dark">directo a tu nómina.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-bold leading-relaxed text-white">
              En MoMentum SÍ apoyamos el crecimiento de los colaboradores del
              Grupo MoMentum y sus filiales. Créditos 100 % digitales, rápidos y
              sin complicaciones.
            </p>

            <div className="mt-9">
              <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 hidden min-h-[420px] items-end justify-center lg:flex"
            direction="right"
            delay={0.15}
          >
            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-white/15 text-center">
              <p className="max-w-xs text-2xl font-black text-white">
                Aquí irá la imagen principal exportada desde Figma
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
            Beneficios que impulsan{" "}
            <span className="text-brand-aqua">tu bienestar</span>
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit}
                className="text-center"
                delay={index * 0.08}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-aqua text-3xl font-black text-white">
                  ✓
                </div>
                <h3 className="mt-5 text-xl font-black text-brand-dark">
                  {benefit}
                </h3>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="min-h-[320px] rounded-tr-[140px] bg-white/10 p-8">
            <p className="text-xl font-bold text-white/75">
              Aquí irá la imagen del bloque “La gente primero”.
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black leading-none tracking-tight">
              La gente <span className="text-brand-aqua">primero</span>
            </h2>
            <p className="mt-5 max-w-xl text-xl font-bold leading-relaxed text-white">
              Más de 6.000 colaboradores cuentan con beneficios pensados para
              mejorar su bienestar y acompañar sus proyectos de vida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <article className="rounded-3xl bg-brand-lime p-10">
            <h2 className="text-4xl font-black leading-none text-brand-dark">
              ¿Por qué Momentum SÍ?
            </h2>
          </article>

          <article className="rounded-3xl bg-brand-dark p-10 text-white">
            <p className="text-5xl">⚡</p>
            <h3 className="mt-8 text-4xl font-black leading-none">
              Aprobación en Minutos
            </h3>
            <p className="mt-3 text-lg font-bold text-white/80">
              Comodidad y tranquilidad en cada pago.
            </p>
          </article>

          <article className="rounded-3xl bg-brand-aqua p-10 text-brand-dark">
            <p className="text-5xl">$</p>
            <h3 className="mt-8 text-4xl font-black leading-none">
              Descuento por Nómina
            </h3>
            <p className="mt-3 text-lg font-bold">Procesos ágiles para ti.</p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-aqua px-5 py-16 text-center md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Tu próxima meta está{" "}
            <span className="text-brand-dark">más cerca</span> de lo que
            imaginas.
          </h2>

          <div className="mt-8">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
