import React, { Suspense } from "react";

import { Metadata } from "next";
import RosterDetails from "@/pages/roster/details/page";

export const metadata: Metadata = {
  title: "DC Talent Agency - Roster Details",
};

const Roster = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RosterDetails />
    </Suspense>
  );
};

export default Roster;
