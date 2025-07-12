import React from "react";
import { Metadata } from "next";
import ServicesMain from "@/pages/services/services";

export const metadata: Metadata = {
  title: "DC Talent Agency - Services",
};

const ServicePage = () => {
  return <ServicesMain />;
};

export default ServicePage;
