"use client";

import Image from "next/image";
import { motion, type PanInfo, useAnimationControls } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const AUTO_PLAY_DELAY = 5200;
const DRAG_THRESHOLD = 80;
const SLIDE_DURATION = 1.15;

const creditLines = [
  {
    titleTop: "Libre",
    titleHighlight: "Inversión",
    description:
      "Dinero para lo que necesites, con desembolso rápido y hasta 18 meses de plazo.",
    image: "/images/lineas-creditos/card-libre-inversion.png",
    alt: "Personas disfrutando en la playa para crédito de libre inversión",
  },
  {
    titleTop: "Compra",
    titleHighlight: "de Moto",
    description: "Financia hasta el 80% de tu moto y mejora tu movilidad.",
    image: "/images/lineas-creditos/card-compra-moto.png",
    alt: "Persona recibiendo las llaves de una moto",
  },
  {
    titleTop: "Revolvente",
    titleHighlight: "o Rotativo",
    description: "Tu cupo disponible siempre. Usa, paga y vuelve a utilizar.",
    image: "/images/lineas-creditos/card-rotativo.png",
    alt: "Celular mostrando una plataforma digital de crédito rotativo",
  },
  {
    titleTop: "Libranza",
    titleHighlight: "Convenios",
    description: "Beneficios exclusivos en salud, educación, tecnología y más.",
    image: "/images/lineas-creditos/card-libranza-convenios.png",
    alt: "Mujeres sonriendo con bolsas de compras para libranza convenios",
  },
  {
    titleTop: "Libranza para",
    titleHighlight: "Emprendimiento",
    description:
      "Creemos en el espíritu emprendedor de nuestra familia MoMentum.",
    image: "/images/lineas-creditos/card-libranza-emprendimiento.png",
    alt: "Mujer emprendedora sonriendo en su espacio de trabajo",
  },
];

const BASE_INDEX = creditLines.length;

export function CreditLinesSlider() {
  const controls = useAnimationControls();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(BASE_INDEX);
  const isAnimatingRef = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const loopedCards = useMemo(() => {
    return Array.from({ length: 3 }, (_, copyIndex) =>
      creditLines.map((line) => ({
        ...line,
        renderKey: `${copyIndex}-${line.titleHighlight}`,
      }))
    ).flat();
  }, []);

  const getStepSize = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-slider-card]");

    if (!track || !firstCard) return 395;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || "32");

    return firstCard.offsetWidth + gap;
  }, []);

  const snapToIndex = useCallback(
    (index: number) => {
      const stepSize = getStepSize();

      controls.set({
        x: -index * stepSize,
      });
    },
    [controls, getStepSize]
  );

  useLayoutEffect(() => {
    snapToIndex(activeIndexRef.current);

    controls.set({
      opacity: 1,
    });
  }, [controls, snapToIndex]);

  useEffect(() => {
    const handleResize = () => {
      snapToIndex(activeIndexRef.current);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [snapToIndex]);

  const moveToIndex = useCallback(
    async (nextIndex: number) => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      setIsAnimating(true);

      const stepSize = getStepSize();

      await controls.start({
        x: -nextIndex * stepSize,
        transition: {
          duration: SLIDE_DURATION,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      let safeIndex = nextIndex;

      if (nextIndex >= BASE_INDEX + creditLines.length) {
        safeIndex = BASE_INDEX;
      }

      if (nextIndex < BASE_INDEX) {
        safeIndex = BASE_INDEX + creditLines.length - 1;
      }

      activeIndexRef.current = safeIndex;

      if (safeIndex !== nextIndex) {
        controls.set({
          x: -safeIndex * getStepSize(),
        });
      }

      isAnimatingRef.current = false;
      setIsAnimating(false);
    },
    [controls, getStepSize]
  );

  const moveLeft = useCallback(() => {
    void moveToIndex(activeIndexRef.current + 1);
  }, [moveToIndex]);

  const moveRight = useCallback(() => {
    void moveToIndex(activeIndexRef.current - 1);
  }, [moveToIndex]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    setIsPaused(false);

    if (info.offset.x <= -DRAG_THRESHOLD) {
      moveLeft();
      return;
    }

    if (info.offset.x >= DRAG_THRESHOLD) {
      moveRight();
      return;
    }

    void controls.start({
      x: -activeIndexRef.current * getStepSize(),
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  };

  useEffect(() => {
    if (isPaused || isDragging || isAnimating) return;

    const interval = window.setInterval(() => {
      moveLeft();
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [isAnimating, isDragging, isPaused, moveLeft]);

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <AnimatedSection className="relative">
        <button
          type="button"
          aria-label="Mover carrusel hacia la izquierda"
          onClick={moveLeft}
          className="absolute left-[-22px] top-1/2 z-20 hidden h-[76px] w-[76px] -translate-y-1/2 items-center justify-center transition duration-300 hover:scale-110 focus:outline-none focus-visible:outline-none lg:flex xl:left-[-88px]"
        >
          <Image
            src="/images/lineas-creditos/slider-arrow.png"
            alt=""
            width={76}
            height={76}
            aria-hidden="true"
            className="h-[64px] w-[64px] rotate-180 object-contain"
            draggable={false}
          />
        </button>

        <div className="mx-auto max-w-[395px] overflow-hidden px-4 py-6 md:max-w-[790px] xl:max-w-[1185px]">
          <motion.div
            ref={trackRef}
            initial={{ opacity: 0 }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragStart={() => {
              setIsDragging(true);
              setIsPaused(true);
            }}
            onDragEnd={handleDragEnd}
            className="flex cursor-grab gap-8 active:cursor-grabbing"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
            aria-live="polite"
          >
            {loopedCards.map((line) => (
              <article
                key={line.renderKey}
                data-slider-card
                className="h-[558px] w-[calc(100vw-72px)] max-w-[363px] flex-none overflow-hidden rounded-[24px] bg-white shadow-[0_12px_28px_rgba(11,56,59,0.12)] ring-1 ring-brand-dark/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,56,59,0.16)] md:w-[363px]"
              >
                <div className="relative h-[302px] w-full overflow-hidden">
                  <Image
                    src={line.image}
                    alt={line.alt}
                    fill
                    sizes="363px"
                    className="object-cover"
                    draggable={false}
                    loading="eager"
                  />
                </div>

                <div className="h-[256px] px-6 pb-7 pt-5">
                  <h3 className="font-display text-[34px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark md:text-[38px] md:leading-[36px]">
                    <span className="block">{line.titleTop}</span>
                    <span className="block text-brand-aqua">
                      {line.titleHighlight}
                    </span>
                  </h3>

                  <p className="font-brand mt-2 text-[18px] font-bold leading-[22px] tracking-[0em] text-brand-dark">
                    {line.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          aria-label="Mover carrusel hacia la derecha"
          onClick={moveRight}
          className="absolute right-[-22px] top-1/2 z-20 hidden h-[76px] w-[76px] -translate-y-1/2 items-center justify-center transition duration-300 hover:scale-110 focus:outline-none focus-visible:outline-none lg:flex xl:right-[-88px]"
        >
          <Image
            src="/images/lineas-creditos/slider-arrow.png"
            alt=""
            width={76}
            height={76}
            aria-hidden="true"
            className="h-[64px] w-[64px] object-contain"
            draggable={false}
          />
        </button>

        <div className="mt-6 flex justify-center gap-5 lg:hidden">
          <button
            type="button"
            aria-label="Mover carrusel hacia la izquierda"
            onClick={moveLeft}
            className="flex h-12 w-12 items-center justify-center transition duration-300 hover:scale-110 focus:outline-none focus-visible:outline-none"
          >
            <Image
              src="/images/lineas-creditos/slider-arrow.png"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
              className="h-10 w-10 rotate-180 object-contain"
              draggable={false}
            />
          </button>

          <button
            type="button"
            aria-label="Mover carrusel hacia la derecha"
            onClick={moveRight}
            className="flex h-12 w-12 items-center justify-center transition duration-300 hover:scale-110 focus:outline-none focus-visible:outline-none"
          >
            <Image
              src="/images/lineas-creditos/slider-arrow.png"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
              className="h-10 w-10 object-contain"
              draggable={false}
            />
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}
