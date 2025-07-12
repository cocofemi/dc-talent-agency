import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import BlogDetailsTwoMain from "@/pages/blog/blog-details-2";
import { getArticleId } from "../../../../../lib/articles";

export const metadata: Metadata = {
  title: "DC Talent Agency - Blog Details",
};

export default async function BlogDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = await getArticleId(params.slug);

  console.log("articleData", articleData);
  return articleData ? (
    // <BlogDetailsMain blog={blog} />
    <BlogDetailsTwoMain articleData={articleData} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.slug}
    </div>
  );
}
