"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Text from "@/src/components/common/Text";

const HowIworkSection = () => {
  // const experiencesData = [
  //   {
  //     title: "Consultation and Requirement Analysis",
  //     description:
  //       "At the beginning of our collaboration, I thoroughly analyze the client's needs and existing processes, gathering information and identifying key functionalities. This allows me to better tailor the software project to their business requirements.",
  //     icon: <div className={"text-textPrimary"}>1</div>,
  //   },
  //   {
  //     title: "Quotation and Agreement",
  //     description:
  //       "Based on the gathered information, I prepare a project quotation, considering the estimated time, effort, and costs. Upon acceptance, I draft a detailed agreement outlining the scope of work, deadlines, payment terms, and other important aspects of our collaboration, ensuring the interests of both parties are protected.",
  //     icon: <div className={"text-textPrimary"}>2</div>,
  //   },
  //   {
  //     title: "Design",
  //     description:
  //       "It is good if the customer has prepare design. If not then I can work with my designers. The client actively participates in the design process, and I prepare function prototypes if necessary before implementation.",
  //     icon: <div className={"text-textPrimary"}>3</div>,
  //   },
  //   {
  //     title: "Implementation",
  //     description:
  //       "Once the design is approved, I proceed with the implementation, using modern technologies and programming practices. I work agile, regularly delivering working parts of the system, maintaining constant communication with the client throughout the evaluation process.",
  //     icon: <div className={"text-textPrimary"}>4</div>,
  //   },
  //   {
  //     title: "Testing and Quality",
  //     description:
  //       "During implementation, I conduct various types of tests, including unit, integration, and acceptance tests, to ensure the software meets the client's expectations. I collaborate with the client to tailor tests to the project's specifics, aiming to create reliable, secure, and efficient software.",
  //     icon: <div className={"text-textPrimary"}>5</div>,
  //   },
  //   {
  //     title: "Deployment and Training",
  //     description:
  //       "After successful testing, I move on to the deployment phase, installing the software, configuring the system, and training users to effectively use the new solution. I organize workshops or provide user documentation.",
  //     icon: <div className={"text-textPrimary"}>6</div>,
  //   },
  //   {
  //     title: "Support and Enhancement",
  //     description:
  //       "Post-deployment, I offer long-term technical support, monitoring the system, resolving issues, and suggesting possible improvements. My goal is to maintain a long-lasting relationship with the client and continuously provide value through updates and software development.",
  //     icon: <div className={"text-textPrimary"}>7</div>,
  //   },
  // ] as const;

  const experiencesData = [
    {
      title: "Consultation and Requirement Analysis",
      description:
        "I begin by understanding your project goals and gathering detailed requirements. Whether you're looking to improve your frontend or need specific components developed, I’ll work with your team to ensure that the solution aligns with your product vision and business needs.",
      icon: <div className={"text-textPrimary"}>1</div>,
    },
    {
      title: "Quotation and Agreement",
      description:
        "Based on the scope of work, I prepare an estimate, detailing the time and resources required. Once agreed upon, I provide a clear agreement outlining my role, timelines, and deliverables, ensuring smooth collaboration.",
      icon: <div className={"text-textPrimary"}>2</div>,
    },
    {
      title: "Design Collaboration",
      description:
        "If you have a design ready, I can jump straight into implementation. If not, I can collaborate with designers to help create a user-friendly interface. Prototypes and wireframes will be reviewed with you to ensure the design fits your product’s needs.",
      icon: <div className={"text-textPrimary"}>3</div>,
    },
    {
      title: "Frontend Development and Implementation",
      description:
        "With the design approved, I handle the frontend development using modern frameworks like React, Next.js, and TypeScript. I integrate smoothly with your existing development process, delivering agile updates and ensuring the code aligns with your team’s standards.",
      icon: <div className={"text-textPrimary"}>4</div>,
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "I perform unit and integration testing during development to ensure code quality and functionality. I can also work with your testing teams to ensure the frontend is secure, performant, and ready for deployment.",
      icon: <div className={"text-textPrimary"}>5</div>,
    },
    {
      title: "Deployment Support",
      description:
        "When it's time to launch, I help ensure a smooth deployment of the frontend, collaborating with backend teams or handling frontend-specific configurations. I make sure everything is set up for a seamless user experience.",
      icon: <div className={"text-textPrimary"}>6</div>,
    },
    {
      title: "Ongoing Support and Iteration",
      description:
        "Post-launch, I remain available for continuous frontend support, feature enhancements, and performance improvements. I aim to build a long-term collaboration, helping you iterate and refine your product as needed.",
      icon: <div className={"text-textPrimary"}>7</div>,
    },
  ] as const;

  type ExperienceElementProps = {
    item: {
      icon: React.ReactNode;
      title: string;
      description: string;
    };
  };

  const HowIWorkElementElement = ({ item }: ExperienceElementProps) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });
    return (
      <div ref={ref} className="vertical-timeline-element">
        <VerticalTimelineElement
          className={"workflow-and-collaboration"}
          visible={inView}
          icon={item.icon}
        >
          <Text type={"bigBody"} className="!font-semibold capitalize">
            {item.title}
          </Text>
          <Text type={"body"} className="!mt-1 !font-normal">
            {item.description}
          </Text>
        </VerticalTimelineElement>
      </div>
    );
  };

  return (
    <div className={""}>
      <Text type={"title"} className={"text-center section-with-text"}>
        Project workflow and collaboration
      </Text>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <HowIWorkElementElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HowIworkSection;
