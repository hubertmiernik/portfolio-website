import BlogPostTile from "@/src/app/[locale]/blog/components/BlogPostTile";
import { TextGenerateEffect } from "@/src/components/ui/TextGenerateEffect";
import { blogPosts } from "@/src/app/[locale]/blog/content";
import BlogPostLink from "@/src/app/[locale]/blog/components/BlogPostLink";
import Text from "@/src/components/common/Text";

const BlogPage = () => {
  return (
    <main className="mx-auto sm:px-10 px-5 max-w-[1400px]">
      <TextGenerateEffect
        words={"Welcome to my blog"}
        className={"section-with-text md:mt-40 mt-24"}
        type={"title"}
      />
      <Text type={"bigBody"}>
        This page is a space where I share my insights, tutorials, and
        experiences across the diverse fields of IT, cutting-edge technology,
        and creative photography. Whether you&apos;re looking to enhance your
        technical skills, stay informed about the latest technological
        advancements, or explore the art of capturing stunning visuals,
        you&apos;ll find valuable content and inspiration here.
      </Text>
      <div
        data-aos={"fade-up"}
        className={
          "grid md:grid-cols-[1fr_1fr_1fr] auto-rows-[300px] gap-x-10 gap-y-10 mt-10"
        }
      >
        {blogPosts.map((post, index) => (
          <BlogPostLink
            href={`/blog/${post.slug}`}
            key={index}
            slug={post.slug}
            index={index}
          >
            <BlogPostTile
              index={index}
              key={index}
              title={post.title}
              description={post.description}
              coverImage={post.coverImage}
            />
          </BlogPostLink>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
