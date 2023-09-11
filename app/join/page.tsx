"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Gym from "../gyms/lib/gym.interface";
import JoinSteps from "./components/join-steps";
import JoinGym from "./components/join-gym";
import JoinPlan from "./components/join-plan";

export default function Join() {
  const searchParams = useSearchParams();
  const gymIdSearchParam = searchParams.get("gymId");

  const [step, setStep] = useState<number>(gymIdSearchParam === null ? 0 : 1);
  const [gymId, setGymId] = useState<string | null>(gymIdSearchParam);

  const handleGymJoin = (gym: Gym): void => {
    setGymId(gym.id);
    setStep(1);
  };

  const getJoinBody = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return <JoinGym onJoin={handleGymJoin}></JoinGym>;
      case 1:
        return <JoinPlan></JoinPlan>;
      default:
        return <></>;
    }
  };

  const joinBody = getJoinBody(step);

  return (
    <>
      <div className="bg-base-200">
        <div className="py-8">
          <h1 className="mb-2 text-center text-4xl md:text-6xl">
            {"Let's do this!"}
          </h1>
          <p className="text-center">
            {"You're a few steps closer to reaching new heights in fitness."}
          </p>
        </div>
        <div className="pb-8 md:pb-12 flex justify-center items-center">
          <JoinSteps step={step}></JoinSteps>
        </div>
        <div className="md:flex md:justify-center">
          <div className="p-4 pb-8 md:max-w-4xl">{joinBody}</div>
        </div>
      </div>
    </>
  );
}
