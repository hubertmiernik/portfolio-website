"use client";

import React from "react";
import Link from "next/link";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";

type LinkWrapperProps = {
  children?: React.ReactNode;
  slug: string;
  index: number;
  href: string;
};

const BlogPostLink = ({ children, slug, index, href }: LinkWrapperProps) => {
  const { isXl } = useBreakpoint("xl");

  return (
    <Link
      href={href}
      key={index}
      className={index === 0 || !isXl ? "col-span-2" : ""}
    >
      {children}
    </Link>
  );
};

export default BlogPostLink;
