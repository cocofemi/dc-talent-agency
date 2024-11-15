import React from "react";
import { Metadata } from "next";
import PricingMain from "@/pages/pricing/pricing-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Pricing page",
};

const PricingPage = () => {
  return (
    <PricingMain/>
  );
};

export default PricingPage;
