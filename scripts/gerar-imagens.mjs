// Gera favicon, ícones do app e a imagem de compartilhamento (Open Graph)
// a partir dos SVGs da marca. Rode com: npm run imagens
// Os arquivos gerados são versionados; só precisa rodar de novo se a marca mudar.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/dist/compiled/@vercel/og/index.node.js");

const FUNDO = "#0B0D14";
const raiz = new URL("../", import.meta.url);
const caminho = (p) => new URL(p, raiz);

const simbolo = await readFile(caminho("public/brand/simbolo.svg"));

// Desenho do planeta sem o quadrado de fundo (para compor em outras artes).
const planeta = (tamanho) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${tamanho}" height="${tamanho}"><g transform="rotate(-22 32 32)"><path d="M4 32 A28 9 0 0 1 60 32" stroke="#F4F3EE" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="32" cy="32" r="15" fill="#CCFF3D"/><path d="M4 32 A28 9 0 0 0 60 32" stroke="#F4F3EE" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="10.6" cy="26.2" r="4.5" fill="#FF5B3A"/></g></svg>`,
  );

async function png(svg, tamanho) {
  return sharp(svg, { density: 1200 }).resize(tamanho, tamanho).png({ compressionLevel: 9 }).toBuffer();
}

// Ícone "maskable": fundo cheio e planeta dentro da zona segura (80%).
async function maskable(tamanho) {
  const interno = Math.round(tamanho * 0.72);
  return sharp({ create: { width: tamanho, height: tamanho, channels: 4, background: FUNDO } })
    .composite([{ input: await sharp(planeta(interno), { density: 1200 }).resize(interno, interno).png().toBuffer(), gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// .ico com PNGs embutidos (formato aceito por todos os navegadores atuais).
function ico(pngs) {
  const cabecalho = Buffer.alloc(6);
  cabecalho.writeUInt16LE(0, 0);
  cabecalho.writeUInt16LE(1, 2);
  cabecalho.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entradas = pngs.map(({ tamanho, dados }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 0);
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(dados.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += dados.length;
    return e;
  });
  return Buffer.concat([cabecalho, ...entradas, ...pngs.map((p) => p.dados)]);
}

await mkdir(caminho("public/icons"), { recursive: true });

await writeFile(caminho("src/app/icon.svg"), simbolo);
await writeFile(caminho("src/app/apple-icon.png"), await png(simbolo, 180));
await writeFile(caminho("public/icons/icon-192.png"), await png(simbolo, 192));
await writeFile(caminho("public/icons/icon-512.png"), await png(simbolo, 512));
await writeFile(caminho("public/icons/icon-maskable-512.png"), await maskable(512));
await writeFile(
  caminho("src/app/favicon.ico"),
  ico([
    { tamanho: 16, dados: await png(simbolo, 16) },
    { tamanho: 32, dados: await png(simbolo, 32) },
    { tamanho: 48, dados: await png(simbolo, 48) },
  ]),
);

// ---------- Open Graph 1200×630 ----------
const unbounded = await readFile(caminho("node_modules/@fontsource/unbounded/files/unbounded-latin-800-normal.woff"));
const logo = await readFile(caminho("public/brand/logo-horizontal.svg"));
const dataUri = (buf) => `data:image/svg+xml;base64,${buf.toString("base64")}`;

const h = (type, props, ...children) => ({ type, props: { ...props, children: children.length <= 1 ? children[0] : children } });

const arte = h(
  "div",
  {
    style: {
      width: 1200,
      height: 630,
      display: "flex",
      position: "relative",
      backgroundColor: FUNDO,
      fontFamily: "Unbounded",
      overflow: "hidden",
    },
  },
  // estrelas
  ...[
    [80, 520, 3], [240, 590, 2], [520, 560, 3], [690, 70, 2], [760, 600, 2], [1010, 40, 3], [1150, 560, 2], [640, 300, 2],
  ].map(([x, y, r]) =>
    h("div", { style: { position: "absolute", left: x, top: y, width: r * 2, height: r * 2, borderRadius: 999, backgroundColor: "#F4F3EE", opacity: 0.45 } }),
  ),
  h("img", { src: dataUri(planeta(520)), width: 560, height: 560, style: { position: "absolute", right: -70, top: 40 } }),
  h(
    "div",
    { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: 800, height: 630 } },
    h("img", { src: dataUri(logo), width: 270, height: 46 }),
    h(
      "div",
      { style: { display: "flex", flexWrap: "wrap", fontSize: 66, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#F4F3EE" } },
      ...["Seu", "negócio", "já", "tem", "um"].map((p) => h("span", { style: { marginRight: 20 } }, p)),
      h("span", { style: { marginRight: 20, color: "#CCFF3D" } }, "planeta"),
      ...["nesse", "universo?"].map((p) => h("span", { style: { marginRight: 20 } }, p)),
    ),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", fontSize: 24 } },
      h("div", { style: { display: "flex", flexShrink: 0, backgroundColor: "#CCFF3D", color: FUNDO, borderRadius: 999, padding: "12px 26px" } }, "usewebverse.com.br"),
    ),
  ),
);

const og = new ImageResponse(arte, { width: 1200, height: 630, fonts: [{ name: "Unbounded", data: unbounded, weight: 800, style: "normal" }] });
const ogPng = Buffer.from(await og.arrayBuffer());
await writeFile(caminho("public/og.png"), await sharp(ogPng).png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer());

console.log("Imagens geradas: favicon.ico, icon.svg, apple-icon.png, icons/*, og.png");
