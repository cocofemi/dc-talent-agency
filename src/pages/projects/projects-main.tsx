"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import ProjectGrid from "@/components/projects/projects-grid";

const ProjectsMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      imageRevealAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper showBackToTop={false}>
      {/* magic cursor start */}
      {/* <div id="magic-cursor">
        <div id="ball"></div>
      </div> */}
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">DC Talent Agency</span>
                      <h4 className="tm-hero-title fs-220 tp-char-animation">
                        Our Projects
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        Explore our most recent projects that showcase our
                        expertise and creativity. We have worked on a variety of
                        projects, from tours and events to marketing campaigns
                        and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectGrid />
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsMain;
