"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AnimatedIconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
};

export function AnimatedIcon({
  src,
  alt,
  width,
  height,
  className,
  delay = 0,
}: AnimatedIconProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
        scale: 0.75,
        rotate: -8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: false, amount: 0.45 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.18,
        rotate: -6,
        y: -8,
      }}
      className="inline-flex"
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0, -3, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </motion.div>
    </motion.div>
  );
}
