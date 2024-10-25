"use client";

import { cn } from "@/src/utils/cn";
import Text from "@/src/components/common/Text";
import Image from "next/image";

type BlogPostTileProps = {
  title: string;
  description: string;
  index?: number;
  dataAosDelay?: number;
  className?: string;
  coverImage: string;
};

const BlogPostTile = ({
  title,
  description,
  className,
  index,
  coverImage,
}: BlogPostTileProps) => {
  return (
    <div
      className={cn(
        "card h-full cursor-pointer overflow-auto relative flex justify-end flex-col hover:opacity-80 transition-opacity duration-300",
        className,
      )}
    >
      <Image
        src={coverImage}
        className={"h-full w-full object-cover absolute"}
        alt={"post graphic"}
        width={500}
        height={500}
      />
      <div
        className={
          "p-4 text-white z-50 relative bg-[#010319] bg-opacity-20 backdrop-blur-md border border-white/[0.1]"
        }
      >
        <div className={""}>
          <div>
            <Text
              type={index === 0 ? "bigBody" : "body"}
              className={"font-semibold mb-1"}
            >
              {title}
            </Text>
            <Text type={index === 0 ? "body" : "smallBody"} className={""}>
              {description}
            </Text>
          </div>
          <div className={"flex justify-end pt-1"}>
            {/*<Text type={index === 0 ? "body" : "smallBody"} className={"mt-2"}>*/}
            {/*  22 min read*/}
            {/*</Text>*/}
            <Text
              type={index === 0 ? "body" : "smallBody"}
              className={"font-semibold hover:opacity-80"}
            >
              READ MORE
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTile;
