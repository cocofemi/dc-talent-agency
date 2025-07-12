import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import { getSortedArticles } from "../../../../../lib/articles";

export const metadata: Metadata = {
  title: "DC Talent Agency - Blog Details",
};

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const articles = getSortedArticles();

  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} articles={articles} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
