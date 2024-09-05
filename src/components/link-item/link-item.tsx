import { Button, ButtonVariant } from "accenture-assessment-components";
import { ReactNode } from "react";

import { IconArrowRight } from "@/icons/arrow-right";
import { IconConstruction } from "@/icons/construction";

type LinkItemProps = {
  button: {
    href: string | null;
    label: string;
  };
  content?: ReactNode;
  icon: React.FC<{ className: string }>;
  title: string;
};

export function LinkItem({ button, content, icon: Icon, title }: LinkItemProps) {
  return (
    <article className="flex flex-col col-span-2">
      <header className="flex flex-col gap-2 mb-4">
        <span className="w-10 h-10">
          <Icon className="fill-current opacity-50" />
        </span>
        <h2 className="text-4xl">{title}</h2>
      </header>
      {content && <p className="flex-1 mb-6">{content}</p>}
      {button.href ? (
        <a className="flex" href={button.href ?? undefined} target="_blank">
          <Button variant={ButtonVariant.SECONDARY} icon={<IconArrowRight />} component="span">
            {button.label}
          </Button>
        </a>
      ) : (
        <div className="flex">
          <Button disabled variant={ButtonVariant.SECONDARY} icon={<IconConstruction />}>
            {button.label}
          </Button>
        </div>
      )}
    </article>
  );
}
