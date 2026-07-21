"use client";

import { useEffect } from "react";

export function DisableImageDrag() {
  useEffect(() => {
    const handleDragStart = (event: DragEvent) => {
      const target = event.target;

      if (target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
