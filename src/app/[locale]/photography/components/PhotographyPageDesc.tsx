"use client";

import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import React from "react";
import { useAppDispatch } from "@/src/hooks/reduxHooks";
import {
  EContent,
  showPhotographyModal,
} from "@/src/services/modalState/slice";
import { PhotographyModal } from "@/src/app/[locale]/photography/components/PhotographyModal";
import Text from "@/src/components/common/Text";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import PhotographyServicesButtonsMebile from "@/src/app/[locale]/photography/components/PhotographyServicesButtonsMebile";

const PhotographyPageDesc = () => {
  const dispatch = useAppDispatch();
  const { isMd } = useBreakpoint("md");

  const onClick = (content: EContent) =>
    dispatch(showPhotographyModal({ content }));

  const services = [
    {
      title: "Product Photography",
      content: EContent.PRODUCT,
    },
    {
      title: "Drone Photography",
      content: EContent.DRONE,
    },
    {
      title: "Commercial Photography",
      content: EContent.COMMERCIAL,
    },
  ];

  console.log("ismd", isMd);

  return (
    <>
      <TextGenerateEffect
        className={"font-semibold section-with-text"}
        words={"Photography Services"}
        type={"title"}
      />

      <div>
        <Text type="header" className={"font-semibold"}>
          Capturing Your Vision with Precision
        </Text>
        <Text type={"body"} className={"mb-10"}>
          As a photographer with a keen eye for detail and creativity, I offer a
          range of photography services to elevate your brand&apos;s visual
          presence. Whether you&apos;re looking for stunning product photos,
          captivating drone shots, or elegant images for your business cards and
          marketing materials, I am here to bring your vision to life.
        </Text>
        <Text type={"header"} className={"mb-4 font-semibold"}>
          Services Offered
        </Text>
        {isMd ? (
          <div
            className={
              "md:flex-row xl:flex-col flex-col xl:justify-start justify-between flex gap-2"
            }
          >
            {services.map((service) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={service.title}
                className={
                  "border-element text-center w-full mb-2 p-4 cursor-pointer"
                }
                onClick={() => onClick(service.content)}
              >
                <Text type={"bigBody"} className={"font-medium"}>
                  {service.title}
                </Text>
              </motion.button>
            ))}
          </div>
        ) : (
          <PhotographyServicesButtonsMebile services={services} />
        )}

        <PhotographyModal />
      </div>
    </>
  );
};

export default PhotographyPageDesc;
