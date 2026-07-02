type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  highlighted?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  highlighted,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl text-left"
      }
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-brand-aqua">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-4xl font-black leading-[0.98] tracking-tight text-brand-dark md:text-6xl">
        {title}{" "}
        {highlighted ? (
          <span className="text-brand-aqua">{highlighted}</span>
        ) : null}
      </h2>

      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-relaxed text-brand-gray md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
