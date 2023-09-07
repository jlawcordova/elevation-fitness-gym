"use client";

import { useState } from "react";
import { GymList } from "./gym-list";
import Gym from "../lib/gym.interface";

export default function GymSearch({ gyms }: { gyms: Gym[] }) {
  const [selectedGym, setSelectedGym] = useState<Gym>();

  function handleGymSelect(gym: Gym) {
    setSelectedGym(gym);
  }

  return (
    <div className="py-8 min-h-[calc(100vh-4rem)] bg-base-200">
      <GymList
        gyms={gyms}
        selectedGym={selectedGym}
        onGymSelect={handleGymSelect}
      />
    </div>
  );
}
