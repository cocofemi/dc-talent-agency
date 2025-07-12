import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/roster/pheelz.avif",
    category: "Artist",
    genre: "Afrobeats Singer",
    representation: "Talent Management and Booking",
    title: "PHEELZ",
    show: "cat2 ",
  },
  {
    id: 2,
    img: "/assets/img/roster/txc.avif",
    category: "Artist",
    title: "TxC",
    show: "cat2  ",
  },
  {
    id: 3,
    img: "/assets/img/roster/kahlo.avif",
    category: "Artist",
    title: "KAH-LO",
    show: " cat2 ",
  },
  {
    id: 4,
    img: "/assets/img/roster/uncle_waffles.avif",
    category: "Artist",
    title: "UNCLE WAFFLES",
    show: "cat2 ",
  },
  {
    id: 5,
    img: "/assets/img/roster/Pabi_Cooper.avif",
    category: "Artist",
    title: "PABI COOPER",
    year: "2024",
    show: "cat2",
  },
  {
    id: 6,
    img: "/assets/img/roster/Chulumanco_Mbete.avif",
    category: "Creator",
    title: "CHUMIIE",
    show: "cat1 ",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function RosterDetails({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
                <button data-filter="*" className="active">
                  <span>SHOW ALL</span>
                </button>
                <button data-filter=".cat2">
                  <span>ARTISTS</span>
                </button>
                <button data-filter=".cat1">
                  <span>CREATORS</span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div
                className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <Link
                  href={{
                    pathname: "/roster-details",
                    query: {
                      id: item.id,
                    },
                  }}
                  //as={`/portfolio-details-1`}
                  className="cursor-hide"
                >
                  <Image
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    width={style_2 ? 573 : 486}
                    height={style_2 ? 683 : 576}
                    style={{ height: "100%" }}
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
