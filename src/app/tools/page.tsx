"use client";
import { useState } from "react";

import { Button, ButtonVariant } from "accenture-assessment-components";

import { tags, tools } from "./constants";

export default function ToolsPage() {
  const [tagsActive, setTagsActive] = useState(tags);

  const toolsIndexed = tools.map((tool, index) => ({ ...tool, index }));

  return (
    <>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8 py-8">
        <ul className="grid grid-cols-4 col-span-4 gap-x-8 gap-y-12">
          {toolsIndexed
            .filter((tool) => tagsActive.filter((tag) => tool.tags.includes(tag)).length > 0)
            .map((tool) => (
              <li key={tool.index} className="col-span-2">
                <article className="flex flex-col gap-4">
                  <h3 className="font-bold">{tool.title}</h3>
                  <p className="opacity-80">{tool.description}</p>
                  <div className="text-sm opacity-80 font-bold">{tool.tags.join(", ")}</div>
                </article>
              </li>
            ))}
        </ul>
        <div className="relative col-span-2">
          <div className="sticky top-8">
            <h2 className="text-4xl mb-8">Filters</h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              {tags.map((tag) => (
                <Button
                  onClick={() => {
                    setTagsActive((old) => {
                      const result = old.includes(tag) ? old.filter((t) => t !== tag) : [...old, tag];
                      return result.length === 0 ? tags : result;
                    });
                  }}
                  key={tag}
                  variant={tagsActive.includes(tag) ? ButtonVariant.SECONDARY : ButtonVariant.TERTIARY}
                >
                  {tag}
                </Button>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </>
  );
}
