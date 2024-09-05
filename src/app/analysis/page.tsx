import { Accordion } from "@/components/accordion";
import { Highlight } from "@/components/highlight/highlight";
import { Slide } from "@/components/slide/slide";

export default function AnalysisPage() {
  return (
    <Slide
      columns={[
        {
          title: "What we have",
          intro: (
            <>
              Our client is a <Highlight>known brand</Highlight> in the industry with good knowledge of its user-base.
              Our designers already started to work on the design system.
            </>
          ),
          content: (
            <Accordion
              items={[
                {
                  title: "Strong brand identity",
                  content:
                    "The client's brand is well-known and versatile, providing our designers with a solid base for creative applications across various platforms.",
                },
                {
                  title: "Good knowledge of the user",
                  content:
                    "Our client's deep understanding of their users, based on years of experience, can significantly aid in designing a new UI system that meets their specific needs.",
                },
                {
                  title: "Emerging design system",
                  content:
                    "Our experienced design team has made significant progress on the new UI system prototype. The initial designs demonstrate a strong commitment to accessibility and lay a good groundwork for future iterations.",
                },
              ]}
            />
          ),
        },
        {
          title: "Challenge",
          intro: <>Our different environments provide a unique set of challenges, here are some of them:</>,
          content: (
            <Accordion
              items={[
                {
                  title: "Screen Size and Resolution Variations",
                  content:
                    "Different devices have vastly different screen sizes and resolutions, requiring designs to scale and adapt without compromising user experience or readability.",
                },
                {
                  title: "Input Methods",
                  content:
                    "Touchscreens, keyboards, mice, voice commands, and gestures each have unique input methods, necessitating designs that are intuitive and accessible across all platforms.",
                },
                {
                  title: "Contextual Differences",
                  content:
                    "The context in which a device is used can vary greatly. For example, a user might be driving a car, relaxing at home, or working at a desk, which influences design priorities and interactions.",
                },
                {
                  title: "Performance Considerations",
                  content:
                    "Different platforms have varying processing power and memory constraints. Designs must be optimized to ensure smooth performance and avoid lag, especially on resource-limited devices.",
                },
                {
                  title: "Accessibility",
                  content:
                    "Ensuring that designs are accessible to users with disabilities is crucial across all platforms. This includes considerations for screen readers, color contrast, and keyboard navigation.",
                },
                {
                  title: "Design Language Consistency",
                  content:
                    "Maintaining a consistent design language across multiple platforms while adapting to their specific requirements can be challenging, as differences in screen size, input methods, and context can influence design decisions.",
                },
              ]}
            />
          ),
        },
        {
          title: "I can help",
          intro: (
            <div className="flex flex-col gap-4">
              <p>
                As a front-end developer specializing in accessibility and UX, I bring experience leading projects and
                collaborating with diverse teams, mostly in the cultural sector.
              </p>
              <p>
                My ability to bridge the gap between clients, designers, and developers fosters effective communication
                and ensures a successful project outcome.
              </p>
              <p>
                I value teamwork and independent thinking, believing that a deep understanding of the product and
                context is essential for achieving exceptional results.
              </p>
            </div>
          ),
          content: "",
        },
      ]}
    />
  );
}
