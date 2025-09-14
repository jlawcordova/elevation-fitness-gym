"use client";

import Button from "@/app/components/button";
import styles from "./features.module.css";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function Feature({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: StaticImageData;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offset = rect.top * 0.2;
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        ref={containerRef}
        className={`${styles.featureMask} m-8 lg:-ml-16 first:lg:ml-0 h-[320px] lg:w-[380px] lg:h-[340px] bg-cover bg-no-repeat cursor-pointer lg:hover:scale-110`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full flex items-center">
          <div className="mx-8 lg:ml-28 lg:mr-16 w-full">
            <Image
              ref={imageRef}
              src={image}
              alt={name}
              className="absolute z-10 top-0 left-0 w-full h-full object-cover object-top"
              style={{ willChange: "transform", transform: "translateY(0px)" }}
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
              <Button type="secondary">Find out more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
