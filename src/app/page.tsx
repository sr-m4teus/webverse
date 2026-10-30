import { ComoFunciona } from "@/components/secoes/ComoFunciona";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Depoimentos } from "@/components/secoes/Depoimentos";
import { Diferenciais } from "@/components/secoes/Diferenciais";
import { Duvidas } from "@/components/secoes/Duvidas";
import { Footer } from "@/components/secoes/Footer";
import { Header } from "@/components/secoes/Header";
import { Hero } from "@/components/secoes/Hero";
import { Preco } from "@/components/secoes/Preco";
import { Problema } from "@/components/secoes/Problema";
import { Produtos } from "@/components/secoes/Produtos";
import { WhatsappFlutuante } from "@/components/WhatsappFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problema />
        <Produtos />
        <Diferenciais />
        <ComoFunciona />
        <Depoimentos />
        <Preco />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFlutuante />
    </>
  );
}
