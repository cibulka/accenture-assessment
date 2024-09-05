import { PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from "react";

type AccordionItemProps = PropsWithChildren<{
  active: boolean;
  className?: string;
  index: number;
  setActiveIndex: (index: number | undefined) => void;
  title: ReactNode;
}>;

export function AccordionItem({ active, children, className, index, setActiveIndex, title }: AccordionItemProps) {
  const [height, setHeight] = useState<number>();

  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = () => {
      if (contentRef.current) setHeight(contentRef.current.getBoundingClientRect().height);
    };

    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const onToggle = useCallback(() => {
    setActiveIndex(active ? undefined : index);
  }, [active, setActiveIndex, index]);

  return (
    <article className={className}>
      <button type="button" className="block w-full" onClick={onToggle}>
        <h2
          className={["flex items-center justify-between gap-8", "border-b-2 border-slate-600", "py-2"]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={active ? "font-bold" : undefined}>{title}</span>
          <span
            className={["flex transition-transform origin-center", active ? "rotate-45" : "rotate-0", "text-2xl"].join(
              " "
            )}
          >
            +
          </span>
        </h2>
      </button>
      <div
        className="relative overflow-hidden"
        style={{ maxHeight: active ? height || "auto" : 0, transition: "max-height 0.4s ease" }}
      >
        <div ref={contentRef}>
          <div className="pt-4 pb-8">{children}</div>
        </div>
      </div>
    </article>
  );
}
