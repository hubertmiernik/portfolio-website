"use client";

import ContactForm from "@/src/components/forms/ContactForm";
import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import React, { useRef } from "react";
import Text from "@/src/components/common/Text";

const ContactPage = () => {
  const myRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="mx-auto sm:px-10 px-5 max-w-[1400px]">
      <div
        className={
          "lg:flex-row flex-col md:mt-[10rem] mt-[6rem] flex gap-20 justify-between items-center"
        }
      >
        <div className={"max-w-[32rem]"}>
          <TextGenerateEffect
            className={"mb-6"}
            words={"Contact me"}
            type={"title"}
          />
          <Text type={"body"}>
            {/*Not sure what you need? Frontend, backend or maybe both? Do you have*/}
            {/*an idea in your head but don&apos;t know how to execute it and*/}
            {/*transfer it into the digital world? Need a quote for your project? I*/}
            {/*work with talented developers, designers, testers and marketing*/}
            {/*specialists. We are able to create your dream product for you.*/}
            {/*Let&apos;s talk about your project!*/}
            Are you looking for a skilled frontend developer to join your team
            or help you refine your web application&apos;s user experience?
            Whether you&apos;re a startup needing extra development support or
            an established company looking for a frontend specialist, I’m here
            to help. Let’s talk about how I can contribute to your project and
            bring your vision to life. Need a quote or more details? Feel free
            to reach out!
          </Text>
          <div ref={myRef}>
            <Text type="body" bold className={"mt-10"}>
              ✉️ contact@hubertmiernik.com
            </Text>
          </div>
        </div>

        <ContactForm refToElement={myRef} />
      </div>
    </main>
  );
};

export default ContactPage;
