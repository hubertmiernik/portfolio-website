"use client";

import React, { useState } from "react";
import Text from "@/src/components/common/Text";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Blob from "@/public/icons/blob.svg";
import { ArrowDownIcon } from "@/src/images/Images";
import { Meteors as RawMeteors } from "@/src/components/ui/Meteors";

const Meteors = React.memo(RawMeteors);

const MyExperience = () => (
  <div>
    <Text type={"title"} className={"text-center section-with-text"}>
      My work experience
    </Text>
    <div className={"lg:flex-row flex-col flex gap-4"}>
      <Tile
        title={"Frontend Developer"}
        description={"August 2020 - Present"}
        fadeDirection={"fade-right"}
        content={
          <div className={"p-2"}>
            <Text type={"bigBody"} className="mt-2 font-semibold">
              As a frontend developer, I have been involved in a diverse range
              of projects, from small solo endeavors to large-scale applications
              used by thousands of users. My experience spans multiple
              industries, including gaming, healthcare, and finance. Key
              highlights include:
            </Text>
            <Text type={"body"}>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Developing and maintaining user interfaces for web
                  applications using modern frontend technologies such as React,
                  Next.js, and TypeScript.
                </li>
                <li>
                  Working on projects with teams ranging from small local teams
                  to large international groups, collaborating with clients and
                  developers from around the world.
                </li>
                <li>
                  Implementing responsive and dynamic web designs using
                  TailwindCSS and Styled-Components to ensure optimal user
                  experience across various devices.
                </li>
                <li>
                  Integrating frontend applications with backend services using
                  REST APIs and GraphQL.
                </li>
                <li>
                  Continuously improving code quality and performance through
                  best practices and modern development techniques.
                </li>
              </ul>
            </Text>
          </div>
        }
      />
      <Tile
        title={"Software Tester/QA"}
        description={"June 2018 - July 2020"}
        fadeDirection={"fade-left"}
        content={
          <div className={"p-2"}>
            <Text type={"bigBody"} className="mt-2 font-semibold">
              In my role as a software tester within the eCommerce industry, I
              focused on ensuring the quality and reliability of web
              applications through automated testing. Key responsibilities
              included:
            </Text>
            <Text type={"body"}>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Writing and maintaining automated test scripts using Java and
                  Selenium WebDriver.
                </li>
                <li>
                  Conducting thorough testing of eCommerce platforms to identify
                  and document defects.
                </li>
                <li>
                  Collaborating closely with developers and product managers to
                  understand requirements and design effective test plans.
                </li>
                <li>
                  Utilizing various testing frameworks and tools to enhance test
                  coverage and efficiency.
                </li>
                <li>
                  Ensuring that new features and updates met the highest quality
                  standards before deployment.
                </li>
              </ul>
            </Text>
          </div>
        }
      />
    </div>
  </div>
);

const Tile = ({
  title,
  description,
  fadeDirection,
  content,
}: {
  title: string;
  description: string;
  fadeDirection: "fade-left" | "fade-right";
  content: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"w-full"} ref={ref}>
      <div
        className={`overflow-hidden relative card cursor-pointer w-full h-[10rem] md:h-[15rem] p-6 flex justify-evenly flex-col ${
          isOpen &&
          "rounded-b-none border-t-primary border-l-primary border-r-primary primary-shadow-without-bottom hover:border-b-border"
        } transition-all duration-300 hover:border-primary`}
        onClick={handleClick}
        data-aos={!inView && fadeDirection}
        data-aos-duration={!inView && 1000}
      >
        <div className={"flex items-center flex-col -mt-8"}>
          <Text type={"subtitle"} className={"font-medium"}>
            {title}
          </Text>
        </div>
        <motion.div
          className="absolute bottom-8 left-0 right-0 ml-auto mr-auto w-[40px]"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            animate={
              !isOpen
                ? {
                    y: [0, 10, 0],
                    scale: [1, 1, 1],
                  }
                : {
                    y: 0,
                    scale: 1,
                  }
            }
            transition={
              !isOpen
                ? {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.25,
                  }
                : {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
            }
          >
            <ArrowDownIcon />
          </motion.div>
        </motion.div>
        <Meteors number={30} />
      </div>
      <AnimatePresence>
        <motion.div
          onClick={handleClick}
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`overflow-hidden border-border border -mt-[1px] rounded-b-xl cursor-pointer ${isOpen && "border-l-primary border-r-primary border-b-primary primary-shadow-without-top"}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2"
          >
            {content}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MyExperience;
