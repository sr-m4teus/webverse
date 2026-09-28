import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: `npm run build` gera a pasta `out/`.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
