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
    <div className="md:grid md:grid-rows-1 md:grid-cols-8 lg:grid-cols-12 md:gap-4">
      <div className="pt-8 mx-4 mb-6 z-10 md:max-h-0 md:order-2 md:row-start-1 md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-6">
        <h1 className="text-4xl font-bold mb-2">
          Time to elevate your fitness.
        </h1>
        <p>Find a gym near you to view available membership options.</p>
      </div>
      <div className="z-10 overflow-auto md:max-h-[calc(100vh-4rem)] md:pt-8 md:row-start-1 md:col-start-1 md:w-[26rem]">
        <GymList
          gyms={gyms}
          selectedGym={selectedGym}
          onGymSelect={handleGymSelect}
        />
      </div>
      <div className="hidden md:block md:row-start-1 md:col-start-1 md:col-span-8 lg:col-start-1 lg:col-span-12">
        <GymMap
          gyms={gyms}
          selectedGym={selectedGym}
          onGymSelect={handleGymSelect}
        ></GymMap>
      </div>
    </div>
  );
}
