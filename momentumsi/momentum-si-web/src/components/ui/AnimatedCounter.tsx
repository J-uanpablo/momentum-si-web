"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatThousands?: boolean;
};

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 1400,
  formatThousands = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);

        const startTime = performance.now();

        const animateValue = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.round(easedProgress * end);

          setValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animateValue);
          }
        };

        requestAnimationFrame(animateValue);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [duration, end, hasAnimated]);

  const formattedValue = formatThousands
    ? value.toLocaleString("es-CO")
    : value.toString();

  return (
    <span ref={ref}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
