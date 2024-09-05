import { IconArrowRight } from "@/icons/arrow-right";
import { PropsWithChildren } from "react";

export function ListItem({ children }: PropsWithChildren) {
  return (
    <li className="flex gap-4">
      <span className="w-6 h-6 opacity-50 flex-shrink-0">
        <IconArrowRight className="fill-current" />
      </span>
      <span>{children}</span>
    </li>
  );
}
