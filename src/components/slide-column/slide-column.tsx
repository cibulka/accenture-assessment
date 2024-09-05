import { ReactNode } from "react";

export type SlideColumnProps = {
  content: ReactNode;
  intro?: ReactNode;
  title: string;
};

export function SlideColumn({ intro, title, content }: SlideColumnProps) {
  return (
    <div className="col-span-4">
      <h2 className="text-5xl mb-8">{title}</h2>
      {intro && <div className="text-xl leading-normal mb-8 max-w-xl">{intro}</div>}
      {content}
    </div>
  );
}
