import React from "react";
import { Metadata } from "next";
import PortfolioMasonryMain from "@/pages/portfolio/portfolio-masonry-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Portfolio Masonry page",
};

const PortfolioMasonryPage = () => {
  return (
    <PortfolioMasonryMain/>
  );
};

export default PortfolioMasonryPage;
