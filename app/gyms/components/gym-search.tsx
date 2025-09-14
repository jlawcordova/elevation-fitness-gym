"use client";

import { useState } from "react";
import { GymList } from "./gym-list";
import Gym from "../../lib/gym.interface";
import GymMap from "./gym-map";
import GymCard from "./gym-card";
import { MapIcon, ListBulletIcon } from "@heroicons/react/24/solid";

export default function GymSearch({ gyms }: { gyms: Gym[] }) {
  const [selectedGym, setSelectedGym] = useState<Gym | undefined>(
    gyms.length > 0 ? gyms[0] : undefined,
  );
  const [showMap, setShowMap] = useState(false);

  function handleGymSelect(gym: Gym) {
    setSelectedGym(gym);
  }

  return (
    <div className="md:grid lg:grid-cols-12 lg:gap-4">
      <div className="hidden z-10 bg-gradient-to-b from-base-200 lg:block lg:row-start-1 lg:col-start-1 lg:col-span-12 h-32"></div>
      <div className="pt-8 mx-4 mb-6 z-20 lg:max-h-0 lg:order-2 lg:row-start-1 lg:col-start-6 lg:col-span-6">
        <h1 className="text-4xl font-bold mb-2">Time to elevate your fitness.</h1>
        <p>Choose a gym near you to view available membership options.</p>
        <div className="flex justify-end gap-2 mt-4 lg:hidden">
          <button
            aria-label="List view"
            className={`btn btn-sm btn-square rounded-none ${showMap ? "btn-ghost" : "btn-primary"}`}
            onClick={() => setShowMap(false)}
          >
            <ListBulletIcon className="w-5 h-5" />
          </button>
          <button
            aria-label="Map view"
            className={`btn btn-sm btn-square rounded-none ${showMap ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setShowMap(true)}
          >
            <MapIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        className={`z-10 overflow-auto lg:max-h-[calc(100vh-4rem)] lg:row-start-1 lg:col-start-1 lg:w-[24rem] ${
          showMap ? "hidden lg:block" : ""
        }`}
      >
        <GymList gyms={gyms} selectedGym={selectedGym} onGymSelect={handleGymSelect} />
      </div>
      <div
        className={`${showMap ? "" : "hidden lg:block"} relative lg:row-start-1 lg:col-start-1 lg:col-span-12`}
      >
        {showMap && selectedGym && (
          <div className="lg:hidden absolute top-0 left-0 right-0 z-10">
            <GymCard gym={selectedGym} selected onSelect={handleGymSelect} />
          </div>
        )}
        <GymMap gyms={gyms} selectedGym={selectedGym} onGymSelect={handleGymSelect}></GymMap>
      </div>
    </div>
  );
}
