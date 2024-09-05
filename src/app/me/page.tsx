import Image from "next/image";

import { Highlight } from "@/components/highlight";
import { LinkItem } from "@/components/link-item";
import { LINKS } from "@/constants/links";
import { IconBrush } from "@/icons/brush";
import { IconCode } from "@/icons/code";
import { IconTetris } from "@/icons/tetris";

import { ListItem } from "./list-item";

export default function PrototypePage() {
  return (
    <>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8 mb-8">
        <div className="flex flex-col gap-6 col-span-4">
          <div className="flex flex-col gap-4 text-2xl leading-normal">
            <p>
              My name is Petr Cibulka, and this was a fun task to make! Within the two-day timeframe, I prioritized:
            </p>
          </div>
          <ul className="flex flex-col gap-2 max-w-md">
            <ListItem>
              <strong>Understanding the brief</strong>: Thoroughly analyzing the{" "}
              <a href="/brief.docx" className="underline" target="_blank">
                project requirements
              </a>
              .
            </ListItem>
            <ListItem>
              <strong>Setting up the prototype</strong>: Creating a library for UI system, including{" "}
              <a href={LINKS.storybook} className="underline" target="_blank">
                Storybook environment
              </a>{" "}
              and unit tests. It is installed as one of the dependencies of this presentation.
            </ListItem>
            <ListItem>
              <strong>Developing a strategy</strong>: Outlining my approaches for building a scalable and sustainable
              component system.
            </ListItem>
          </ul>
          <p className="text-2xl">
            <Highlight>Thank you for your consideration!</Highlight>
          </p>
        </div>
        <div className="col-span-2">
          <div
            className={["relative aspect-square", "bg-slate-400 rounded-md overflow-hidden"].join(" ")}
            style={{ filter: "grayscale(80%)" }}
          >
            <Image alt="My photo" src="/petr-small.jpg" fill style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8">
        <LinkItem
          button={{
            href: LINKS.cibulka,
            label: "cibulka.codes",
          }}
          title="My website"
          icon={IconBrush}
        />

        <LinkItem
          button={{
            href: LINKS.cv,
            label: "Download",
          }}
          title="My resumé"
          icon={IconCode}
        />

        <LinkItem
          button={{
            href: LINKS.tetris,
            label: "Play Tetris",
          }}
          title="My project"
          icon={IconTetris}
        />
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </>
  );
}
