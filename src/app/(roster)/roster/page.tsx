import React from "react";
import { Metadata } from "next";
import RosterMain from "@/pages/roster/roster-main";

export const metadata: Metadata = {
  title: "DC Talent Agency - Roster",
};

const Roster = () => {
  return <RosterMain />;
};

export default Roster;
