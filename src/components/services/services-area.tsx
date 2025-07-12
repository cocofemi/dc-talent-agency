import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import services from "@/assets/img/services/services.jpg";
import ServiceItem from "./service-item";

// type
type IFaq = {
  id: number;
  question: string;
  answer: string;
};
// faq data
export const faq_data: IFaq[] = [
  {
    id: 1,
    question: "Talent Management",
    answer: `We offer cover a wide range of talent management services to help artists, performers, and entertainers achieve their goals. Our team provides personalized support, including career development, contract negotiations, and brand management. We work closely with our talents to create a tailored strategy that aligns with their vision and aspirations.`,
  },
  {
    id: 2,
    question: "Bookings",
    answer:
      "As an agency we help to source and secure bookings for our talents. We handle all aspects of the booking process, including negotiations, contracts, and logistics. Our team works closely with clients to ensure a smooth and successful booking experience.",
  },
  {
    id: 3,
    question: "Marketing",
    answer:
      "We provide comprehensive marketing services to help our talents build their brand and reach their target audience. Our marketing strategies include social media management, content creation, public relations, and promotional campaigns. We work closely with our talents to develop a personalized marketing plan that aligns with their goals and objectives.",
  },
  {
    id: 4,
    question: "Tour Management",
    answer:
      "We offer tour management services to ensure that our talents' tours run smoothly and efficiently. Our team handles all aspects of tour logistics, including scheduling, immigration, transportation, accommodations, and on-site coordination. We work closely with our talents to create a seamless touring experience that allows them to focus on their performance.",
  },
];

export default function ServicesArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <ServiceItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={services}
                  alt="faq-banner"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
