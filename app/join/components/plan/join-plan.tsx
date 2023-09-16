import { useEffect, useState } from "react";

import Gym from "@/app/lib/gym.interface";
import GymPlan from "@/app/lib/gym-plan.interface";

import Loader from "@/app/components/loader";
import JoinPlanCard from "./join-plan-card";
import JoinHeader from "../join-header";

export default function JoinPlan({
  gym,
  onChoose,
}: {
  gym?: Gym;
  onChoose: (gymPlan: GymPlan) => void;
}) {
  const [gymPlans, setGymPlans] = useState<GymPlan[]>();

  useEffect(() => {
    async function getGymsPlans() {
      if (gym === undefined) {
        return;
      }

      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("gymId", gym?.id);

      const response = await fetch(`/api/gym-plan?${urlSearchParams}`);
      const gymPlans: GymPlan[] = await response.json();

      setGymPlans(gymPlans);
    }

    getGymsPlans();
  }, [gym]);

  const handleChoose = (gymPlan: GymPlan): void => {
    onChoose(gymPlan);
  };

  if (gym === undefined || gymPlans === undefined) {
    return (
      <div className="flex flex-col justify-center min-h-[16rem]">
        <Loader text="Getting available plans..."></Loader>
      </div>
    );
  }

  return (
    <>
      <div>
        <JoinHeader
          text={`Choose your plan at Elevation Fitness ${gym.name}`}
        />
        <div className="flex flex-col gap-4 md:flex-row">
          {gymPlans.map((gymPlan, index) => (
            <JoinPlanCard
              key={index}
              gymPlan={gymPlan}
              onChoose={handleChoose}
            ></JoinPlanCard>
          ))}
        </div>
      </div>
    </>
  );
}
