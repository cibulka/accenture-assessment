import { Button } from "accenture-assessment-components";

import { Highlight } from "@/components/highlight";
import { LINKS } from "@/constants/links";
import { IconArrowRight } from "@/icons/arrow-right";

export function ResponsiveBlock() {
  return (
    <div
      aria-hidden
      className={[
        "fixed inset-0 z-60",
        "flex flex-col items-center justify-center gap-6",
        "bg-slate-600",
        "px-8",
        "md:hidden",
      ].join(" ")}
    >
      <h1 className="text-5xl">Oh no!</h1>
      <div className="text-lg flex flex-col gap-4">
        <p>I haven{`'`}t been able to optimize this presentation for smaller screens yet.</p>
        <p>
          For the best viewing experience, please try using a device with a screen size of at least{" "}
          <Highlight>768x768 pixels</Highlight>. Sorry for any inconvenience!
        </p>
      </div>
      <a href={LINKS.cibulka} className="flex" target="_blank">
        <Button icon={<IconArrowRight />} component="span">
          www.cibulka.codes
        </Button>
      </a>
    </div>
  );
}
