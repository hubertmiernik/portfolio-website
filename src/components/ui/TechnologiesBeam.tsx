"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/src/app/[locale]/technologies/components/TracingBeam";
import ReactIcon from "../../../public/icons/technologies/react.svg";
import NextIcon from "../../../public/icons/technologies/nextjs.svg";
import TailwindIcon from "../../../public/icons/technologies/tailwind.svg";
import StyledComponentsIcon from "../../../public/icons/technologies/styled-components.svg";
import TypeScriptIcon from "../../../public/icons/technologies/typescript.svg";
import HTMLIcon from "../../../public/icons/technologies/html.svg";
import CSSIcon from "../../../public/icons/technologies/css.svg";
import ReduxIcon from "../../../public/icons/technologies/redux.svg";
import CypressIcon from "../../../public/icons/technologies/cypress.svg";
import StorybookIcon from "../../../public/icons/technologies/storybook.svg";
import FramerMotionIcon from "../../../public/icons/technologies/framer.svg";
import Text from "@/src/components/common/Text";

export const TracingBeamTechnologies = () => {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {technologies.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-20"
            data-aos={"zoom-out-up"}
            data-aos-delay={index < 4 ? index * 100 : index * 50}
          >
            <div className="card flex items-center gap-2 flex-col mb-4 p-4 w-full">
              <Text type={"subtitle"} className={"mb-4"}>
                {item.name}
              </Text>
              <Image
                src={item.icon}
                alt="blog thumbnail"
                height="150"
                width="150"
                className="mb-5 object-cover"
              />
            </div>
            <Text type={"body"}>{item.description}</Text>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

const technologies = [
  {
    name: "React.JS",
    description:
      "React.js is a highly popular JavaScript library developed by Facebook for building dynamic and interactive user interfaces, particularly suited for single-page applications (SPAs). It employs a component-based architecture, which allows developers to create reusable UI components that manage their own state. One of React’s core features is the virtual DOM, a lightweight representation of the actual DOM. This virtual DOM enables React to update the user interface efficiently by only re-rendering components that have changed, ensuring high performance. React's ecosystem is vast, offering numerous libraries and tools that extend its capabilities, making it a versatile and powerful solution for modern web development.",
    icon: ReactIcon,
  },
  {
    name: "Next.JS",
    description:
      "Next.js is an advanced React framework created by Vercel that enables developers to build high-performance server-rendered applications with ease. It supports multiple rendering methods, including static site generation (SSG), server-side rendering (SSR), and incremental static regeneration (ISR), providing flexibility in how content is rendered and served. Next.js also offers automatic code splitting, which optimizes loading times by only loading necessary code, built-in CSS and Sass support for styling, and powerful routing capabilities. Additionally, Next.js includes API routes, allowing developers to create API endpoints directly within their application. These features collectively enhance performance, SEO, and developer productivity.",
    icon: NextIcon,
  },
  {
    name: "Redux Toolkit",
    description:
      "Redux Toolkit is the official, recommended toolset for efficient Redux development, created by the Redux team to simplify the process of managing application state. It provides a set of pre-configured tools and best practices, making it easier to write reliable and maintainable Redux logic. Key features include the `configureStore` function for setting up the Redux store with sensible defaults, `createSlice` for generating reducers and action creators in one step, and built-in support for middleware like Redux Thunk. By reducing boilerplate code and offering powerful utilities, Redux Toolkit enhances the developer experience and makes state management more intuitive in React applications.",
    icon: ReduxIcon,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a statically typed superset of JavaScript developed by Microsoft that introduces optional static typing and other features to the language. It enhances the development experience by catching type errors at compile time, reducing runtime errors, and improving code quality. TypeScript's type system supports interfaces, enums, and generics, providing robust tools for defining and enforcing data structures. It also offers modern JavaScript features, such as async/await and modules, while maintaining compatibility with existing JavaScript code. TypeScript's seamless integration with popular JavaScript libraries and frameworks makes it a powerful tool for building large-scale, maintainable applications.",
    icon: TypeScriptIcon,
  },
  {
    name: "HTML5",
    description:
      "HTML5 is the latest version of the Hypertext Markup Language, the standard language for structuring and presenting content on the web. It introduces new elements, attributes, and behaviors that enhance the capability and performance of web applications. Key features of HTML5 include semantic elements like `<article>`, `<section>`, and `<footer>`, which improve the readability and accessibility of web content. HTML5 also enhances multimedia support with native audio and video elements, and it provides new APIs for drag-and-drop interactions, local storage, and offline applications. These advancements make HTML5 a foundational technology for modern web development.",
    icon: HTMLIcon,
  },
  {
    name: "CSS3",
    description:
      "CSS3 is the latest evolution of the Cascading Style Sheets language, offering a range of new features and modules for styling and layout. It includes capabilities for creating animations and transitions, enabling developers to add dynamic effects to web pages without relying on JavaScript. CSS3 also introduces the Flexible Box Layout (Flexbox) and Grid Layout modules, providing powerful tools for designing responsive and adaptive layouts. Other notable features include media queries for responsive design, custom properties (variables) for reusability, and new selectors for more precise targeting of elements. These enhancements make CSS3 an essential technology for creating visually appealing and responsive web applications.",
    icon: CSSIcon,
  },
  {
    name: "Framer Motion",
    description:
      "Framer Motion is a cutting-edge library for animating React applications, providing a simple yet powerful API for creating fluid and complex animations. With Framer Motion, developers can easily add physics-based animations and sophisticated gesture interactions to their components. It supports keyframe animations, spring physics, and drag-and-drop features, all designed to enhance user experience and engagement. By leveraging Framer Motion, developers can create highly interactive and visually appealing user interfaces that respond to user actions with smooth transitions and animations. This library is particularly beneficial for projects that require dynamic, responsive designs, offering both performance and flexibility.",
    icon: FramerMotionIcon,
  },
  {
    name: "Cypress",
    description:
      "Cypress is a modern, end-to-end testing framework specifically designed for testing web applications. Unlike traditional testing tools, Cypress operates directly within the browser, providing a fast and reliable testing experience. It features real-time reloading, automatic waiting for elements to become available, and powerful debugging tools. Cypress allows developers to write comprehensive tests that cover user interactions and application behavior, ensuring that web applications function correctly. Its intuitive API and rich feature set make it easy to set up and maintain tests, contributing to higher code quality and more robust applications.",
    icon: CypressIcon,
  },
  {
    name: "Storybook",
    description:
      "Storybook is an open-source tool for developing, testing, and documenting UI components in isolation. It creates a dedicated environment where developers can build and review components outside of the main application, promoting better component design and reusable code. Storybook's extensive addon ecosystem allows for enhanced functionality, such as visual regression testing, accessibility checks, and interactive documentation. By focusing on individual components, Storybook enables developers to create more robust, scalable, and maintainable UI elements, streamlining the development process and improving collaboration across teams.",
    icon: StorybookIcon,
  },
  {
    name: "Styled Components",
    description:
      "Styled Components is a CSS-in-JS library that enables developers to write CSS directly within JavaScript using tagged template literals. This approach leverages the power of JavaScript to dynamically style components based on their props and theme context, promoting better organization and reusability of styles. Styled Components allows for scoped styling, preventing CSS conflicts and ensuring that styles are applied only to the intended elements. Additionally, it supports theming, making it easy to create consistent design systems across applications. By integrating styling with the component-based architecture of React, Styled Components enhances the developer experience and enables more maintainable and scalable styling solutions.",
    icon: StyledComponentsIcon,
  },

  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of low-level utility classes for building custom designs quickly and efficiently. Unlike traditional CSS frameworks, Tailwind promotes a different approach to styling, where developers compose styles directly in their markup using utility classes. This methodology enables rapid prototyping and ensures design consistency across projects. Tailwind's utility classes cover a wide range of CSS properties, including layout, spacing, typography, and colors. It also supports theming and customization, allowing developers to tailor the framework to their specific needs. By streamlining the styling process, Tailwind CSS enhances productivity and fosters the creation of maintainable and scalable designs.",
    icon: TailwindIcon,
  },
];
