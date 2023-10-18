"use client";

import { useEffect, useState } from "react";
import styles from "./features.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Button from "@/app/components/button";

export default function Feature({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: StaticImageData;
  url: string;
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
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full flex items-center">
          <div className="mx-8 lg:ml-28 lg:mr-16 w-full">
            <Image
              src={image}
              alt={name}
              className="absolute z-10 top-0 left-0 w-full h-full object-cover object-top"
            ></Image>
            <div
              className={`absolute z-20 top-0 left-0 w-full h-full bg-base-100 bg-opacity-50 lg:bg-primary ${
                hovered ? "lg:bg-opacity-75" : "lg:bg-opacity-0"
              }`}
            ></div>
            <h2
              className={`relative z-30 mb-2 text-4xl font-bold uppercase ${
                hovered ? "lg:text-2xl" : ""
              }`}
            >
              {name}
            </h2>
            <p className={`relative z-30 mb-6 ${hovered ? "" : "lg:hidden"}`}>
              {description}
            </p>
            <div
              className={`relative z-30 flex justify-end lg:justify-center ${
                hovered ? "" : "lg:hidden"
              }`}
            >
              <Link href={url}>
                <Button type="secondary">Find out more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
