import * as simpleIcons from "simple-icons";

/**
 * Official brand colours for the skill chips.
 *
 * Simple Icons ships one hex per brand, which is the colour on a white page.
 * Several of them are pure black (OpenJDK, Express, Anthropic), so used as-is
 * they vanish against the dark canvas, and a few are near-white and vanish
 * against the light one. Each brand therefore gets two variants: the real hex
 * wherever it is legible, and a lightness-adjusted version where it is not.
 * Hue and saturation are preserved so the brand stays recognisable.
 */

// "simple-icons:githubactions" -> "siGithubactions"
const exportName = (slug: string) =>
  "si" + slug.charAt(0).toUpperCase() + slug.slice(1);

function hexToRgb(hex: string) {
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** WCAG relative luminance, used only to decide whether a colour needs help. */
function luminance({ r, g, b }: { r: number; g: number; b: number }) {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function rgbToHsl({ r, g, b }: { r: number; g: number; b: number }) {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;
  return { h, s, l };
}

const withLightness = (
  { h, s }: { h: number; s: number },
  l: number,
) => `hsl(${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;

export interface BrandColor {
  light: string;
  dark: string;
}

export function brandColor(icon: string): BrandColor | null {
  if (!icon.startsWith("simple-icons:")) return null;

  const entry = (simpleIcons as Record<string, { hex: string } | undefined>)[
    exportName(icon.slice("simple-icons:".length))
  ];
  if (!entry) return null;

  const rgb = hexToRgb(entry.hex);
  const lum = luminance(rgb);
  const hsl = rgbToHsl(rgb);
  const hex = `#${entry.hex}`;

  return {
    // Near-white marks would disappear on the off-white canvas.
    light: lum > 0.72 ? withLightness(hsl, 0.42) : hex,
    // Near-black marks would disappear on the off-black canvas. Greyscale
    // brands (saturation 0) land on a light grey, which stays legible.
    dark: lum < 0.16 ? withLightness(hsl, 0.74) : hex,
  };
}
