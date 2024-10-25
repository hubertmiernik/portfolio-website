"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

const GridImages = () => {
  const images = [
    `/photos/39.jpeg`,
    `/photos/9.jpeg`,
    `/photos/47.jpeg`,
    `/photos/44.jpeg`,
    `/photos/52.jpeg`,
  ];

  const getRotate = (index: number) => {
    switch (index) {
      case 0:
        return 6.2;
      case 1:
        return -5.85;
      case 2:
        return 5.0;
      case 3:
        return -4.71;
      case 4:
        return 5.9;
    }
  };

  return (
    <PhotoProvider>
      <div className="flex justify-center items-center absolute md:bottom-[14rem] bottom-[1rem] md:left-[2rem] left-[1.25rem]">
        {images.map((image, idx) => (
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
            className="cursor-pointer rounded-xl md:-mr-8 -mr-2 mt-4 border-white border bg-white flex-shrink-0 overflow-hidden hover:border-textPrimary hover:secondary-shadow"
          >
            <PhotoView key={idx} src={image}>
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg md:h-[10rem] md:w-[10rem] h-[4rem] w-[4rem] object-cover flex-shrink-0"
              />
            </PhotoView>
          </motion.div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default GridImages;
