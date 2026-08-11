/**
 * Generates public/og.png, the link-preview card used by every page.
 *
 * Run with: npm run og
 *
 * It is a one-off script rather than a build step because the card only
 * changes when the name, role, or palette changes. Committing the PNG keeps
 * the build fast and keeps link previews working even if this toolchain
 * breaks later.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import wawoff2 from "wawoff2";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Satori needs TTF or OTF, and its opentype fork cannot parse the subset
// variable fonts the site itself loads. So this uses the static weights from
// @fontsource/geist and decompresses woff2 to TTF in memory.
async function loadFont(pkg, file) {
  const woff2 = await readFile(join(root, "node_modules", pkg, "files", file));
  return Buffer.from(await wawoff2.decompress(woff2));
}

const [regular, semibold, mono, display] = await Promise.all([
  loadFont("@fontsource/geist", "geist-latin-400-normal.woff2"),
  loadFont("@fontsource/geist", "geist-latin-600-normal.woff2"),
  loadFont("@fontsource/geist-mono", "geist-mono-latin-400-normal.woff2"),
  loadFont("@fontsource/space-grotesk", "space-grotesk-latin-600-normal.woff2"),
]);

// Matches the site's dark palette so a shared link looks like the page it opens.
const CANVAS = "#0c0c0e";
const INK = "#f4f4f5";
const INK_MUTED = "#a1a1aa";
const ACCENT = "#3fbf98";
const RULE = "#27272a";

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: CANVAS,
        padding: "72px 80px",
        fontFamily: "Geist",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", fontSize: 22, color: ACCENT },
            children: "Software engineer",
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 96,
                    fontFamily: "Space Grotesk",
                    fontWeight: 600,
                    color: INK,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.05,
                    maxWidth: 940,
                  },
                  children: "Abhishek Jani",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    marginTop: 28,
                    fontSize: 27,
                    color: INK_MUTED,
                    maxWidth: 880,
                    lineHeight: 1.4,
                  },
                  children:
                    "Event-driven systems, cloud infrastructure, and AI tooling.",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 20,
              borderTop: `1px solid ${RULE}`,
              paddingTop: 28,
              fontFamily: "Geist Mono",
              fontSize: 20,
              color: INK_MUTED,
            },
            children: "abhishekjani.dev",
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Geist", data: regular, weight: 400, style: "normal" },
      { name: "Geist", data: semibold, weight: 600, style: "normal" },
      { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      { name: "Space Grotesk", data: display, weight: 600, style: "normal" },
    ],
  },
);

const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
  .render()
  .asPng();

await mkdir(join(root, "public"), { recursive: true });
await writeFile(join(root, "public", "og.png"), png);

console.log(`Wrote public/og.png (${(png.length / 1024).toFixed(1)} KB)`);
