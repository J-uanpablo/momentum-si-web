"use client";

import { useEffect, useState } from "react";

export function ContactSubmitLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const form = document.getElementById("pqrs-form") as HTMLFormElement | null;

    if (!form) return;

    const handleSubmit = () => {
      setIsLoading(true);

      const submitButton = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]'
      );

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.style.opacity = "0.75";
        submitButton.style.cursor = "not-allowed";
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-brand-dark/65 px-5 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Enviando solicitud"
    >
      <div className="w-full max-w-[420px] rounded-[28px] bg-white px-8 py-10 text-center shadow-[0_20px_60px_rgba(11,56,59,0.28)]">
        <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-brand-soft">
          <div className="h-[52px] w-[52px] animate-spin rounded-full border-[6px] border-brand-aqua/25 border-t-brand-aqua" />
        </div>

        <h2 className="font-display mt-6 text-[32px] font-bold leading-[34px] tracking-[0.02em] text-brand-dark">
          Enviando solicitud
        </h2>

        <p className="font-brand mx-auto mt-3 max-w-[310px] text-[18px] font-bold leading-[24px] text-brand-dark/80">
          Por favor espera un momento mientras registramos tu PQR.
        </p>
      </div>
    </div>
  );
}
