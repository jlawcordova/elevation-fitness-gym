"use client";

import { useEffect, useState } from "react";
import Loader from "@/app/components/loader";

import Gym from "@/app/lib/gym.interface";
import JoinGymCard from "./join-gym-card";
import JoinHeader from "./join-header";

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
      <JoinHeader text={"Choose a branch you'd like to join."} />
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
