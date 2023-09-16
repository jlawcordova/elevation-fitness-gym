import { CheckIcon } from "@heroicons/react/24/solid";
import JoinHeader from "./join-header";
import Gym from "@/app/lib/gym.interface";
import GymPlan from "@/app/lib/gym-plan.interface";
import JoinPlanCard from "./join-plan-card";

const gymPlans: GymPlan[] = [
  {
    name: "Starter",
    description: "Month-to-month",
    rate: 1000,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Free Parking",
    ],
    isPopular: false,
  },
  {
    name: "Gold",
    description: "3-month subscription",
    rate: 900,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Free Parking",
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    description: "1-year subscription",
    rate: 700,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Free Parking",
    ],
    isPopular: false,
  },
];

export default function JoinPlan({ gym }: { gym: Gym }) {
  return (
    <>
      <div>
        <JoinHeader
          text={`Choose your plan at Elevation Fitness ${gym.name}`}
        />
        <div className="flex flex-col gap-4 md:flex-row">
          {gymPlans.map((gymPlan, index) => (
            <JoinPlanCard key={index} gymPlan={gymPlan}></JoinPlanCard>
          ))}
        </div>
      </div>
    </>
  );
}
