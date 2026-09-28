import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site } from "@/config/site";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"], variable: "--fonte-unbounded", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--fonte-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descricao,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B0D14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nome,
  description: site.descricao,
  url: site.dominio,
  logo: `${site.dominio}/brand/simbolo.svg`,
  image: `${site.dominio}/opengraph-image.png`,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: "BR",
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
