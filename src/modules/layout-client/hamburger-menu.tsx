"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Highlight } from "@/components/highlight";
import { SLIDES } from "@/constants/slides";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <span
        className={[
          "fixed z-50 right-12 top-12",
          "rounded-full",
          "w-20 h-20",
          "hidden md:flex",
          "items-center justify-center",
          "bg-green text-black",
        ].join(" ")}
      >
        <Hamburger label="Menu" toggled={open} toggle={setOpen} />
      </span>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40">
        <div className="fixed inset-0 bg-black opacity-80" />
        <DialogPanel
          className={["fixed top-0 right-0 bg-black", "h-full", "flex flex-col items-center px-8"].join(" ")}
          style={{ width: "20em", maxWidth: "calc(100vw - 4em)" }}
        >
          <ul className="flex flex-1 flex-col gap-4 justify-center text-2xl">
            {SLIDES.map((slide) => (
              <li key={slide.href}>
                <Link href={slide.href}>
                  {slide.href === pathname ? <Highlight>{slide.title}</Highlight> : slide.title}
                </Link>
              </li>
            ))}
          </ul>
        </DialogPanel>
      </Dialog>
    </>
  );
}
