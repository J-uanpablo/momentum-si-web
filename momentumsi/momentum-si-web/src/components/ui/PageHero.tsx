import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

type PageHeroProps = {
  title: string;
  highlighted?: string;
  description: string;
  dark?: boolean;
  imageLabel?: string;
};

export function PageHero({
  title,
  highlighted,
  description,
  dark = false,
  imageLabel = "Imagen principal pendiente por exportar desde Figma",
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-brand-dark" : "bg-brand-aqua"
      }`}
    >
      <div className="absolute -left-24 bottom-8 h-52 w-52 rounded-full border-[34px] border-white/15" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full border-[60px] border-white/10" />

      <div className="mx-auto grid min-h-[510px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <AnimatedSection className="relative z-10 max-w-3xl" direction="left">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[0em] text-white md:text-6xl lg:text-7xl">
            {title}{" "}
            {highlighted ? (
              <span className={dark ? "text-brand-aqua" : "text-brand-dark"}>
                {highlighted}
              </span>
            ) : null}
          </h1>

          <p className="font-brand mt-6 max-w-2xl text-xl font-bold leading-relaxed text-white">
            {description}
          </p>

          <div className="mt-9">
            <Button href={SITE_CONFIG.creditUrl}>Solicita tu crédito</Button>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative z-10 hidden min-h-[390px] items-end justify-center lg:flex"
          direction="right"
          delay={0.15}
        >
          <div className="flex h-[390px] w-[390px] items-center justify-center rounded-full bg-white/15 p-8 text-center">
            <p className="max-w-xs text-xl font-black text-white">
              {imageLabel}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
