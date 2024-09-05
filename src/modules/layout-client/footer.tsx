"use client";

import { Button } from "accenture-assessment-components";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { IconArrowRight } from "@/icons/arrow-right";
import { IconOnion } from "@/icons/onion";

import { LINKS } from "@/constants/links";
import { useSlide } from "./use-slide";

export function Footer() {
  const { push } = useRouter();
  const { next } = useSlide();

  const nextHref = next?.href;
  const onPushNext = useCallback(() => {
    if (nextHref) push(nextHref);
  }, [nextHref, push]);

  return (
    <footer className={["flex items-center justify-between gap-4 h-14", "-mb-4"].join(" ")}>
      <a href="https://www.cibulka.codes" target="_blank" className="flex w-8 h-8" title="www.cibulka.codes">
        <IconOnion className="fill-green" />
      </a>
      {next ? (
        <Button icon={<IconArrowRight />} onClick={onPushNext}>
          {next.title}
        </Button>
      ) : (
        <a href={LINKS.cibulka} className="underline" target="_blank">
          www.cibulka.codes
        </a>
      )}
    </footer>
  );
}
