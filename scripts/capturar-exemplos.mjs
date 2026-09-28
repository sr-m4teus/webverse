// Tira um print de cada site de exemplo (public/exemplos/*) para usar nos
// cartões do portfólio. Rode com: npm run exemplos
// Precisa do Google Chrome instalado (ou defina CHROME_PATH).
import { createServer } from "node:http";
import { readFile, readdir, stat, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { extname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import sharp from "sharp";

const run = promisify(execFile);
const raiz = resolve(new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const publico = join(raiz, "public");
const exemplos = join(publico, "exemplos");

const chrome =
  process.env.CHROME_PATH ||
  [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find(existsSync);
if (!chrome) throw new Error("Chrome não encontrado. Defina CHROME_PATH.");

const tipos = { ".html": "text/html; charset=utf-8", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".css": "text/css", ".png": "image/png" };

// Servidor estático mínimo da pasta public/ (as fontes usam caminhos absolutos).
const servidor = createServer(async (req, res) => {
  let caminho = join(publico, decodeURIComponent(new URL(req.url, "http://x").pathname));
  try {
    if ((await stat(caminho)).isDirectory()) caminho = join(caminho, "index.html");
    res.writeHead(200, { "content-type": tipos[extname(caminho)] ?? "application/octet-stream" });
    res.end(await readFile(caminho));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((ok) => servidor.listen(0, "127.0.0.1", ok));
const porta = servidor.address().port;

const pastas = (await readdir(exemplos, { withFileTypes: true })).filter((d) => d.isDirectory() && !d.name.startsWith("_")).map((d) => d.name);

for (const nome of pastas) {
  const png = join(tmpdir(), `webverse-exemplo-${nome}.png`);
  await run(chrome, [
    "--headless=new",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,786",
    "--virtual-time-budget=3000",
    `--screenshot=${png}`,
    `http://127.0.0.1:${porta}/exemplos/${nome}/`,
  ]);
  // Corta a faixa "site de exemplo" do topo (36px): sobra 1200×750 (16:10).
  const destino = join(publico, "portfolio", `exemplo-${nome}.webp`);
  await sharp(png).extract({ left: 0, top: 36, width: 1200, height: 750 }).webp({ quality: 82 }).toFile(destino);
  await rm(png, { force: true });
  console.log("✓", destino.replace(raiz, "."));
}

servidor.close();
