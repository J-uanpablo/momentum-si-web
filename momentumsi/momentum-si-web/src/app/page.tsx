import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";

const benefits = [
  {
    title: "Crédito de Libranza",
    icon: "/images/home/icons/icon-libranza.png",
    alt: "Ícono de crédito de libranza",
  },
  {
    title: "Compra de Motos",
    icon: "/images/home/icons/icon-motos.png",
    alt: "Ícono de compra de motos",
  },
  {
    title: "Convenios",
    icon: "/images/home/icons/icon-convenios.png",
    alt: "Ícono de convenios",
  },
  {
    title: "Crédito Rotativo",
    icon: "/images/home/icons/icon-rotativo.png",
    alt: "Ícono de crédito rotativo",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-aqua">
        <div className="absolute -left-24 bottom-8 h-52 w-52 rounded-full border-[34px] border-white/15" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full border-[60px] border-white/10" />

        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1fr_0.9fr]">
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
            className="relative z-10 hidden min-h-[520px] items-end justify-center lg:flex"
            direction="right"
            delay={0.15}
          >
            <div className="relative h-[520px] w-full">
              <Image
                src="/images/home/hero-home.png"
                alt="Mujer sonriendo y haciendo gesto de aprobación para solicitar crédito"
                width={821}
                height={634}
                priority
                className="absolute bottom-[-65px] right-[-40px] h-auto w-[620px] max-w-none object-contain xl:w-[700px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
            Beneficios que impulsan{" "}
            <span className="text-brand-aqua">tu bienestar</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                className="text-center"
                delay={index * 0.08}
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.alt}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain transition duration-300 hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-brand-dark md:text-2xl">
                  {benefit.title}
                </h3>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute left-0 top-0 hidden h-full w-[38%] rounded-br-[220px] bg-brand-aqua/45 lg:block" />
        <div className="absolute left-0 top-0 hidden h-full w-[26%] rounded-br-[200px] bg-brand-dark lg:block" />

        <div className="mx-auto grid min-h-[430px] max-w-7xl items-center gap-10 px-5 pt-12 md:px-8 lg:grid-cols-[1fr_1fr] lg:pt-0">
          <AnimatedSection
            className="relative z-10 min-h-[360px] lg:min-h-[430px]"
            direction="left"
          >
            <Image
              src="/images/home/people-first.png"
              alt="Colaboradores de MoMentum SÍ sonriendo"
              width={746}
              height={490}
              className="absolute bottom--20 left-[-60px] h-auto w-[620px] max-w-none object-contain md:left-[-20px] lg:left-[-80px] lg:w-[720px] xl:left-[-120px] xl:w-[780px]"
            />
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 pb-16 pt-4 lg:pb-0 lg:pt-0"
            direction="right"
            delay={0.15}
          >
            <h2 className="text-5xl font-black leading-none tracking-tight md:text-6xl">
              La gente <span className="text-brand-aqua">primero</span>
            </h2>

            <p className="mt-5 max-w-2xl text-xl font-bold leading-relaxed text-white md:text-2xl">
              <span className="text-brand-aqua">
                Más de 6.000 colaboradores
              </span>{" "}
              cuentan con beneficios pensados para mejorar su bienestar y
              acompañar sus proyectos de vida.
            </p>
          </AnimatedSection>
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
