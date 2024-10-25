"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import { technologies } from "../../../../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import Text from "@/src/components/common/Text";

const UsingTechnologiesSwiper = () => (
  <Swiper
    modules={[Autoplay]}
    grabCursor
    spaceBetween={16}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    }}
    loop
    speed={8000}
    slidesPerView={"auto"}
    className={
      "!-mx-10 lg:!-mx-48 scroller relative z-20 !overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    }
  >
    {technologies.map((item) => (
      <SwiperSlide key={item.name} className={"!w-auto"}>
        <div
          className={
            "card md:w-[450px] w-[280px] md:h-[256px] h-[260px] max-w-full relative flex-shrink-0 px-8 py-6"
          }
        >
          <div>
            <div className={"flex items-center gap-2 mb-4"}>
              <Image
                src={item.icon}
                alt={"icon"}
                width={50}
                height={50}
                priority
              />
              <Text type="header" className={"font-medium"}>
                {item.name}
              </Text>
            </div>
            <Text type={"body"}>{item.description}</Text>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default UsingTechnologiesSwiper;
