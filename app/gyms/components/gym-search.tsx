"use client";

import { useState } from "react";
import { GymList } from "./gym-list";
import Gym from "../lib/gym.interface";

export default function GymSearch({ gyms }: { gyms: Gym[] }) {
  const [selectedGym, setSelectedGym] = useState<Gym | undefined>(gyms.length > 0 ? gyms[0] : undefined);

  function handleGymSelect(gym: Gym) {
    setSelectedGym(gym);
  }

  return (
    <div>
      <GymList
        gyms={gyms}
        selectedGym={selectedGym}
        onGymSelect={handleGymSelect}
      />
    </div>
  );
}
