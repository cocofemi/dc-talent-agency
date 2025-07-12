import React from "react";
import { Metadata } from "next";
import BudgetAssistantForm from "@/pages/budget-assistant/budget-assistant";

export const metadata: Metadata = {
  title: "Dc Talent Agency - Budget Assistant",
};

const BudgetAssistant = () => {
  return <BudgetAssistantForm />;
};

export default BudgetAssistant;
