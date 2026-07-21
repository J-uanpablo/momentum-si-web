"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ModalStatus = "success" | "error" | "warning";

type ModalContent = {
  status: ModalStatus;
  title: string;
  message: string;
};

const statusMessages: Record<string, ModalContent> = {
  enviado: {
    status: "success",
    title: "Solicitud enviada",
    message:
      "Tu solicitud fue enviada correctamente. Nuestro equipo la revisará y te contactará lo antes posible.",
  },
  error: {
    status: "error",
    title: "No se pudo enviar",
    message:
      "Faltan datos obligatorios en el formulario. Por favor revisa la información e inténtalo nuevamente.",
  },
  "email-invalido": {
    status: "warning",
    title: "Correo inválido",
    message:
      "El correo ingresado no tiene un formato válido. Por favor verifica el email e inténtalo nuevamente.",
  },
  "error-config": {
    status: "error",
    title: "Error de configuración",
    message:
      "No se pudo enviar la solicitud porque la configuración del correo aún no está completa en el servidor.",
  },
  "error-envio": {
    status: "error",
    title: "Error al enviar",
    message:
      "La solicitud no pudo ser enviada en este momento. Por favor inténtalo nuevamente más tarde.",
  },
};

export function ContactStatusModal() {
  const [content, setContent] = useState<ModalContent | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const estado = params.get("estado");

      if (!estado) return;

      const message = statusMessages[estado];

      if (message) {
        setContent(message);
      }
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const closeModal = () => {
    setContent(null);

    const cleanUrl = `${window.location.origin}/contacto.html`;
    window.history.replaceState(null, "", cleanUrl);
  };

  if (!content) return null;

  const icon =
    content.status === "success" ? (
      <CheckCircle2 className="h-16 w-16 text-brand-aqua" strokeWidth={2.4} />
    ) : content.status === "warning" ? (
      <AlertTriangle className="h-16 w-16 text-brand-lime" strokeWidth={2.4} />
    ) : (
      <XCircle className="h-16 w-16 text-red-500" strokeWidth={2.4} />
    );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-dark/60 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-status-title"
    >
      <div className="relative w-full max-w-[460px] rounded-[28px] bg-white px-7 py-9 text-center shadow-[0_20px_60px_rgba(11,56,59,0.28)] max-sm:rounded-[24px] max-sm:px-6">
        <button
          type="button"
          aria-label="Cerrar mensaje"
          onClick={closeModal}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-dark transition hover:scale-105 hover:bg-brand-lime focus:outline-none focus:ring-4 focus:ring-brand-aqua/20"
        >
          <X size={22} />
        </button>

        <div className="mx-auto flex justify-center">{icon}</div>

        <h2
          id="contact-status-title"
          className="font-display mt-5 text-[34px] font-bold leading-[36px] tracking-[0.02em] text-brand-dark max-sm:text-[30px] max-sm:leading-[32px]"
        >
          {content.title}
        </h2>

        <p className="font-brand mx-auto mt-3 max-w-[360px] text-[18px] font-bold leading-[24px] text-brand-dark/80 max-sm:text-[17px] max-sm:leading-[23px]">
          {content.message}
        </p>

        <div className="mt-8">
          <Button
            type="button"
            onClick={closeModal}
            showIcon={false}
            className="h-[52px] w-full max-w-[220px] rounded-[16px] px-0 py-0 text-[18px]"
          >
            Entendido
          </Button>
        </div>
      </div>
    </div>
  );
}
