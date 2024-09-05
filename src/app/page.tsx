import { Highlight } from "@/components/highlight";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 py-12">
          <h1 className={["xl:text-8xl lg:text-7xl md:text-6xl text-5xl", "leading-normal mb-8"].join(" ")}>
            Design for all
          </h1>
          <p className={["text-4xl", "leading-normal mb-8"].join(" ")}>
            From Phones to Cars, Homes to Wrists: A Unified Approach
          </p>
          <p className="max-w-xl leading-relaxed">
            Our task is to create and implement <Highlight>UI design system for a client in automotive</Highlight>. We
            aim to achieve consistency, usability, and innovation across all platforms. How will we go about this?
          </p>
        </div>
        <div className={["relative bg-slate-400", "rounded-md overflow-hidden", "col-span-2 opacity-50"].join(" ")}>
          <Image alt="" src="/swiss.png" style={{ objectFit: "cover" }} fill />
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </>
  );
}
