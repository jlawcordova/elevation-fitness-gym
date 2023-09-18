import "server-only";

import { cache } from "react";
import GymPlan from "./gym-plan.interface";

export const revalidate = 60;

const mockGymPlans: GymPlan[] = [
  {
    id: "5246478e-c813-4062-b166-0fc05cf5a0ca",
    name: "Pass",
    description: "Experience our gym with a convenient 1-day pass.",
    rate: 150,
    subscription: "daily",
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    isPopular: false,
  },
  {
    id: "43d57841-cc58-4e0c-ac53-5502f39a5d6a",
    name: "Starter",
    description: "Enjoy the flexibility of a month-to-month membership.",
    rate: 1000,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    isPopular: false,
  },
  {
    id: "2483b209-bfe8-4e7e-a122-430844328278",
    name: "Gold",
    description:
      "Elevate your fitness game with our popular 3-month subscription.",
    rate: 900,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    isPopular: true,
  },
  {
    id: "56c6fd63-654f-45f7-b102-9ad0584eaa7d",
    name: "Premium",
    description:
      "Take your commitment to the next level with a 6-month subscription.",
    rate: 700,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    isPopular: false,
  },
  {
    id: "7a8ce3c4-f036-4ca8-ba38-95e2b1db575f",
    name: "Platinum",
    description:
      "Maximize your gains with our 1-year subscription, designed to support your long-term fitness goals.",
    rate: 540,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
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
