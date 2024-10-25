import React from "react";
import Button from "@/src/components/common/Button";
import { Sparkles } from "@/src/components/ui/Sparkles";
import Link from "next/link";
import SparklesCTASection from "@/src/components/ui/SparklesCTASection";

const BottomContactSection = () => (
  <SparklesCTASection
    title={"Ready to boost your online impact?"}
    description={
      "Connect with me now, and let's talk about how I can help you meet your goals."
    }
    className={"md:mt-20 mt-10"}
  />
);

export default BottomContactSection;
