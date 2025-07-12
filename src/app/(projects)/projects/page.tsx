import React from "react";
import { Metadata } from "next";
import ProjectsMain from "@/pages/projects/projects-main";

export const metadata: Metadata = {
  title: "DC Talent Agency - Project Page",
};

const Roster = () => {
  return <ProjectsMain />;
};

export default Roster;
