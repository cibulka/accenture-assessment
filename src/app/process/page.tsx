import { Accordion } from "@/components/accordion";
import { Highlight } from "@/components/highlight";
import { Slide } from "@/components/slide";

export default function ProcessPage() {
  return (
    <Slide
      columns={[
        {
          title: "Research",
          intro: (
            <>
              First of all, it is essential to establish a <Highlight>clear understanding</Highlight> of our objectives
              and available resources.
            </>
          ),
          content: (
            <Accordion
              items={[
                {
                  title: "Meet the team",
                  content:
                    "People are the cornerstone of any successful project. Recognizing the unique skills and expertise of each team member is crucial for assigning clear roles and responsibilities.",
                },
                {
                  title: "Getting the project brief",
                  content:
                    "To ensure that our project aligns with the client's expectations, we need to obtain a clear project brief. This document should outline the desired outcomes, deliverables, timelines, and the level of client involvement. By understanding the client's vision and expectations, we can establish a collaborative working relationship and avoid misunderstandings.",
                },
                {
                  title: "Understand the platforms",
                  content:
                    "Adapting our design system to a wide range of platforms presents unique challenges. While desktop and mobile development are relatively familiar territory for modern developers, in-car HMIs and smart home devices require specialized considerations. By understanding the specific constraints and opportunities associated with these platforms, we can develop a design system that is both flexible and effective.",
                },
                {
                  title: "Defining Quality Standards",
                  content:
                    'To ensure consistency and maintainability, we need to establish clear quality benchmarks for our component library. By defining what constitutes a "good" component, we can create a shared understanding among developers and ensure that our library adheres to high standards of design and functionality.',
                },
                {
                  title: "Create a roadmap",
                  content:
                    "Once we have completed the initial research and planning stages, we can begin to divide the project into manageable sprints. By creating a well-structured roadmap, we can effectively allocate resources, track progress, and ensure that we stay on schedule.",
                },
                {
                  title: "Prepare tooling",
                  content:
                    "Let's invest in setting up tools and processes to streamline development and design. This will make our workflow scalable, onboarding efficient, and productivity high. Iterating through prototypes is essential in our workflow, and that is possible only with good tooling.",
                },
                {
                  title: "Technical brand manual",
                  content:
                    "Create a comprehensive document outlining the technical aspects of our brand, including typography, color palettes, spacing, and layout grids. The document is shared between developer and designer team.",
                },
              ]}
            />
          ),
        },
        {
          title: "Development",
          intro: (
            <>
              Time to dive in! During this phase we <Highlight>develop our components</Highlight> to be used in their
              applications. The results of our work are available in forms of prototypes, delivered by both designer and
              developer teams.
            </>
          ),
          content: (
            <Accordion
              items={[
                {
                  title: "Designer team",
                  content:
                    "Our designers continuously expand the design system based on the brief provided in the Research phase. Results of their work can be inspected in a developer-friendly rapid prototyping tool.",
                },
                {
                  title: "Developer team",
                  content:
                    "Our developers incorporate new design system elements into our component library, prioritizing consistency, reusability, and comprehensive documentation. Developer prototypes offer interactive experiences that can shape subsequent design decisions.",
                },
                {
                  title: "Porting to React Native",
                  content:
                    "Analyse the parts of our component library that should be ported to React Native for in-car HMI devices (and similar). Given the specifics of the platforms, make design and functionality changes as needed.",
                },
                {
                  title: "Testing & Feedback",
                  content:
                    "By encouraging close teamwork among designers, developers, and QA, we can proactively spot and resolve potential issues before the components are adopted.",
                },
              ]}
            />
          ),
        },
        {
          title: "Adoption",
          intro: (
            <>
              We bring our components to real-world situations. To maximize efficiency, development and adoption should
              happen <Highlight>in parallel</Highlight>. This approach can identify potential adoption challenges early
              on.
            </>
          ),
          content: (
            <Accordion
              items={[
                {
                  title: "Proofs of concept prototypes",
                  content:
                    "Select components from the brief that can be isolated into standalone apps. A configuration form is a good candidate. Build and test this app across different environments to ensure its functionality before moving on to larger-scale applications.",
                },
                {
                  title: "Integrate into existing (or new) apps",
                  content:
                    "Once we validate the effectiveness of our proof of concept prototypes, we can begin integrating our components into more complex applications, bringing us closer to project completion.",
                },
                {
                  title: "Testing & Feedback",
                  content:
                    "Now is an excellent opportunity to involve the client or even end-users in testing and feedback. In addition to standard QA and internal feedback, we can utilize tools like A/B testing.",
                },
                {
                  title: "Train development teams",
                  content:
                    "To ensure a smooth transition, we should ensure our design system documentation is comprehensive and user-friendly. Observe how new colleagues interact with the library to assess its learning curve. Additionally, establish contributor guidelines for potential external developers.",
                },
                {
                  title: "Launch",
                  content:
                    "The launch phase marks the official release of the new design system across the organization. This involves deploying the system to all relevant applications and ensuring that development teams are equipped with the necessary knowledge and tools to effectively utilize it. By successfully launching the design system, we can begin to reap the benefits of improved consistency, efficiency, and user experience throughout our products and services.",
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
}
