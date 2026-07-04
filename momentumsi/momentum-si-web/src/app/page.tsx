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
    <main className="bg-white">
      <div className="h-[12px] bg-white" aria-hidden="true" />

      <section className="relative overflow-hidden bg-brand-aqua">
        {/* Círculo decorativo izquierdo */}
        <div className="absolute -left-[130px] bottom-[-10px] hidden h-[310px] w-[310px] rounded-full border-[58px] border-white/15 md:block" />

        {/* Círculo decorativo derecho estilo maqueta */}
        <div className="absolute -right-[300px] -top-[520px] hidden h-[1040px] w-[1040px] rounded-full border-[220px] border-white/12 lg:block xl:-right-[310px] xl:-top-[540px] 2xl:-right-[300px] 2xl:-top-[560px]" />

        <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-4 px-5 py-14 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-0 xl:min-h-[620px]">
          <AnimatedSection
            className="relative z-10 max-w-[820px] lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display max-w-[766px] text-[46px] font-bold leading-[44px] tracking-[0em] text-white md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              <span className="block lg:whitespace-nowrap">
                El impulso financiero
              </span>
              <span className="block lg:whitespace-nowrap">
                que necesitas,{" "}
                <span className="text-brand-dark">directo a</span>
              </span>
              <span className="block text-brand-dark lg:whitespace-nowrap">
                tu nómina.
              </span>
            </h1>

            <p className="font-brand mt-5 max-w-[650px] text-[18px] font-bold leading-[24px] tracking-[0.02em] text-white  md:text-[20px] md:leading-[26px]">
              <span className="[word-spacing:0.25em]">
                En MoMentum SÍ apoyamos el crecimiento de los
              </span>
              <br />
              <span className="[word-spacing:0.25em]">
                colaboradores del Grupo MoMentum y sus filiales,
              </span>
              <br />
              <span className="text-brand-dark">
                Créditos 100 % digitales, rápidos y sin complicaciones.
              </span>
            </p>

            <div className="mt-10">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="font-button px-7 py-3.5 text-[22px] font-medium text-brand-dark/80"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 hidden min-h-[560px] items-start justify-center lg:flex xl:min-h-[620px]"
            direction="right"
            delay={0.15}
          >
            <div className="relative h-[560px] w-full xl:h-[620px]">
              <Image
                src="/images/home/hero-home.png"
                alt="Mujer sonriendo y haciendo gesto de aprobación para solicitar crédito"
                width={821}
                height={634}
                priority
                className="absolute top-0 right-[-35px] h-[610px] w-auto max-w-none object-contain lg:right-[-45px] lg:h-[620px] xl:right-[-75px] xl:h-[670px] 2xl:right-[-120px] 2xl:h-[710px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 md:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[40px] font-bold leading-none tracking-[0em] text-brand-dark md:text-[55px]">
            Beneficios que impulsan{" "}
            <span className="text-brand-aqua">tu bienestar</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
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

                <h3 className="font-display mt-5 text-[20px] font-bold leading-none tracking-[0em] text-brand-dark md:text-[24px]">
                  {benefit.title}
                </h3>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href={SITE_CONFIG.creditUrl}
              className="font-medium h-[44px] w-[230px] rounded-[16px] text-[18px] text-brand-dark/80"
            >
              Solicita tu crédito
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark text-white">
        {/* Círculos decorativos de fondo */}
        <div className="absolute -left-[370px] -top-[370px] hidden size-[960px] rounded-full bg-brand-aqua/55 lg:block" />
        <div className="absolute -left-[170px] -top-[170px] hidden size-[560px] rounded-full bg-brand-dark lg:block" />

        <div className="mx-auto grid min-h-[530px] max-w-7xl items-center pt-12 gap-10 px-5  md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:pt-0">
          <AnimatedSection
            className="relative z-10 min-h-[360px] lg:min-h-[430px]"
            direction="left"
          >
            <Image
              src="/images/home/people-first.png"
              alt="Colaboradores de MoMentum SÍ sonriendo"
              width={746}
              height={490}
              className="absolute bottom-[-50px] left-[-0px] h-auto w-[620px] max-w-none object-contain md:left-[-10px] lg:left-[-95px] lg:w-[720px] xl:left-[-130px] xl:w-[780px]"
            />
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 max-w-[576px] pb-16 pt-4 lg:ml-[90px] lg:pb-0 lg:pt-0 xl:ml-[130px] 2xl:ml-[150px]"
            direction="right"
            delay={0.15}
          >
            <h2 className="font-display max-w-[576px] text-[46px] font-bold leading-[44px] tracking-[0.02em] text-white md:text-[56px] md:leading-[54px] lg:text-[64px] lg:leading-[60px]">
              La gente <span className="text-brand-aqua">primero</span>
            </h2>

            <p className="font-brand mt-4 max-w-[538px] text-[20px] font-medium leading-[26px] tracking-[0em] text-white md:text-[24px] md:leading-[30px]">
              <span className="text-brand-aqua">
                Más de 6.000 colaboradores
              </span>{" "}
              cuentan con beneficios pensados para mejorar su bienestar y
              acompañar sus proyectos de vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[1.45fr_0.72fr_0.9fr]">
          <div className="grid gap-7">
            <AnimatedSection>
              <article className="flex min-h-[196px] items-center rounded-[32px] bg-brand-lime px-10 md:px-16">
                <h2 className="font-display max-w-[560px] text-[48px] font-bold leading-[46px] tracking-[0.02em] text-brand-dark md:text-[64px] md:leading-[60px]">
                  ¿Por qué
                  <br />
                  Momentum Sí?
                </h2>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <article className="grid min-h-[174px] items-center rounded-[32px] bg-brand-aqua px-10 md:grid-cols-[1fr_auto] md:px-16">
                <div>
                  <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark md:text-[40px] md:leading-[40px]">
                    100% Digital y
                    <br />
                    sin filas
                  </h3>

                  <p className="font-brand mt-2 max-w-[360px] text-[18px] font-medium leading-[22px] tracking-[0.02em] text-brand-dark md:text-[24px] md:leading-[30px]">
                    Solicita tu crédito desde
                    <br />
                    cualquier lugar.
                  </p>
                </div>

                <div className="mt-8 flex justify-center md:mt-0 md:pr-6">
                  <Image
                    src="/images/home/why/icon-digital.png"
                    alt="Ícono de crédito digital desde celular"
                    width={110}
                    height={110}
                    className="h-[110px] w-[110px] object-contain"
                  />
                </div>
              </article>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.14}>
            <article className="flex min-h-[397px] flex-col items-center justify-center rounded-[32px] bg-brand-dark px-8 text-center text-white">
              <Image
                src="/images/home/why/icon-aprobacion.png"
                alt="Ícono de aprobación rápida"
                width={140}
                height={140}
                className="mb-8 h-[140px] w-[140px] object-contain drop-shadow-[0_8px_18px_rgba(37,189,193,0.35)]"
              />

              <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-white md:text-[40px] md:leading-[40px]">
                Aprobación
                <br />
                en Minutos
              </h3>

              <p className="font-brand mt-2 max-w-[300px] text-[18px] font-medium leading-[20px] tracking-[0.02em] text-white md:text-[24px] md:leading-[22px]">
                Comodidad y tranquilidad
                <br />
                en cada pago.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <article className="flex min-h-[397px] flex-col items-center justify-center rounded-[32px] bg-brand-aqua px-8 text-center">
              <Image
                src="/images/home/why/icon-nomina.png"
                alt="Ícono de descuento por nómina"
                width={140}
                height={140}
                className="mb-8 h-[140px] w-[140px] object-contain drop-shadow-[0_16px_22px_rgba(11,56,59,0.18)]"
              />

              <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark md:text-[40px] md:leading-[40px]">
                Descuento
                <br />
                por Nómina
              </h3>

              <p className="font-brand mt-2 text-[18px] font-medium leading-[22px] tracking-[0.02em] text-brand-dark md:text-[24px] md:leading-[32px]">
                Procesos ágiles para ti.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-aqua">
        {/* Círculo decorativo izquierdo */}
        <div className="absolute -left-[95px] -top-[95px] hidden h-[250px] w-[250px] rounded-full border-[42px] border-white/15 md:block" />

        {/* Figura decorativa derecha exportada desde Figma */}
        <Image
          src="/images/home/cta/cta-bars.png"
          alt=""
          width={566}
          height={250}
          aria-hidden="true"
          className="pointer-events-none absolute  top-[0px] z-10 hidden h-[280px] w-auto object-contain lg:block xl:right-[-10px]"
        />

        <div className="mx-auto grid min-h-[300px] max-w-[1440px] items-center gap-8 px-5 py-12 md:px-10 lg:grid-cols-[1.35fr_0.65fr] lg:py-0">
          <AnimatedSection
            className="relative z-20 text-center lg:pl-10"
            direction="left"
          >
            <h2 className="mx-auto max-w-[854px] text-center font-display text-[34px] font-bold leading-[36px] tracking-[0.02em] text-white md:text-[44px] md:leading-[46px] lg:text-[50px] lg:leading-[50px]">
              <span className="block">
                Tu próxima meta está{" "}
                <span className="text-brand-dark">más cerca</span>
              </span>
              <span className="block">de lo que imaginas.</span>
            </h2>

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
            className="relative z-20 hidden min-h-[300px] items-end justify-center lg:flex"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/home/cta/cta-man.png"
              alt="Hombre revisando su celular para solicitar crédito"
              width={330}
              height={390}
              className="absolute bottom-0 right-[96px] h-[292px] w-auto object-contain xl:right-[120px]"
            />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
