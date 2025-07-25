import React from "react";
import { Facebook, Instagram, Linkdin, Twitter, Youtube } from "../svg";

const social_data = [
  {
    id: 1,
    icon: <Linkdin />,
    link: "https://www.linkedin.com/company/dc-talent-agency/",
  },
  {
    id: 2,
    icon: <Twitter />,
    link: "https://twitter.com/DCTAgency",
  },
  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/dctalent/?hl=en",
  },
  // {
  //   id: 4,
  //   icon: <Youtube />,
  //   link: "https://www.youtube.com/@LagosLabs",
  // },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
