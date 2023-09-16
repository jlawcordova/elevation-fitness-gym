import "server-only";

import { cache } from "react";
import GymPlan from "./gym-plan.interface";

export const revalidate = 60;

const mockGymPlans: GymPlan[] = [
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

export const GetGymPlans = cache(
  async (gymId: string | null): Promise<GymPlan[]> => {
    const promise = new Promise<GymPlan[]>((resolve) => {
      setTimeout(() => {
        resolve(mockGymPlans);
      }, 0);
    });

    const gymPlans = await promise;

    return gymPlans;
  },
);
