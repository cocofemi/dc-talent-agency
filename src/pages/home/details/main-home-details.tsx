import React from "react";
import Image from "next/image";
import { scroller } from "react-scroll";
import details_thumb_1 from "@/assets/img/inner-project/showcase/showcase-details-3.avif";
import details_thumb_2 from "@/assets/img/inner-project/showcase/showcase-details-5.avif";
import details_thumb_3 from "@/assets/img/inner-project/showcase/showcase-details-4.avif";

export default function MainHomeDetails() {
  const scrollTo = () => {
    scroller.scrollTo("xyz", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      {/* details area */}
      <div className="tp-showcase-details-area">
        <div>
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              className="background-video"
              style={{ pointerEvents: "none" }}
            >
              <source
                src="https://video.wixstatic.com/video/eb868b_1a0cc7f542df4fd6b4dcbf3209d41dcd/1080p/mp4/file.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <h1>DC Talent Agency</h1>
              <h4 className="port-showcase-slider-title tp-char-animation">
                The Future Of African Creatives
              </h4>
            </div>
          </div>

          {/* <div className="tp-showcase-details-scroll smooth">
            <a onClick={scrollTo} className="pointer">
              <i className="fa-sharp fa-light fa-angle-down"></i>
              Scroll or drag to navigate
            </a>
          </div>
          <div className="port-showcase-slider-social tp-hover-btn-wrapper">
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              Fb
            </a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              In
            </a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              Be
            </a>
          </div> */}
          {/* <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-showcase-details-content text-center">
                  <span className="port-showcase-slider-subtitle tp_title_anim">
                    [ UI, Web Design ]
                  </span>
                  <h4 className="port-showcase-slider-title tp-char-animation">
                    Top Paddocks
                  </h4>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* details area */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle fs-40 tp-char-animation">
                  Who we are
                </span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim">
                  DC talent agency is an international entertainment agency
                  representing a diverse range of African creatives, including
                  actors, models, musicians, and influencers. Our mission is to
                  connect African talent with global opportunities, showcasing
                  the richness and diversity of African culture to the world.
                </p>
                {/* <div className="showcase-details-overview-info">
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Client</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>LikoTheme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Services</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>UI / UX Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Location</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Release Date</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>October {"'2024"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}

      {/* details thumb */}
      <div className="showcase-details-thumb-wrap pb-40">
        <div className="container container-1430">
          <div className="row gx-80">
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-thumb mb-80">
                <Image
                  data-speed=".8"
                  src={details_thumb_1}
                  alt="details-thumb"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-thumb mb-80">
                <Image
                  data-speed=".8"
                  src={details_thumb_2}
                  alt="details-thumb"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            {/* <div className="col-xl-12">
              <div className="showcase-details-thumb mb-80">
                <Image
                  data-speed=".8"
                  src={details_thumb_3}
                  alt="details-thumb"
                  style={{ height: "auto" }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details overview */}
      <div className="showcase-details-overview pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle fs-40 tp-char-animation">
                  What we do
                </span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right tp_title_anim">
                <p>
                  At DC Talent Agency, we go beyond booking and managing Talent.
                  We strive to create an infrastructure to support our clients’
                  dreams. Through our services, we create career-defining
                  opportunities, on a global scale, for artists, influencers,
                  and creatives on our roster. Our clients have amassed over 1
                  billion digital streams and have connected with millions of
                  live audiences around the world. We pride ourselves in
                  crossing borders, connecting cultures, and maintaining a
                  distinct approach to talent bookings and management. With this
                  approach, we have built a track record of discovering and
                  developing award-winning entertainers globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-details-thumb-wrap pb-40">
        <div className="container container-1430">
          <div className="row gx-80">
            <div className="col-xl-12">
              <div className="showcase-details-thumb mb-80">
                <Image
                  data-speed=".8"
                  src={details_thumb_3}
                  alt="details-thumb"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* details overview */}
    </>
  );
}
