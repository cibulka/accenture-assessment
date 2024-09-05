import { LinkItem } from "@/components/link-item";
import { LINKS } from "@/constants/links";
import { IconBrush } from "@/icons/brush";
import { IconCode } from "@/icons/code";
import { IconRocket } from "@/icons/rocket";

export default function PrototypePage() {
  return (
    <>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8 mb-8">
        <div className="col-span-4">
          <p className="text-2xl leading-normal">
            Our solution needs to cater to a wide range of devices with diverse user experiences and accessibility
            needs, while remain cohesive and scalable. To ensure we're on the right track, rapid prototyping is
            essential.
          </p>
        </div>
      </div>
      <div className="flex-1" />
      <div className="grid grid-cols-6 gap-8">
        <LinkItem
          button={{
            href: LINKS.figma,
            label: "Figma",
          }}
          title="Design"
          icon={IconBrush}
          content="Use rapid prototype tool that fosters productive cooperation between designers and developers."
        />

        <LinkItem
          button={{
            href: LINKS.storybook,
            label: "Storybook",
          }}
          title="Development"
          icon={IconCode}
          content="Showcase interactivity of the components in all their variants. Offer automatic documentation and coding
            examples."
        />

        <LinkItem
          button={{
            href: null,
            label: "Not ready",
          }}
          title="Adoption"
          icon={IconRocket}
          content="Compose components to simple apps, acting as proofs of concept across the platforms."
        />
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </>
  );
}
