"use client";

import UsingTechnologiesSwiper from "@/src/app/[locale]/home/components/UsingTechnologiesSwiper";
import Text from "@/src/components/common/Text";
const UsingTechnologies = () => {
  return (
    <div>
      <Text type={"title"} className={"text-center section-with-text"}>
        Using technologies
      </Text>
      <UsingTechnologiesSwiper />
      <a href="/technologies">
        <Text type={"caption"} className={"text-center mt-4 hover:opacity-70"}>
          See more on technologies page
        </Text>
      </a>
    </div>
  );
};

export default UsingTechnologies;
