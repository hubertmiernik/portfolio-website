import React from "react";
import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import { FlipWords } from "@/src/components/ui/FlipWords";
import Button from "@/src/components/common/Button";
import Link from "next/link";
import Text from "@/src/components/common/Text";

const HeroSection = () => {
  return (
    <div className={"flex flex-col items-center section-without-text relative"}>
      <Text type={"body"} className={"text-center uppercase tracking-widest"}>
        Turning Visions into Reality
      </Text>
      <TextGenerateEffect
        className={"text-center my-2 max-w-[70rem]"}
        words={"Crafting Intuitive Digital Solutions for a Modern World"}
        type={"hero"}
        croppedWord={5}
      />

      <FlipWords words={[`Hi, I'm Hubert. Frontend Developer from Cracow.`]} />
      <Link href={"/contact"}>
        <div data-aos={"zoom-in"}>
          <Button text={"Contact me"} className={"mt-6"} />
        </div>
      </Link>

      <div className="h-screen w-full bg-backgroundPrimary bg-grid-white/[0.02] absolute -top-[0rem] left-0 flex items-center justify-center -z-10">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-backgroundPrimary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </div>
  );
};

export default HeroSection;
