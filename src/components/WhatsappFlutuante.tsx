import { MessageCircle } from "lucide-react";
import { linkWhatsapp } from "@/config/site";

/** Botão flutuante de WhatsApp, só no mobile. */
export function WhatsappFlutuante() {
  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chama no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full border-2 border-fundo bg-orbita text-on-orbita md:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
