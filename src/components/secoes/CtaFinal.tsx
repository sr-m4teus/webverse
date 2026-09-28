import { MessageCircle } from "lucide-react";
import { linkWhatsapp, site } from "@/config/site";
import { ctaFinal } from "@/content/textos";
import { Planeta } from "@/components/marca/Planeta";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { IconeInstagram } from "@/components/ui/icones";
import { Selo } from "@/components/ui/Selo";
import { Titulo } from "@/components/ui/Titulo";

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="py-16 sm:py-24">
      <Container>
        <div className="fundo-orbita relative overflow-hidden rounded-bloco bg-orbita px-6 pt-14 pb-44 text-on-orbita sm:px-12 sm:py-20 md:pb-20">
          <Planeta
            id="planeta-cta"
            variante="escuro"
            className="pointer-events-none absolute -right-10 -bottom-20 w-60 md:-right-16 md:-bottom-24 md:w-96 lg:-right-6 lg:-bottom-28 lg:w-[460px]"
          />
          <div className="relative max-w-xl">
            <Selo variante="escuro">{ctaFinal.selo}</Selo>
            <Titulo id="cta-titulo" trechos={ctaFinal.titulo} destaque="escuro" className="mt-5 text-[2rem] sm:text-5xl" />
            <p className="mt-5 max-w-md text-lg font-medium">{ctaFinal.texto}</p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <Botao
                href={linkWhatsapp}
                externo
                variante="escuro"
                icone={<MessageCircle className="size-5" aria-hidden="true" />}
              >
                {ctaFinal.botaoWhatsapp}
              </Botao>
              <Botao
                href={site.instagram}
                externo
                variante="contorno-escuro"
                icone={<IconeInstagram className="size-5" />}
              >
                {ctaFinal.botaoInstagram}
              </Botao>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
