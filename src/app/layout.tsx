import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { site } from "@/config/site";
import { faixaDePreco } from "@/content/planos";
import "./globals.css";

// Unbounded 800 estática (22 KB) em vez da variável do Google (51 KB): é a
// fonte do título do hero (LCP), então quanto menor, mais rápido.
const unbounded = localFont({
  src: "../../node_modules/@fontsource/unbounded/files/unbounded-latin-800-normal.woff2",
  weight: "800",
  variable: "--fonte-unbounded",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--fonte-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--fonte-jetbrains",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: site.titulo,
  description: site.descricao,
  applicationName: site.nome,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: site.titulo,
    description: site.descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Webverse: Seu negócio já tem um planeta nesse universo?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descricao,
    images: ["/og.png"],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B0D14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const faixa = faixaDePreco();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nome,
  description: site.descricao,
  url: site.dominio,
  logo: `${site.dominio}/brand/simbolo.svg`,
  image: `${site.dominio}/og.png`,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: "BR",
  ...(faixa && { priceRange: `${faixa.min} - ${faixa.max}` }),
  knowsLanguage: "pt-BR",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-orbita focus:px-4 focus:py-2 focus:font-bold focus:text-on-orbita"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Analytics />
      </body>
    </html>
  );
}
