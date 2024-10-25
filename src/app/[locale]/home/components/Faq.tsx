"use client";

import Text from "@/src/components/common/Text";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";
import { ArrowDownFaqIcon } from "@/src/images/Images";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>([false]);

  const handleClick = (index: number) => {
    setOpenIndexes((prev) => {
      const newOpenIndexes = [...prev];
      newOpenIndexes[index] = !newOpenIndexes[index];
      return newOpenIndexes;
    });
  };

  const faqQuestions = [
    {
      question: "What kind of development services do you offer?",
      answer:
        "I specialize in frontend development using modern web technologies like React, Next.js, and TypeScript. I work as a freelance frontend developer, helping companies and startups enhance their web applications with seamless user interfaces.",
    },
    {
      question: "How can you support our development team?",
      answer:
        "I can integrate into your development team as a frontend specialist, working closely with backend developers and designers to bring your product's UI to life. I ensure clean, maintainable code, and smooth collaboration with your team, no matter the size.",
    },
    {
      question: "What industries have you worked in?",
      answer:
        "I have experience working with companies in tech, e-commerce, SaaS, and more. My flexibility and diverse project background allow me to adapt to the unique challenges of each industry.",
    },
    {
      question: "Can you work with distributed teams across time zones?",
      answer:
        "Yes, I am highly adaptable when it comes to time zone differences and have successfully worked with teams across the USA, Europe, and Asia. I prioritize clear communication and flexibility to ensure smooth project progress.",
    },
    {
      question: "Do you offer long-term support?",
      answer:
        "Absolutely. I am available for both short-term projects and long-term engagements where I can provide ongoing frontend development support, helping you scale and maintain your web applications over time.",
    },
    {
      question: "What is your development approach?",
      answer:
        "I prioritize clean, maintainable code, collaborative work with product teams, and open communication. I continuously provide progress updates to ensure that your product vision is realized efficiently and effectively.",
    },
    {
      question:
        "Can you work with our existing design system or frontend framework?",
      answer:
        "Yes, I can work with existing design systems and frontend frameworks to ensure consistency across your product. Whether you use Tailwind CSS, Styled Components, or other tools, I’ll seamlessly integrate into your workflow.",
    },
    {
      question: "How do you ensure code quality and performance?",
      answer:
        "I follow best practices for frontend development, including writing modular, maintainable code and performing tests. I also focus on performance optimizations such as lazy loading, reducing bundle sizes, and improving the overall user experience.",
    },
  ];

  return (
    <div>
      <Text type={"title"} className={"text-center section-with-text"}>
        Frequently Asked Questions
      </Text>

      {faqQuestions.map(({ question, answer }, index) => (
        <div
          key={question}
          className={"mb-4 cursor-pointer"}
          onClick={() => handleClick(index)}
          data-aos={"fade-up"}
          data-aos-delay={index * 100}
        >
          <div
            className={`card h-20 flex items-center px-8 transition-all duration-250 ${openIndexes[index] && "rounded-b-none border-t-primary border-l-primary border-r-primary primary-shadow-without-bottom hover:border-b-border "} ${!openIndexes[index] && "hover:border-primary transition-all duration-300"} `}
          >
            <div className={"flex justify-between w-full items-center"}>
              <Text type={"bigBody"} className={"font-medium max-w-[90%]"}>
                {question}
              </Text>
              <motion.div animate={{ rotate: openIndexes[index] ? 0 : 180 }}>
                <ArrowDownFaqIcon />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{
              height: openIndexes[index] ? "auto" : 0,
              opacity: openIndexes[index] ? 1 : 0,
            }}
            animate={
              openIndexes[index]
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.25 }}
            className={`overflow-hidden border -mt-[1px] rounded-b-xl border-border ${openIndexes[index] && "border-l-primary border-r-primary border-b-primary primary-shadow-without-top"}`}
          >
            <div className="px-8 py-4 h-auto flex items-center ">
              <Text type={"body"}>{answer}</Text>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
