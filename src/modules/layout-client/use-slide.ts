import { SLIDES } from "@/constants/slides";
import { usePathname } from "next/navigation";

export function useSlide() {
  const pathname = usePathname();
  const slide = SLIDES.find((slide) => slide.href === pathname);
  const index = SLIDES.findIndex((slide) => slide.href === pathname);

  const prev = index > 0 ? SLIDES[index - 1] : undefined;
  const next = index < SLIDES.length ? SLIDES[index + 1] : undefined;

  return { slide, index, prev, next };
}
