import { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { HamburgerMenu } from "./hamburger-menu";
import { ProgressBar } from "./progress-bar";
import { ResponsiveBlock } from "./responsive-block";

export function LayoutClient({ children }: PropsWithChildren) {
  return (
    <>
      <HamburgerMenu />
      <div
        style={{ aspectRatio: "1.414/1" }}
        className={["flex flex-col", "max-w-5xl w-full", "bg-slate-700 rounded-md p-4"].join(" ")}
      >
        <ProgressBar />
        <main id="main" className="flex flex-col flex-1 py-4 overflow-auto">
          {children}
        </main>
        <Footer />
      </div>
      <ResponsiveBlock />
    </>
  );
}
