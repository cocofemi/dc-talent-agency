import React from "react";
import { Metadata } from "next";
import CheckoutMain from "@/pages/checkout/checkout-main";

export const metadata: Metadata = {
  title: "Lagos Labs - Checkout page",
};

const CheckoutPage = () => {
  return (
    <CheckoutMain/>
  );
};

export default CheckoutPage;
