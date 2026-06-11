export type H3Variants = "footer" | "related";

export const h3Variants: Record<H3Variants, string> = {
  footer: "font-bold",
  related: "font-normal lg:font-bold leading-snug lg:tracking-tight",
};

export type PreTitleVariants = "hero"|"related";

export const preTitleVariants: Record<PreTitleVariants, string> = {
  hero: "",
  related: "tracking-widest",
};

