import { ComoFunciona } from "@/components/secoes/ComoFunciona";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Depoimentos } from "@/components/secoes/Depoimentos";
import { Duvidas } from "@/components/secoes/Duvidas";
import { Footer } from "@/components/secoes/Footer";
import { Header } from "@/components/secoes/Header";
import { Hero } from "@/components/secoes/Hero";
import { LevelUp } from "@/components/secoes/LevelUp";
import { OQueVem } from "@/components/secoes/OQueVem";
import { Planos } from "@/components/secoes/Planos";
import { Portfolio } from "@/components/secoes/Portfolio";
import { Problema } from "@/components/secoes/Problema";
import { WhatsappFlutuante } from "@/components/WhatsappFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problema />
        <OQueVem />
        <ComoFunciona />
        <LevelUp />
        <Portfolio />
        <Depoimentos />
        <Planos />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFlutuante />
    </>
  );
}
