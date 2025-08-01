"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import BlogDetailsRelatedPosts from "@/components/blog/details/blog-details-related-posts";
// animation
import { charAnimation } from "@/utils/title-animation";
import BlogDetailsAreaTwo from "@/components/blog/details/blog-details-area-2";
// image
import blog_bg from "@/assets/img/inner-blog/blog-details-without-sidebar/blog-details-3.jpg";
import { IArticleDT } from "@/types/blog-d-t";

type IProps = {
  articleData?: IArticleDT;
};

const BlogDetailsTwoMain = ({ articleData }: IProps) => {
  console.log(articleData);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper showBackToTop={false}>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <div className="blog-details-area blog-details-without-sidebar">
              <div className="blog-details-without-sidebar p-relative d-flex align-items-end pt-170">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="blog-details-content z-index-5">
                        <span className="blog-details-meta text-black">
                          {articleData?.category}
                        </span>
                        <h4 className="blog-details-title tp-text-black tp-char-animation">
                          {articleData?.title}
                        </h4>
                        <p>{articleData?.date.toString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container container-1800">
                <div className="blog-details-thumb-wrap">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="blog-details-thumb">
                        <img
                          className=""
                          data-speed=".8"
                          src={articleData?.cover || blog_bg.src}
                          alt="blog_bg"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="postbox__area tp-blog-sidebar-sticky-area pt-40">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="postbox__wrapper">
                      <div className="row justify-content-center">
                        <div className="col-xl-8">
                          <div className="blog-details-top-text tp_fade_bottom">
                            <article
                              className="article"
                              dangerouslySetInnerHTML={{
                                __html: articleData?.contentHtml || "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* blog details hero */}

            {/* blog details area */}
            {/* <BlogDetailsAreaTwo /> */}
            {/* blog details area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsTwoMain;
