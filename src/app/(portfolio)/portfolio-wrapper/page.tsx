import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/pages/portfolio/portfolio-wrapper-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Portfolio Wrapper page",
};

const PortfolioWrapperPage = () => {
  return (
    <PortfolioWrapperMain/>
  );
};

export default PortfolioWrapperPage;
