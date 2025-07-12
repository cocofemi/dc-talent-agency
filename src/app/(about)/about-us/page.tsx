import React from "react";
import { Metadata } from "next";
import AboutUs from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "Dc Talent Agency - About us",
};

const AboutUsPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
