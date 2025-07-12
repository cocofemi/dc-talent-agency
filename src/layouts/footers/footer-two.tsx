import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/dc-logo.jpeg";
import { Facebook, Instagram, Linkdin, Twitter } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({
  whiteFooter = false,
  topCls = "footer-top",
}: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {/* <div className="tp-footer-2-widget-text">
                  <p>
                    Drop us a line sed id semper <br /> risus in hend rerit.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/roster">Roster</a>
                    </li>
                    <li>
                      <a href="/projects">Projects</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/about-us">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                      href="https://maps.app.goo.gl/AqpshFg7PyhrRQYt8"
                      target="_blank"
                    >
                      Lagos | London | Nyc | Calgary
                    </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+17738097774">Tel: +447377756301</a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:hello@lagoslabs.dev">
                      Email: Info@dctalentagency.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © DC Talent
                  Agency
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a
                  className="mb-10"
                  href="https://www.linkedin.com/company/dc-talent-agency"
                >
                  <Linkdin />
                </a>
                <a className="mb-10" href="https://twitter.com/DCTAgency">
                  <Twitter />
                </a>
                <a
                  className="mb-10"
                  href="https://www.instagram.com/dctalent/?hl=en"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
