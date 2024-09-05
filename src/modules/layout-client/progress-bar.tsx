"use client";

import { SLIDES } from "@/constants/slides";
import { notFound } from "next/navigation";
import { useKeyboard } from "./use-keyboard";
import { useSlide } from "./use-slide";

export function ProgressBar() {
  const { slide, index, prev, next } = useSlide();
  const progress = (index + 1) / SLIDES.length;

  useKeyboard({ prev: prev?.href, next: next?.href });

  if (!slide) notFound();

  return (
    <div>
      <header className="flex items-center gap-4">
        <div>{`${index + 1} / ${SLIDES.length}`}</div>
        <h1 className="font-bold">{slide.title}</h1>
      </header>
      <div className="relative h-1 rounded-md mt-2 overflow-hidden">
        <div className="absolute w-full inset-0 bg-slate-800" />
        <div
          className={["absolute w-full inset-0 bg-green", "origin-top-left", "transition-transform"].join(" ")}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
}
