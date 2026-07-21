import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  className,
  showIcon = true,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-lime px-6 py-3 text-base font-black text-brand-dark shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-lime/40 active:scale-[0.98]",
    "before:absolute before:inset-0 before:-translate-x-full before:bg-white/30 before:transition before:duration-500 hover:before:translate-x-0",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      {showIcon ? (
        <ArrowUpRight
          className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          size={18}
          strokeWidth={2.5}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
