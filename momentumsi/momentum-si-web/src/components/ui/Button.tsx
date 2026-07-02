import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function Button({
  href,
  children,
  className,
  showIcon = true,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-lime px-6 py-3 text-base font-bold text-brand-dark transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-lime/40",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showIcon ? <ArrowUpRight size={18} strokeWidth={2.5} /> : null}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
      {showIcon ? <ArrowUpRight size={18} strokeWidth={2.5} /> : null}
    </button>
  );
}
