"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    if (direction === "left") {
      return { x: -40, y: 0 };
    }

    if (direction === "right") {
      return { x: 40, y: 0 };
    }

    if (direction === "none") {
      return { x: 0, y: 0 };
    }

    return { x: 0, y: 40 };
  };

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
