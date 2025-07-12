import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog-modern";
import { getSortedArticles } from "../../../../lib/articles";

export const metadata: Metadata = {
  title: "Lagos Labs - Blog Modern page",
};

const BlogModernPage = () => {
  const articles = getSortedArticles();
  return <BlogModernMain articles={articles} />;
};

export default BlogModernPage;
