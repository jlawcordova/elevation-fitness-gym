"use client";

import { useState } from "react";
import { GymList } from "./gym-list";
import Gym from "../lib/gym.interface";
import GymMap from "./gym-map";

export default function GymSearch({ gyms }: { gyms: Gym[] }) {
  const [selectedGym, setSelectedGym] = useState<Gym | undefined>(
    gyms.length > 0 ? gyms[0] : undefined,
  );

  function handleGymSelect(gym: Gym) {
    setSelectedGym(gym);
  }

  return (
    <div className="md:grid lg:grid-cols-12 lg:gap-4">
      <div className="pt-8 mx-4 mb-6 z-10 lg:max-h-0 lg:order-2 lg:row-start-1 lg:col-start-6 lg:col-span-6">
        <h1 className="text-4xl font-bold mb-2">
          Time to elevate your fitness.
        </h1>
        <p>Find a gym near you to view available membership options.</p>
      </div>
      <div className="z-10 overflow-auto lg:max-h-[calc(100vh-4rem)] lg:pt-8 lg:row-start-1 lg:col-start-1 lg:w-[26rem]">
        <GymList
          gyms={gyms}
          selectedGym={selectedGym}
          onGymSelect={handleGymSelect}
        />
      </div>
      <div className="hidden lg:block lg:row-start-1 lg:col-start-1 lg:col-span-12">
        <GymMap
          gyms={gyms}
          selectedGym={selectedGym}
          onGymSelect={handleGymSelect}
        ></GymMap>
      </div>
    </div>
  );
}
