import { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { HamburgerMenu } from "./hamburger-menu";
import { ProgressBar } from "./progress-bar";

export function LayoutClient({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={[
          "fixed z-10 right-12 top-12",
          "rounded-full",
          "w-20 h-20",
          "flex items-center justify-center",
          "bg-green-dark text-white",
        ].join(" ")}
      >
        <HamburgerMenu />
      </div>
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
    </>
  );
}
