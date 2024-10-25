import { blogPosts } from "@/src/app/[locale]/blog/content";
import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import BlogPostTileSmallVersion from "@/src/app/[locale]/blog/components/BlogPostTileSmallVersion";
import Link from "next/link";
import { Metadata } from "next";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import BlogPostSeeMore from "@/src/app/[locale]/blog/components/BlogPostSeeMore";
import Text from "@/src/components/common/Text";

type BlogPostProps = { params: { slug: string } };

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const slug = params.slug;
  const title = blogPosts.find((post) => post.slug === slug)?.title;
  return {
    title,
    description: "This is a blog post",
  };
}

const BlogPostPage = ({ params }: BlogPostProps) => {
  const { slug } = params;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) return;

  const { content, title, hashTags } = blogPost;

  return (
    <main className="mx-auto sm:px-10 px-5 max-w-[1400px]">
      <div className={"md:flex-row flex-col flex justify-between gap-10"}>
        <div className={"max-w-[900px]"}>
          <TextGenerateEffect
            words={title}
            className={"section-with-text font-semibold"}
            type={"title"}
          />
          <Text type={"bigBody"} className={"mb-8 font-medium"}>
            #{hashTags.join(" #")}
          </Text>
          {content}
        </div>

        <BlogPostSeeMore slug={slug} />
      </div>
    </main>
  );
};

export default BlogPostPage;
