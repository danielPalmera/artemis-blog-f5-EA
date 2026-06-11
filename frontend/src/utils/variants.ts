

export type HeadingVariants = "footer"|"related";

export const headingVariants: Record<HeadingVariants, string> = {
  footer: "font-bold",
  related: "font-normal lg:font-bold leading-snug lg:tracking-tight",
};