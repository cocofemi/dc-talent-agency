import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Lagos Labs - Home Main",
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
