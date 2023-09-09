"use client";

import { useState } from "react";
import { GymList } from "./gym-list";
import Gym from "../lib/gym.interface";

export default function GymSearch({ gyms }: { gyms: Gym[] }) {
  const [selectedGym, setSelectedGym] = useState<Gym | undefined>(
    gyms.length > 0 ? gyms[0] : undefined,
  );

  function handleGymSelect(gym: Gym) {
    setSelectedGym(gym);
  }

  return (
    <div className="mx-4 md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-4">
      <div className="mb-6 md:order-2 md:mt-4 md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-6">
        <h1 className="text-4xl font-bold mb-2">
          Time to elevate your fitness.
        </h1>
        <p>Find a gym near you to view available membership options.</p>
      </div>
      <GymList
        gyms={gyms}
        selectedGym={selectedGym}
        onGymSelect={handleGymSelect}
      />
    </div>
  );
}
