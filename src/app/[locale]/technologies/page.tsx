import React from "react";
import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import { TracingBeamTechnologies } from "@/src/components/ui/TechnologiesBeam";
import Text from "@/src/components/common/Text";
import SparklesCTASection from "@/src/components/ui/SparklesCTASection";

const TechnologiesPage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[1400px] md:px-10 px-5 w-full mt-[5rem]">
        <div className={"flex justify-center"}>
          <div className={"text-center mb-10 flex flex-col justify-center"}>
            <TextGenerateEffect
              className={"mb-5"}
              words={"Technologies I use"}
              type={"title"}
            />
            <Text type={"bigBody"} className={"max-w-2xl"}>
              Discover the cutting-edge technologies that power my projects. As
              a passionate frontend developer, I leverage a diverse tech stack
              to create seamless, dynamic, and responsive web applications. Here
              are some of the key technologies and tools I specialize in:
            </Text>
          </div>
        </div>
        <TracingBeamTechnologies />
        <SparklesCTASection
          title={"Ready to collaborate?"}
          className={"md:mx-0 mx-[-4rem]"}
        />
      </div>
    </main>
  );
};
export default TechnologiesPage;
