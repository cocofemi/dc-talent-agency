import React from "react";
import { Metadata } from "next";
import ShopMain from "@/pages/shop/shop-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Shop page",
};

const ShopPage = () => {
  return (
    <ShopMain/>
  );
};

export default ShopPage;
