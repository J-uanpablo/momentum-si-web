import type { Metadata } from "next";
import { ContactSubmitLoader } from "@/components/ui/ContactSubmitLoader";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import { ContactStatusModal } from "@/components/ui/ContactStatusModal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para resolver tus dudas sobre créditos, solicitudes y servicios de MoMentum SÍ.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactStatusModal />
      <ContactSubmitLoader />
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

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-8 px-5 pb-0 pt-14 max-sm:min-h-0 max-sm:pt-12 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-0">
          <AnimatedSection
            className="relative z-10 max-w-[680px] max-lg:mx-auto max-lg:text-center lg:pl-8 xl:pl-14 2xl:pl-0"
            direction="left"
          >
            <h1 className="font-display text-[46px] font-bold leading-[44px] tracking-[0.02em] text-brand-dark max-sm:text-[38px] max-sm:leading-[38px] max-[380px]:text-[34px] max-[380px]:leading-[35px] md:text-[58px] md:leading-[56px] lg:text-[64px] lg:leading-[60px]">
              ¿Tienes alguna duda?
            </h1>

            <p className="font-brand mt-3 max-w-[650px] text-[20px] font-bold leading-[26px] tracking-[0em] text-white max-lg:mx-auto max-sm:text-[18px] max-sm:leading-[24px] md:text-[24px] md:leading-[30px]">
              Desde tu primera consulta hasta el desembolso de tu
              <br className="hidden sm:block" />
              crédito, nuestro equipo estará contigo para resolver tus
              <br className="hidden sm:block" />
              dudas.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="relative z-10 flex min-h-[380px] items-end justify-center max-sm:min-h-[345px] lg:min-h-[620px]"
            direction="right"
            delay={0.15}
          >
            <Image
              src="/images/contacto/hero-contacto.png"
              alt="Asesora de MoMentum SÍ sonriendo para atención de contacto"
              width={626}
              height={682}
              priority
              className="absolute bottom-0 left-1/2 h-[380px] w-auto max-w-none -translate-x-1/2 object-contain max-sm:h-[345px] lg:left-auto lg:right-[10px] lg:h-[610px] lg:translate-x-0 xl:right-[45px] xl:h-[640px] 2xl:right-[70px] 2xl:h-[660px]"
              draggable={false}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-20 max-sm:py-12 md:px-8 lg:py-[92px]">
        <div className="mx-auto max-w-[1240px]">
          <AnimatedSection className="mx-auto max-w-[920px] text-center">
            <h2 className="font-display text-[34px] font-bold leading-[38px] tracking-[0.02em] text-brand-aqua max-sm:text-[30px] max-sm:leading-[34px] md:text-[42px] md:leading-[46px] lg:whitespace-nowrap">
              Queremos que te sientas seguro en cada paso.
            </h2>

            <p className="font-brand mx-auto mt-2 max-w-[860px] text-[20px] font-bold leading-[25px] tracking-[0em] text-brand-dark max-sm:text-[18px] max-sm:leading-[24px] md:text-[22px] md:leading-[28px]">
              Si necesitas orientación sobre nuestros créditos o tu solicitud,
              nuestro equipo
              <br className="hidden md:block" />
              está listo para ayudarte de la forma que prefieras.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid items-start gap-10 max-sm:mt-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <AnimatedSection direction="left" delay={0.1}>
              <article className="rounded-[28px] bg-white px-8 py-12 text-center shadow-sm max-sm:rounded-[24px] max-sm:px-6 max-sm:py-10 md:px-12 lg:mt-0">
                <h3 className="font-display text-[38px] font-bold leading-none tracking-[0.02em] text-brand-dark max-sm:text-[34px] md:text-[42px]">
                  Escríbenos
                </h3>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-brand mt-3 inline-block break-all text-[22px] font-bold leading-none text-brand-aqua transition hover:text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-aqua/20 max-sm:text-[19px]"
                >
                  {SITE_CONFIG.email}
                </a>

                <div
                  className="mx-auto mt-2 h-[5px] w-[190px] rounded-full bg-brand-lime max-sm:w-[160px]"
                  aria-hidden="true"
                />

                <p className="font-brand mx-auto mt-7 max-w-[370px] text-[21px] font-bold leading-[24px] tracking-[0em] text-brand-dark max-sm:text-[18px] max-sm:leading-[23px]">
                  Te respondemos lo antes posible
                  <br />
                  para resolver tus dudas.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.16}>
              <article className="rounded-[28px] bg-white px-6 py-8 shadow-sm max-sm:rounded-[24px] max-sm:px-5 max-sm:py-8 md:px-10 md:py-10">
                <div>
                  <h3 className="font-display text-[42px] font-bold leading-none tracking-[0.02em] text-brand-aqua max-sm:text-[38px] md:text-[48px]">
                    PQR
                  </h3>

                  <p className="font-brand mt-1 text-[18px] font-bold leading-[24px] text-brand-dark md:text-[20px]">
                    Peticiones, quejas o reclamos
                  </p>

                  <p className="font-brand mt-5 max-w-[520px] text-[18px] font-medium leading-[24px] text-brand-dark max-sm:text-[17px] max-sm:leading-[23px] md:text-[20px] md:leading-[26px]">
                    En MoMentum SÍ valoramos tus comentarios para seguir
                    brindando la mejor atención.
                  </p>
                </div>

                <form
                  id="pqrs-form"
                  action="/api/pqrs.php"
                  method="POST"
                  className="mt-8 space-y-5"
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div>
                    <label
                      htmlFor="motivo"
                      className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                    >
                      Motivo de la Solicitud
                    </label>

                    <select
                      id="motivo"
                      name="motivo"
                      required
                      defaultValue=""
                      className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                    >
                      <option value="" disabled>
                        Seleccione una opción...
                      </option>
                      <option value="peticion">Petición</option>
                      <option value="queja">Queja</option>
                      <option value="reclamo">Reclamo</option>
                      <option value="solicitud-informacion">
                        Solicitud de información
                      </option>
                    </select>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombres"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Nombres y Apellidos
                      </label>

                      <input
                        id="nombres"
                        name="nombres"
                        type="text"
                        required
                        placeholder="Ej: Juan Pérez"
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="tipoDocumento"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Tipo de Documento
                      </label>

                      <select
                        id="tipoDocumento"
                        name="tipoDocumento"
                        required
                        defaultValue=""
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option value="cc">Cédula de ciudadanía</option>
                        <option value="ce">Cédula de extranjería</option>
                        <option value="nit">NIT</option>
                        <option value="pasaporte">Pasaporte</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="documento"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Número de Documento
                      </label>

                      <input
                        id="documento"
                        name="documento"
                        type="text"
                        inputMode="numeric"
                        required
                        placeholder="12345678"
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Teléfono
                      </label>

                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        placeholder="3XX XXX XXXX"
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="ciudad"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Ciudad
                      </label>

                      <input
                        id="ciudad"
                        name="ciudad"
                        type="text"
                        required
                        placeholder="Neiva"
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="barrio"
                        className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                      >
                        Barrio
                      </label>

                      <input
                        id="barrio"
                        name="barrio"
                        type="text"
                        placeholder="Ej: Buganviles"
                        className="font-brand h-[44px] w-full rounded-[10px] border border-brand-dark/20 bg-white px-4 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="font-brand mb-2 block text-[17px] font-bold leading-none text-brand-dark"
                    >
                      Mensaje / Descripción
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      placeholder="Escriba aquí los detalles de su solicitud..."
                      className="font-brand w-full resize-none rounded-[10px] border border-brand-lime bg-white px-4 py-3 text-[16px] font-medium text-brand-dark outline-none transition placeholder:text-brand-dark/60 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/25"
                    />
                  </div>

                  <div className="pt-2 text-center md:text-right">
                    <Button
                      type="submit"
                      className="h-[52px] w-full rounded-[16px] px-0 py-0 text-[18px] md:w-[210px]"
                    >
                      Enviar solicitud
                    </Button>
                  </div>
                </form>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="min-h-[20px] bg-white" aria-hidden="true" />
    </main>
  );
}
