import React from "react";
import Image from "next/image";
import {
  Behance,
  CloseTwo,
  Dribble,
  Facebook,
  Instagram,
  InstagramTwo,
  Linkdin,
  Twitter,
  Youtube,
} from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import logo_3 from "@/assets/img/logo/dc-logo_2.jpeg";
import logo_2 from "@/assets/img/logo/dc-logo.jpeg";

import gallery_1 from "@/assets/img/roster/pheelz.avif";
import gallery_2 from "@/assets/img/roster/txc.avif";
import gallery_3 from "@/assets/img/roster/kahlo.avif";
import gallery_4 from "@/assets/img/roster/uncle_waffles.avif";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo_3} alt="logo" className="!w-[120px]" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">
                Welcome to DC Talent Agency
              </h3>
              <p>The future of african creatives </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:1245654">+447377756301</a>
                </li>
                <li>
                  <a href="hello@lagoslabs.dev">info@dctalentagency.com</a>
                </li>
                <li>
                  <a href="#">Lagos | London | Nyc | Calgary</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/dc-talent-agency/">
                    <Linkdin />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dctalent/?hl=en">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/DCTAgency">
                    {" "}
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
