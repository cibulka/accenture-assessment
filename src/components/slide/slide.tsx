"use client";

import { useMemo, useState } from "react";
import { SlideColumn, SlideColumnProps } from "../slide-column";
import { SlideButton } from "./button";

type SlideProps = {
  columns: SlideColumnProps[];
};

export function Slide({ columns }: SlideProps) {
  const [activeColumn, setActiveColumn] = useState(0);

  const columnsIndexed = useMemo(() => columns.map((column, index) => ({ ...column, index })), [columns]);

  return (
    <>
      <div className="flex-1" />
      <div className="grid flex-1 grid-cols-6 gap-8 mt-8 mb-8" style={{ minHeight: "30em" }}>
        {columnsIndexed.map((column) => {
          return column.index === activeColumn ? (
            <SlideColumn {...column} key={column.index} />
          ) : (
            <SlideButton key={column.index} title={column.title} onClick={() => setActiveColumn(column.index)} />
          );
        })}
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </>
  );
}
