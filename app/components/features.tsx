"use client";

import { useState } from "react";
import Button from "./button";
import styles from "./features.module.css";

const features = [
  {
    name: "Elevate in the Open",
    description:
      "Who said you can't enjoy the breeze while you're breaking a sweat? Step into our open-air gym equipped with modern fitness gear.",
    image: "/feature/open-air-feature.png",
  },
  {
    name: "Affordable Fitness",
    description:
      "Elevation Fitness Gym promises affordable fitness for all - the gym newbie or the seasoned fitness enthusiast.",
    image: "/feature/affordable-feature.png",
  },
  {
    name: "Yearly Gains at Daily Prices",
    description:
      "Maximize your gains with our cost-effective yearly memberships. Train consistently, save effectively.",
    image: "/feature/yearly-feature.png",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <div
        className={`${styles.featuresSection} lg:py-16 lg:flex lg:flex-row justify-center bg-cover bg-left-top`}
      >
        {features.map((feature, index) => (
          <Feature key={index} {...feature}></Feature>
        ))}
      </div>
    </>
  );
}

function Feature({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={`${styles.featureMask} m-4 lg:-ml-16 first:lg:ml-0 h-[320px] lg:w-[380px] lg:h-[340px] bg-cover bg-no-repeat cursor-pointer hover:scale-110`}
        style={{ backgroundImage: `url(${image})` }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-primary bg-opacity-0 flex items-center hover:bg-opacity-75">
          <div className="mx-8 lg:ml-28 lg:mr-16">
            <h2
              className={`mb-2 text-4xl font-bold uppercase ${
                hovered ? "lg:text-2xl" : ""
              }`}
            >
              {name}
            </h2>
            <p className={`mb-6 ${hovered ? "" : "lg:hidden"}`}>
              {description}
            </p>
            <div
              className={`flex justify-end lg:justify-center ${
                hovered ? "" : "lg:hidden"
              }`}
            >
              <Button type="secondary">Find out more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
