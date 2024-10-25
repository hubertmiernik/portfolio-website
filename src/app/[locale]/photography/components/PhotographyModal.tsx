"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppSelector } from "@/src/hooks/reduxHooks";
import { EContent, modalContent } from "@/src/services/modalState/slice";
import { ModalBody, ModalContent } from "@/src/components/ui/Modal";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import Text from "@/src/components/common/Text";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  getContent,
  getImages,
  getRotate,
  getTitle,
} from "@/src/app/[locale]/photography/utils";

export const PhotographyModal = () => {
  const content = useAppSelector(modalContent);

  const { isMd } = useBreakpoint("md");

  if (!content) return null;

  return (
    <PhotoProvider>
      <div className="flex items-center justify-center">
        <ModalBody>
          <ModalContent>
            <Text
              type={"subtitle"}
              className={"text-center mb-4 font-semibold"}
            >
              {getTitle(content)}
            </Text>
            {isMd && (
              <div className="flex justify-center items-center">
                {getImages(content).map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: getRotate(idx),
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 border-white border bg-white flex-shrink-0 overflow-hidden cursor-pointer"
                  >
                    <PhotoView key={idx} src={image}>
                      <Image
                        src={image}
                        alt="image"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    </PhotoView>
                  </motion.div>
                ))}
              </div>
            )}
            <Text type="body" className={"mt-8"}>
              {getContent(content)}
            </Text>
          </ModalContent>
        </ModalBody>
      </div>
    </PhotoProvider>
  );
};
