import Script from "next/script";
import { site } from "@/config/site";

/**
 * Ponto único de analytics. Nada é carregado enquanto `site.analytics` for null.
 * Para ativar, edite `analytics` em src/config/site.ts (Plausible ou Google Analytics).
 */
export function Analytics() {
  const a = site.analytics;
  if (!a) return null;

  if (a.tipo === "plausible") {
    return <Script defer data-domain={a.dominio} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${a.id}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${a.id}');`}
      </Script>
    </>
  );
}
