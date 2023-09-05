import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "./components/navbar";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Elevation Fitness Gym | Open-Air Gym in Davao",
  description:
    "We offer the most affordable gym membership in Davao City. Get access to an open-air gym facility and quality cardio and strength equipments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_condensed.className}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
