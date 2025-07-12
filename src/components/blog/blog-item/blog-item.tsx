import React from "react";
import Image from "next/image";
import { IArticleDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItem({ item }: { item: IArticleDT }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        <img src={item.cover!} alt="blog-img" style={{ height: "300px" }} />
        <div className="tp-blog-meta">
          <span>{item.date}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span>{item.category}</span>
        <h4 className="tp-blog-title-sm">
          <Link href={`/blog-detail/${item.id}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
