"use client";

import Button from "@/app/components/button";
import styles from "./features.module.css";
import { useEffect, useState } from "react";

export default function Feature({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  // Ignore hover on smaller (md breakpoint) screens.
  // Check window availability to avoid getting triggered on server.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleMouseOver = () => {
    if (windowWidth !== undefined && windowWidth > 1024) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={`${styles.featureMask} m-8 lg:-ml-16 first:lg:ml-0 h-[320px] lg:w-[380px] lg:h-[340px] bg-cover bg-no-repeat cursor-pointer lg:hover:scale-110`}
        style={{ backgroundImage: `url(${image})` }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-base-100 bg-opacity-50 flex items-center lg:bg-primary lg:bg-opacity-0 lg:hover:bg-opacity-75">
          <div className="mx-8 lg:ml-28 lg:mr-16 w-full">
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
