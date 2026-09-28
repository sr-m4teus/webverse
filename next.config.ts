import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: `npm run build` gera a pasta `out/`.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
  // CSS embutido no HTML: elimina a requisição que bloqueia a renderização.
  experimental: { inlineCss: true },
};

export default nextConfig;
