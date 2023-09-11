"use client";

import Gym from "@/app/gyms/lib/gym.interface";
import { DevicePhoneMobileIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import JoinGymCard from "./join-gym-card";
import Loader from "@/app/components/loader";
import Skeleton from "react-loading-skeleton";

export default function JoinGym({ onJoin }: { onJoin: (gym: Gym) => void }) {
  const [gyms, setGyms] = useState<Gym[] | undefined>(undefined);

  useEffect(() => {
    async function getGyms() {
      const response = await fetch("/api/gym");
      const gyms: Gym[] = await response.json();

      setGyms(gyms);
    }

    getGyms();
  }, []);

  const handleJoin = (gym: Gym): void => {
    onJoin(gym);
  };

  return (
    <>
      <h2 className="text-xl md:text-2xl mb-4 md:mb-8 md:text-center">
        {"Choose a branch you'd like to join."}
      </h2>
      <div className="md:flex md:flex-wrap md:justify-center">
        {gyms?.map((gym, index) => (
          <JoinGymCard key={index} gym={gym} onJoin={handleJoin}></JoinGymCard>
        )) || (
          <div className="flex flex-col justify-center min-h-[16rem]">
            <Loader text="Looking for gyms available..."></Loader>
          </div>
        )}
      </div>
    </>
  );
}
