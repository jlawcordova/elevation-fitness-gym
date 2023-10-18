"use client";

import Feature from "./feature";
import styles from "./features.module.css";

import openAirFeature from "./images/open-air-feature.png";
import affordableFeature from "./images/affordable-feature.png";
import yearlyFeature from "./images/yearly-feature.png";

const features = [
  {
    name: "Elevate in the Open",
    description:
      "Who said you can't enjoy the breeze while you're breaking a sweat? Step into our open-air gym equipped with modern fitness gear.",
    image: openAirFeature,
    url: "feature/open",
  },
  {
    name: "Affordable Fitness",
    description:
      "Elevation Fitness Gym promises affordable fitness for all - the gym newbie or the seasoned fitness enthusiast.",
    image: affordableFeature,
    url: "feature/affordable",
  },
  {
    name: "Yearly Gains at Daily Prices",
    description:
      "Maximize your gains with our cost-effective yearly memberships. Train consistently, save effectively.",
    image: yearlyFeature,
    url: "feature/yearly",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <div
        className={`${styles.featuresSection} py-4 lg:py-16 lg:flex lg:flex-row justify-center bg-cover bg-left-top`}
      >
        {features.map((feature, index) => (
          <Feature key={index} {...feature}></Feature>
        ))}
      </div>
    </>
  );
}
