"use client";

import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import React from "react";
import SparklesCTASection from "@/src/components/ui/SparklesCTASection";
import Image from "next/image";
import MyPhoto from "@/public/my-photo-removebg.png";
import MyExperience from "@/src/app/[locale]/home/components/MyExperience";
import Text from "@/src/components/common/Text";

const AboutMePage = () => {
  return (
    <main className="mx-auto sm:px-10 px-5 max-w-[1400px]">
      <div
        className={
          "md:flex-row flex-col flex gap-20 items-center md:mt-40 mt-24 justify-around"
        }
      >
        <div className={"md:w-[50%] w-full"} data-aos={"fade-right"}>
          <TextGenerateEffect
            className={"mb-5"}
            words={"About me"}
            type={"title"}
          />
          <div
            className={
              "md:hidden ml-4 mb-2 float-right flex w-[50%] items-center justify-center"
            }
          >
            <div className={"rounded-md bg-custom-gradient"}>
              <Image
                src={MyPhoto}
                alt={"my photo"}
                className={"w-[30rem] h-auto rounded-md z-50 relative"}
              />
            </div>
          </div>
          <Text type={"body"} className={"mb-2"}>
            I am a developer who specializes in building interactive,
            user-friendly, and responsive web applications. I design
            user-friendly interfaces that provide an exemplary user experience,
            ensuring each project is both functional and visually pleasing. My
            goal is to bring your vision to life, making sure that all the
            details are taken into account using current technologies and
            innovative design practices. Additionally, I hold a degree in
            Computer Science from Jagiellonian University, which has further
            strengthened my foundation and skills in this field.
          </Text>
          <Text type={"body"} className={"mb-2"}>
            In addition to my professional life, I am very passionate about
            photography. I love capturing moments with the lens, whether it be a
            perfect portrait or a breathtaking view of nature. This is another
            area where I get to express my creative ability in an alternative
            medium and see things from other perspectives.
          </Text>
          <Text type={"body"} className={"mb-2"}>
            Outside coding and taking pictures, I enjoy being in the great
            outdoors. I love going on hikes in the mountains, cycling through
            scenic routes, and basically all winter sports, especially
            snowboarding. In summer, I rather go for stand-up paddleboarding,
            it&apos;s a perfect balance between relaxation and fun. But
            seriously, being in touch with nature certainly makes great
            differences, inspiring and refreshing every second.
          </Text>
        </div>
        <div className={"md:flex hidden w-[50%] items-center justify-center"}>
          <div className={"rounded-md bg-custom-gradient"}>
            <Image
              src={MyPhoto}
              alt={"my photo"}
              className={"w-[30rem] h-auto rounded-md z-50 relative"}
            />
          </div>
        </div>
      </div>
      <MyExperience />
      <SparklesCTASection
        title={"Let's connect and make something truly amazing!"}
        className={"md:mt-20 mt-10"}
      />
    </main>
  );
};

export default AboutMePage;
