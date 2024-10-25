"use client";

import InputForm from "@/src/components/formComponents/InputForm";
import {
  ContactFormFields,
  useContactForm,
} from "@/src/hooks/forms/useContactForm";
import Button from "@/src/components/common/Button";
import Text from "@/src/components/common/Text";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/animations/email-send-2.json";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { useEffect } from "react";

type ContactFormProps = {
  refToElement: React.RefObject<HTMLDivElement>;
};

const ContactForm = ({ refToElement }: ContactFormProps) => {
  const { onSubmit, control, isLoading, submitted } = useContactForm();
  const { isMd } = useBreakpoint("md");

  useEffect(() => {
    if (submitted) {
      refToElement.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [submitted, refToElement]);

  return (
    <>
      <div
        className={`md:card md:p-12 md:w-[578px] md:h-[746px] w-full items-center ${submitted && "flex justify-center"}`}
        data-aos={!submitted && isMd && `fade-left`}
      >
        {submitted ? (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className={"md:max-w-[100%] max-w-[32rem]  md:h-auto h-[30rem]"}
          >
            <div className={"flex w-full justify-center"}>
              <Lottie
                animationData={animationData}
                loop={false}
                className={
                  "md:w-[14rem] w-[10rem] md:mt-[-6rem] mt-[-2rem] mb-[1rem]"
                }
              />
            </div>
            <Text type={"subtitle"} className={"md:w-[480px] w-auto mb-[2rem]"}>
              Thank you for reaching out!
            </Text>
            <Text type={"bigBody"}>
              I truly appreciate your message and will get back to you as soon
              as possible. Looking forward to discussing how we can bring your
              ideas to life!
            </Text>
          </motion.div>
        ) : (
          <div>
            <div className={"mb-6"}>
              <Text type={"header"} className={"font-medium"}>
                Can&apos;t wait to hear from you!
              </Text>
              <Text type={"header"} className={"font-medium"}>
                Let&apos;s get in touch!
              </Text>
            </div>

            <InputForm
              name={ContactFormFields.NAME}
              label={"Name"}
              type={"text"}
              control={control}
              placeholder={"Type your name"}
              required
              className={"mb-4"}
            />
            <InputForm
              name={ContactFormFields.EMAIL}
              label={"Email"}
              type={"email"}
              control={control}
              placeholder={"Type your email"}
              required
              className={"mb-4"}
            />

            <InputForm
              name={ContactFormFields.MESSAGE}
              label={"Message"}
              control={control}
              placeholder={"Type your message"}
              type={"textArea"}
              required
              className={"mb-4"}
            />
            <Button
              text={"SEND MESSAGE"}
              className={"mt-6 w-full"}
              onClick={onSubmit}
              loading={isLoading}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
