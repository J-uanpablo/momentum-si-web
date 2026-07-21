import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";

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

        <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-4 px-5 pb-0 pt-14 max-sm:min-h-[500px] max-sm:pt-12 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-0 xl:min-h-[620px]">
          <AnimatedSection
            className="relative z-10 max-w-[820px] max-lg:text-center lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display max-w-[766px] text-[46px] font-bold leading-[44px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[38px] max-sm:leading-[38px] max-[380px]:text-[34px] max-[380px]:leading-[35px] md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
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

            <p className="font-brand mt-5 max-w-[650px] text-[18px] font-bold leading-[24px] tracking-[0.02em] text-white max-lg:mx-auto max-sm:text-[17px] max-sm:leading-[23px] md:text-[20px] md:leading-[26px]">
              <span className="[word-spacing:0.25em] max-sm:[word-spacing:0em]">
                En MoMentum SÍ apoyamos el crecimiento de los{" "}
              </span>
              <br className="hidden sm:block" />
              <span className="[word-spacing:0.25em] max-sm:[word-spacing:0em]">
                colaboradores del Grupo MoMentum y sus filiales,{" "}
              </span>
              <br className="hidden sm:block" />
              <span className="text-brand-dark">
                Créditos 100 % digitales, rápidos y sin complicaciones.
              </span>
            </p>

            <div className="mt-10 max-sm:mt-8">
              <Button
                href={SITE_CONFIG.creditUrl}
                className="font-button px-7 py-3.5 text-[22px] font-medium text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px] max-sm:text-[20px]"
              >
                Solicita tu crédito
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 flex min-h-[360px] items-end justify-center max-sm:min-h-[330px] lg:min-h-[560px] xl:min-h-[620px]"
            direction="right"
            delay={0.15}
          >
            <div className="relative h-[360px] w-full max-sm:h-[330px] lg:h-[560px] xl:h-[620px]">
              <Image
                src="/images/home/hero-home.png"
                alt="Mujer sonriendo y haciendo gesto de aprobación para solicitar crédito"
                width={821}
                height={634}
                priority
                className="absolute bottom-0 left-1/2 h-[370px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[340px] lg:left-auto lg:right-[-45px] lg:top-0 lg:h-[620px] lg:translate-x-0 xl:right-[-75px] xl:h-[670px] 2xl:right-[-120px] 2xl:h-[710px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 max-sm:py-12 md:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[40px] font-bold leading-none tracking-[0em] text-brand-dark max-sm:text-[34px] max-sm:leading-[36px] md:text-[55px]">
            Beneficios que impulsan{" "}
            <span className="text-brand-aqua">tu bienestar</span>
          </h2>

          <div className="mt-12 grid gap-10 max-sm:mt-10 max-sm:gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                className="group text-center"
                delay={index * 0.08}
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center max-sm:h-24 max-sm:w-24">
                  <AnimatedIcon
                    src={benefit.icon}
                    alt={benefit.alt}
                    width={112}
                    height={112}
                    delay={index * 0.15}
                    className="h-28 w-28 object-contain max-sm:h-24 max-sm:w-24"
                  />
                </div>

                <h3 className="font-display mt-5 text-[20px] font-bold leading-none tracking-[0em] text-brand-dark max-sm:text-[22px] md:text-[24px]">
                  {benefit.title}
                </h3>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href={SITE_CONFIG.creditUrl}
              className="h-[54px] w-[252px] rounded-[16px] font-medium text-[18px] text-brand-dark/80 max-sm:w-full max-sm:max-w-[290px]"
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

        <div className="mx-auto grid min-h-[530px] max-w-7xl items-center gap-10 px-5 pb-0 pt-12 max-lg:gap-0 max-sm:min-h-0 max-sm:pt-10 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:pt-0">
          <AnimatedSection
            className="relative z-10 order-2 min-h-[330px] max-sm:min-h-[300px] lg:order-1 lg:min-h-[430px]"
            direction="left"
          >
            <Image
              src="/images/home/people-first.png"
              alt="Colaboradores de MoMentum SÍ sonriendo"
              width={746}
              height={490}
              className="absolute bottom-0 left-1/2 h-auto w-[520px] max-w-none -translate-x-1/2 object-contain max-sm:w-[410px] md:w-[560px] lg:bottom-[-50px] lg:left-[-95px] lg:w-[720px] lg:translate-x-0 xl:left-[-130px] xl:w-[780px]"
            />
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 order-1 max-w-[720px] pb-8 pt-4 max-lg:mx-auto max-lg:text-center max-sm:pb-6 max-sm:pt-0 lg:order-2 lg:ml-[70px] lg:pb-0 lg:pt-0 xl:ml-[105px] 2xl:ml-[130px]"
            direction="right"
            delay={0.15}
          >
            <h2 className="font-display max-w-[720px] text-[44px] font-bold leading-[44px] tracking-[0.02em] text-white max-sm:text-[38px] max-sm:leading-[38px] md:text-[54px] md:leading-[54px] lg:text-[56px] lg:leading-[56px] xl:text-[64px] xl:leading-[60px]">
              <span className="lg:whitespace-nowrap">
                La gente <span className="text-brand-aqua">primero</span>
              </span>
            </h2>

            <p className="font-brand mt-4 max-w-[560px] text-[20px] font-medium leading-[26px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[18px] max-sm:leading-[24px] md:text-[24px] md:leading-[30px]">
              <span className="text-brand-aqua">
                Más de 6.000 colaboradores
              </span>{" "}
              cuentan con beneficios pensados para mejorar su bienestar y
              acompañar sus proyectos de vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-10 max-sm:py-8 md:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[1.45fr_0.72fr_0.9fr]">
          <div className="grid gap-7">
            <AnimatedSection>
              <article className="flex min-h-[196px] items-center rounded-[32px] bg-brand-lime px-10 max-sm:min-h-[155px] max-sm:rounded-[24px] max-sm:px-7 md:px-16">
                <h2 className="font-display max-w-[620px] text-[48px] font-bold leading-[46px] tracking-[0.02em] text-brand-dark max-sm:text-[38px] max-sm:leading-[38px] md:text-[64px] md:leading-[60px]">
                  <span className="block">¿Por qué</span>
                  <span className="block whitespace-nowrap">
                    MoMentum{"\u00A0"}Sí?
                  </span>
                </h2>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <article className="group grid min-h-[174px] items-center rounded-[32px] bg-brand-aqua px-10 max-sm:min-h-[255px] max-sm:rounded-[24px] max-sm:px-7 max-sm:py-8 max-sm:text-center md:grid-cols-[1fr_auto] md:px-16">
                <div>
                  <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark max-sm:text-[32px] max-sm:leading-[32px] md:text-[40px] md:leading-[40px]">
                    100% Digital y
                    <br />
                    sin filas
                  </h3>

                  <p className="font-brand mt-2 max-w-[360px] text-[18px] font-medium leading-[22px] tracking-[0.02em] text-brand-dark max-sm:mx-auto md:text-[24px] md:leading-[30px]">
                    Solicita tu crédito desde
                    <br />
                    cualquier lugar.
                  </p>
                </div>

                <div className="mt-8 flex justify-center md:mt-0 md:pr-6">
                  <AnimatedIcon
                    src="/images/home/why/icon-digital.png"
                    alt="Ícono de crédito digital desde celular"
                    width={110}
                    height={110}
                    delay={0.1}
                    floating
                    className="h-[110px] w-[110px] object-contain max-sm:h-[96px] max-sm:w-[96px]"
                  />
                </div>
              </article>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.14}>
            <article className="group flex min-h-[397px] flex-col items-center justify-center rounded-[32px] bg-brand-dark px-8 text-center text-white max-sm:min-h-[330px] max-sm:rounded-[24px] max-sm:px-6 max-sm:py-8">
              <div className="mb-8 max-sm:mb-5">
                <AnimatedIcon
                  src="/images/home/why/icon-aprobacion.png"
                  alt="Ícono de aprobación rápida"
                  width={140}
                  height={140}
                  delay={0.2}
                  floating
                  className="h-[140px] w-[140px] object-contain drop-shadow-[0_8px_18px_rgba(37,189,193,0.35)] max-sm:h-[115px] max-sm:w-[115px]"
                />
              </div>

              <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-white max-sm:text-[32px] max-sm:leading-[32px] md:text-[40px] md:leading-[40px]">
                Aprobación
                <br />
                en Minutos
              </h3>

              <p className="font-brand mt-2 max-w-[300px] text-[18px] font-medium leading-[20px] tracking-[0.02em] text-white max-sm:leading-[22px] md:text-[24px] md:leading-[22px]">
                Comodidad y tranquilidad
                <br />
                en cada pago.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <article className="group flex min-h-[397px] flex-col items-center justify-center rounded-[32px] bg-brand-aqua px-8 text-center max-sm:min-h-[330px] max-sm:rounded-[24px] max-sm:px-6 max-sm:py-8">
              <div className="mb-8 max-sm:mb-5">
                <AnimatedIcon
                  src="/images/home/why/icon-nomina.png"
                  alt="Ícono de descuento por nómina"
                  width={140}
                  height={140}
                  delay={0.35}
                  floating
                  className="h-[140px] w-[140px] object-contain drop-shadow-[0_16px_22px_rgba(11,56,59,0.18)] max-sm:h-[115px] max-sm:w-[115px]"
                />
              </div>

              <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark max-sm:text-[32px] max-sm:leading-[32px] md:text-[40px] md:leading-[40px]">
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
        <div
          className="absolute -left-[95px] -top-[95px] hidden h-[250px] w-[250px] rounded-full border-[42px] border-white/15 md:block"
          aria-hidden="true"
        />

        {/* Figura decorativa derecha exportada desde Figma */}
        <Image
          src="/images/home/cta/cta-bars.png"
          alt=""
          width={566}
          height={250}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 z-10 hidden h-[280px] w-auto object-contain lg:block xl:right-[-10px]"
        />

        <div className="mx-auto grid min-h-[300px] max-w-[1440px] items-center gap-8 px-5 pb-0 pt-12 max-sm:pt-14 md:px-10 lg:grid-cols-[1.35fr_0.65fr] lg:py-0">
          <AnimatedSection
            className="relative z-20 text-center lg:pl-10"
            direction="left"
          >
            <h2 className="mx-auto max-w-[854px] text-center font-display text-[34px] font-bold leading-[36px] tracking-[0.02em] text-white max-sm:text-[30px] max-sm:leading-[34px] md:text-[44px] md:leading-[46px] lg:text-[50px] lg:leading-[50px]">
              <span className="block lg:whitespace-nowrap">
                Tu próxima meta está{" "}
                <span className="text-brand-dark lg:whitespace-nowrap">
                  más{"\u00A0"}cerca
                </span>
              </span>
              <span className="block">de lo que imaginas.</span>
            </h2>

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
            className="relative z-20 flex min-h-[260px] items-end justify-center max-sm:min-h-[240px] lg:min-h-[300px]"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/home/cta/cta-man.png"
              alt="Hombre revisando su celular para solicitar crédito"
              width={330}
              height={390}
              className="absolute bottom-0 left-1/2 h-[255px] w-auto -translate-x-1/2 object-contain max-sm:h-[235px] lg:left-auto lg:right-[96px] lg:h-[292px] lg:translate-x-0 xl:right-[120px]"
            />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
