/** Préfixe GitHub Pages (/KRAKEN-METALS) quand le site n'est pas servi à la racine d'un domaine. */
export function withBase(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${base}${path}`;
}
