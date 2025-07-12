"use client";

import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import { useSearchParams } from "next/navigation";

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

import roster_data from "@/data/roster";
import { useChatbot } from "../../../components/context/chatbot-context";

// images
import port_d_1 from "@/assets/img/inner-project/portfolio-details/port-details-1.jpg";
import BigText from "@/components/big-text";

// const port_images = [port_d_1];

const RosterDetails = () => {
  const chatbotContext = useChatbot();
  const setShowChatbot = chatbotContext?.setShowChatbot;
  const searchParams = useSearchParams();

  const id = searchParams?.get("id");

  const item = roster_data.find((entry) => entry.id === Number(id));

  const [showSocial, setShowSocial] = React.useState(false);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper showBackToTop={false}>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border" />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <div className="project-details-1-area project-details-1-pt">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-xl-7">
                    <div className="project-details-1-left">
                      <div className="project-details-1-thumb mb-10">
                        <Image
                          src={item?.img || port_d_1}
                          alt={`${item?.title}-image`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="project-details-1-right-wrap">
                      <div className="project-details-1-right p-relative">
                        <div className="project-details-1-title-box">
                          <span className="project-details-1-subtitle">
                            {/* <i>01</i>Shooting */}
                          </span>
                          <h4 className="project-details-1-title">
                            {item?.title}
                          </h4>
                          <p>{item?.description}</p>
                        </div>
                        <div className="project-details-1-info-wrap">
                          <div className="project-details-1-info">
                            <div className="d-flex gap-2 me-2">
                              <a
                                href={item?.socials?.[0]?.twitter}
                                target="_blank"
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  style={{
                                    borderRadius: "50%",
                                    border: "1px solid #000",
                                    padding: "4px",
                                  }}
                                >
                                  <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                              <a
                                href={item?.socials?.[0]?.instagram}
                                target="_blank"
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  style={{
                                    borderRadius: "50%",
                                    border: "1px solid #000",
                                    padding: "4px",
                                  }}
                                >
                                  <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                              <a
                                href={item?.socials?.[0]?.tiktok}
                                target="_blank"
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  style={{
                                    borderRadius: "50%",
                                    border: "1px solid #000",
                                    padding: "4px",
                                  }}
                                >
                                  <path
                                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                              <a
                                href={item?.socials?.[0]?.youtube}
                                target="_blank"
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  style={{
                                    borderRadius: "50%",
                                    border: "1px solid #000",
                                    padding: "4px",
                                  }}
                                >
                                  <path
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                              <a
                                href={item?.socials?.[0]?.spotify}
                                target="_blank"
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  style={{
                                    borderRadius: "50%",
                                    border: "1px solid #000",
                                    padding: "4px",
                                  }}
                                >
                                  <path
                                    d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                            </div>

                            <a
                              className="tp-btn-white background-black mt-20"
                              href="#"
                              onClick={(e) => {
                                setShowChatbot?.(true);
                                // setShowChatbot(true);
                              }}
                            >
                              {item?.category === "Creator"
                                ? "Partner"
                                : "Book Now"}
                            </a>
                          </div>
                          <div className="project-details-1-info">
                            <iframe
                              style={{ borderRadius: "12px" }}
                              src={item?.spotify}
                              width="100%"
                              height="252"
                              frameBorder="0"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              loading="lazy"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio details area */}
            <BigText />
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default RosterDetails;
