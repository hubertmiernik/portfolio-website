"use client";

import { blogPosts } from "@/src/app/[locale]/blog/content";
import Link from "next/link";
import BlogPostTileSmallVersion from "@/src/app/[locale]/blog/components/BlogPostTileSmallVersion";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import Text from "@/src/components/common/Text";

type BlogPostSeeMoreProps = {
  slug: string;
};

const BlogPostSeeMore = ({ slug }: BlogPostSeeMoreProps) => {
  const { isMd } = useBreakpoint("md");

  return (
    <div
      data-aos={isMd && "fade-left"}
      className={"w-[20rem] h-full sticky top-[9.5rem]"}
    >
      <Text type={"bigBody"} className={"font-medium mb-4"}>
        See more posts:
      </Text>

      <div className={"flex flex-col gap-4"}>
        {blogPosts
          .filter((post) => post.slug !== slug)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <BlogPostTileSmallVersion
                title={post.title}
                coverImage={post.coverImage}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogPostSeeMore;
