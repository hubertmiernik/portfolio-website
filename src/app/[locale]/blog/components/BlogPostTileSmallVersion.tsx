"use client";

import { cn } from "@/src/utils/cn";
import Text from "@/src/components/common/Text";
import Image from "next/image";

type BlogPostTileProps = {
  title: string;
  className?: string;
  coverImage: string;
};

const BlogPostTileSmallVersion = ({
  title,
  className,
  coverImage,
}: BlogPostTileProps) => {
  return (
    <div
      className={cn(
        "card h-[10rem] cursor-pointer overflow-auto relative flex justify-end flex-col hover:opacity-80 transition-opacity duration-300",
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
        <div>
          <div>
            <Text type="body" className={`font-semibold mb-1`}>
              {title}
            </Text>
          </div>
          <div className={"flex justify-between items-center"}>
            <Text type={"body"} className={`font-semibold hover:opacity-80`}>
              READ MORE
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTileSmallVersion;
