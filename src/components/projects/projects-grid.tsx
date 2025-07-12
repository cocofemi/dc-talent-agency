import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

import projects_data from "@/data/projects-data";

export default function ProjectGrid() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".cat2">
                <span>Brand Partnerships</span>
              </button>
              <button data-filter=".cat3">
                <span>Music Campaigns</span>
              </button>
              <button data-filter=".cat4">
                <span>Digital Campaigns </span>
              </button>
              <button data-filter=".cat5">
                <span>Tours</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row grid" ref={isotopContainer}>
          {projects_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-3 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div
                className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative"
                data-cursor="View<br>Demo"
              >
                <Link href="#" className="cursor-hide">
                  <Image
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    style={{ height: "350px" }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span
                      style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)" }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <h4
                      style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)" }}
                      className="tp-project-5-2-title-sm"
                    >
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
