import type { ReactNode } from "react";
import type { Trecho } from "@/content/tipos";
import { Container } from "./Container";
import { Selo } from "./Selo";
import { Titulo } from "./Titulo";

type Props = {
  id?: string;
  selo: string;
  titulo: Trecho[];
  subtitulo?: ReactNode;
  fundo?: "fundo" | "superficie";
  children?: ReactNode;
};

/** Seção padrão: selo mono + título + conteúdo. */
export function Secao({ id, selo, titulo, subtitulo, fundo = "fundo", children }: Props) {
  const idTitulo = id ? `${id}-titulo` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={idTitulo}
      className={`py-20 sm:py-28 ${fundo === "superficie" ? "bg-superficie" : ""}`}
    >
      <Container>
        <div className="max-w-3xl">
          <Selo>{selo}</Selo>
          <Titulo trechos={titulo} id={idTitulo} className="mt-5 text-[2rem] sm:text-5xl" />
          {subtitulo && <p className="mt-5 text-lg text-texto-suave sm:text-xl">{subtitulo}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
