import { CheckIcon } from "@heroicons/react/24/solid";
import JoinHeader from "./join-header";
import Gym from "@/app/lib/gym.interface";
import GymPlan from "@/app/lib/gym-plan.interface";
import JoinPlanCard from "./join-plan-card";
import Loader from "@/app/components/loader";

const gymPlans: GymPlan[] = [
  {
    id: "43d57841-cc58-4e0c-ac53-5502f39a5d6a",
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
    id: "2483b209-bfe8-4e7e-a122-430844328278",
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
    id: "56c6fd63-654f-45f7-b102-9ad0584eaa7d",
    name: "Premium",
    description: "1-year subscription",
    rate: 700,
    features: [
      "Welcome Workout",
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Free Parking",
    ],
    isPopular: false,
  },
];

export default function JoinPlan({
  gym,
  onChoose,
}: {
  gym?: Gym;
  onChoose: (gymPlan: GymPlan) => void;
}) {
  const handleChoose = (gymPlan: GymPlan): void => {
    onChoose(gymPlan);
  };

  if (gym === undefined) {
    return (
      <div className="flex flex-col justify-center min-h-[16rem]">
        <Loader text="Getting gym information..."></Loader>
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
