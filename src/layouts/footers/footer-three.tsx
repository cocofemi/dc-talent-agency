
import React from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow } from '@/components/svg';
import Link from 'next/link';

export default function FooterThree() {
  return (
    <footer>

      <div className="tp-footer-4-area black-bg pt-70 pb-120" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p>Have a project in mind? <br /> Let’s work together!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link className="tp-btn-white-lg" href="/contact">{"Let's"} Talk!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-2-area black-bg pb-20" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={logo} alt="" />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>Drop us a line sed id semper <br /> risus in hend rerit.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog-modern">Blog</a></li>
                    <li><a href="/portfolio-standard">Portfolio</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span><a href="https://maps.app.goo.gl/AqpshFg7PyhrRQYt8" target="_blank"> 2000 S Michigan Ave, Chicago IL, 60616 </a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="tel:+725214456">P: +1 773 809 7774</a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="mailto:contact@liko.com">E: hello@lagoslabs.dev</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">Subscribe to our newsletter</h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>All rights reserved — {new Date().getFullYear()} © Lagos Labs</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="https://www.linkedin.com/company/lagos-labs">Linkedin</a>
                <a className="mb-10" href="https://www.twitter.com/lagoslabs">Twitter</a>
                <a className="mb-10" href="https://instagram.com/lagoslabs">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
