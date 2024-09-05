"use client";

import { ReactNode, useMemo, useState } from "react";
import { AccordionItem } from "./item";

type AccordionProps = {
  initiallyActive?: number;
  items: {
    title: ReactNode;
    content: ReactNode;
  }[];
};

export function Accordion({ initiallyActive, items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(initiallyActive);

  const itemsIndexed = useMemo(() => items.map((item, index) => ({ ...item, index })), [items]);

  return (
    <ul className="max-w-md">
      {itemsIndexed.map((item) => {
        const active = activeIndex === item.index;
        const opaque = activeIndex !== undefined && !active;
        return (
          <li key={item.index}>
            <AccordionItem
              active={active}
              className={opaque ? "opacity-50" : "opacity-100"}
              index={item.index}
              setActiveIndex={setActiveIndex}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          </li>
        );
      })}
    </ul>
  );
}
