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
import BrandMainArea from "@/components/brand/brand-main-area";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { brandAnimation } from "@/utils/brand-anim";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import ServicesArea from "@/components/services/services-area";
import TeamOne from "@/components/team/team-one";

const BrandMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      brandAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
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
              {/* brand hero */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">
                          DC Talent Agency
                        </span>
                        <h4 className="tm-hero-title tp-char-animation">
                          About us
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, orbi egestas lacus ac suscipit ovallis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* brand hero */}

              {/* brand area */}
              {/* <BrandMainArea /> */}
              <FunFactOne />
              {/* brand area */}

              <ServicesArea />

              <section className="p-5">
                <div className="d-flex justify-content-around gap-2 row">
                  <h4 className="tm-hero-title tp-char-animation">Our Team</h4>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p>Lorem Ipsem</p>
                    <p>Founder/Ceo</p>
                  </div>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p>Lorem Ipsem</p>
                    <p>Founder/Ceo</p>
                  </div>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p>Lorem Ipsem</p>
                    <p>Founder/Ceo</p>
                  </div>
                </div>
              </section>

              <section className="p-5">
                <div className="d-flex justify-content-around row gap-2">
                  <h4 className="tm-hero-title tp-char-animation">
                    Contact Us
                  </h4>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p className="fw-bold fs-2">Location</p>
                    <p className="fw-bold">
                      <i className="fa-solid fa-location-dot me-1"></i>Lagos |
                      London | Nyc | Calgary
                    </p>
                  </div>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p className="fw-bold fs-2">Phone Number</p>
                    <p>
                      <i className="fa-solid fa-phone me-1"></i>+447377756301
                    </p>
                  </div>
                  <div className="col-xl-3 col-sm-12 shadow-sm p-3 mb-5 bg-white rounded">
                    <p className="fw-bold fs-2">Email</p>
                    <p>
                      <i className="fa-solid fa-envelope me-1"></i>
                      Info@dctalentagency.com
                    </p>
                  </div>
                </div>
              </section>

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

export default BrandMain;
