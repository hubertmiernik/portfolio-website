import ReactIcon from "@/public/icons/technologies/react.svg";
import NextIcon from "@/public/icons/technologies/nextjs.svg";
import ReduxIcon from "@/public/icons/technologies/redux.svg";
import CypressIcon from "@/public/icons/technologies/cypress.svg";
import FramerMotionIcon from "@/public/icons/technologies/framer.svg";
import StorybookIcon from "@/public/icons/technologies/storybook.svg";
import StyledComponentsIcon from "@/public/icons/technologies/styled-components.svg";
import TypeScriptIcon from "@/public/icons/technologies/typescript.svg";
import HTMLIcon from "@/public/icons/technologies/html.svg";
import CSSIcon from "@/public/icons/technologies/css.svg";
import TailwindIcon from "@/public/icons/technologies/tailwind.svg";

export const gridItems = [
  {
    id: 1,
    title: "Passionate Developer",
    description: "Enthusiastic about creating innovative solutions.",

    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end lg:max-w-[27rem] max-w-[15rem]",
    img: "/b1.svg",
    spareImg: "",
    dataAos: "fade-up",
    dataAosDelay: 0,
  },
  {
    id: 2,
    title: "Personalized Solutions for Every Project",
    description:
      "Delivering tailored web experiences that meet your unique business needs.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    dataAos: "zoom-in-up",
    dataAosDelay: 100,
  },
  {
    id: 3,
    title: "Technical Expertise",
    description:
      "Continuously expanding my skills with cutting-edge technologies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    dataAos: "zoom-in-up",
    dataAosDelay: 200,
  },
  {
    id: 4,
    title: "Collaborative Client Engagement",
    description: "Prioritizing open communication to ensure project success.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    dataAos: "zoom-in-up",
    dataAosDelay: 300,
  },
  {
    id: 5,
    title: "Photography services",
    description: "Capturing stunning visuals from both the ground and the air.",
    className: "md:col-span-3 md:row-span-2 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "md:justify-end justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    dataAos: "zoom-in-up",
    dataAosDelay: 400,
  },
  {
    id: 6,
    title: "Let's Collaborate",
    description: "Ready to start a project together? Let's connect.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    dataAos: "zoom-in-up",
    dataAosDelay: 500,
  },
];

export const technologies = [
  {
    name: "React.JS",
    description:
      "React.js is a JavaScript library for building dynamic and interactive user interfaces, especially single-page applications. It uses a component-based architecture for reusable UI elements and a virtual DOM for fast, responsive updates. React is known for its flexibility, performance, and extensive ecosystem.",
    icon: ReactIcon,
  },
  {
    name: "Next.JS",
    description:
      "Next.js is a powerful React framework for building server-rendered applications with ease. It supports static site generation, server-side rendering, and incremental static regeneration, providing optimal performance and SEO. Next.js also includes features like automatic code splitting, API routes, and a built-in CSS support.",
    icon: NextIcon,
  },
  {
    name: "Redux Toolkit",
    description:
      "Redux Toolkit is the official, recommended toolset for efficient Redux development. It simplifies the process of writing Redux logic with pre-configured settings and powerful utilities, making state management in React applications more intuitive and less boilerplate-heavy.",
    icon: ReduxIcon,
  },
  {
    name: "Cypress",
    description:
      "Cypress is an end-to-end testing framework designed for modern web applications. It offers a developer-friendly experience with real-time reloading, automatic waiting, and powerful debugging capabilities. Cypress makes it easy to write, run, and maintain comprehensive tests for web applications.",
    icon: CypressIcon,
  },
  {
    name: "Framer Motion",
    description:
      "Framer Motion is a powerful library for creating smooth, complex animations in React applications. It offers a simple API for orchestrating animations and gestures, enabling developers to build highly interactive user interfaces with ease. Framer Motion leverages the power of physics-based animations.",
    icon: FramerMotionIcon,
  },
  {
    name: "Storybook",
    description:
      "Storybook is a UI development environment and playground for building, testing, and documenting React components. It enables developers to work on isolated components outside of the main application, facilitating the creation of robust and reusable UI elements with ease.",
    icon: StorybookIcon,
  },
  {
    name: "Styled Components",
    description:
      "Styled Components is a CSS-in-JS library for styling React components using tagged template literals. It allows developers to write plain CSS within JavaScript, leveraging the power of component-based architecture and enabling dynamic styling based on props and theme context.",
    icon: StyledComponentsIcon,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a statically typed superset of JavaScript that adds type safety and other features to the language. It helps developers catch errors early through type checking and improves code quality and maintainability. TypeScript seamlessly integrates with existing JavaScript libraries and frameworks.",
    icon: TypeScriptIcon,
  },
  {
    name: "HTML5",
    description:
      "HTML5 is the latest version of the Hypertext Markup Language, the standard for structuring and presenting content on the web. It introduces new elements, attributes, and behaviors, enabling more diverse and powerful web applications. HTML5 also enhances multimedia support and improves accessibility.",
    icon: HTMLIcon,
  },
  {
    name: "CSS3",
    description:
      "CSS3 is the latest evolution of the Cascading Style Sheets language, bringing a range of new features for styling and layout. It includes modules for animations, transitions, and flexible box layouts, providing developers with greater control over the appearance and behavior of web pages.",
    icon: CSSIcon,
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs quickly. It promotes a different approach to styling, where developers compose styles directly in their markup, enabling rapid prototyping and consistency across projects.",
    icon: TailwindIcon,
  },
];
