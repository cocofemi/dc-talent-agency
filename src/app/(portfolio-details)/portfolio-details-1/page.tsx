import React, { Suspense } from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Portfolio Details 1 page",
};

const PortfolioDetailsOnePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioDetailsOneMain />
    </Suspense>
  );
};

export default PortfolioDetailsOnePage;
