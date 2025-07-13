"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function CookieConsentBanner() {
  return (
    <>
      <Script
        src={`https://cookiechimp.com/widget/${process.env.NEXT_COOKIE_CHIMP_ID}.js`}
        strategy="beforeInteractive"
        id="cookiechimp-script"
      ></Script>
    </>
  );
}
