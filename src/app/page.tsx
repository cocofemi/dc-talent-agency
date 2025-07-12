import { Metadata } from "next";
import HomePage from "./(home)/home/page";

export const metadata: Metadata = {
  title: "DC Talent Agency - Home Page",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
