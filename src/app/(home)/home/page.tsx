import React from "react";
import { Metadata } from "next";
import MainHome from "@/pages/home/main-home";

export const metadata: Metadata = {
  title: "DC Talent Agency - Home",
};

const HomePage = () => {
  return <MainHome />;
};

export default HomePage;
