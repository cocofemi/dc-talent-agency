import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "Lagos Labs - Service Details page",
};

const ServiceDetailsPage = () => {
  return (
    <ServiceDetailsMain/>
  );
};

export default ServiceDetailsPage;
