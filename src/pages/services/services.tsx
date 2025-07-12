"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import ServicesArea from "@/components/services/services-area";

const ServicesMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
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
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* faq hero */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">
                          Dc Talent Agency
                        </span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Services
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          We offer a wide range of services to help you achieve
                          your goals. From talent management to booking,touring
                          and event planning, our team is dedicated to providing
                          exceptional service and support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* faq hero */}

              {/* services area */}
              <ServicesArea />
              {/* faq area */}

              {/* big text */}
              <BigText />
              {/* big text */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesMain;
