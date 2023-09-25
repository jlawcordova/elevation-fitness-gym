import "server-only";

import { cache } from "react";
import GymPlan from "./gym-plan.interface";

export const revalidate = 60;

const mockGymPlans: GymPlan[] = [
  {
    id: "5246478e-c813-4062-b166-0fc05cf5a0ca",
    name: "1 day",
    description: "Experience our gym with a convenient 1-day pass.",
    rate: 150,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
  },
  {
    id: "43d57841-cc58-4e0c-ac53-5502f39a5d6a",
    name: "1 month",
    description: "Enjoy the flexibility of a month-to-month membership.",
    rate: 1000,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
  },
  {
    id: "2483b209-bfe8-4e7e-a122-430844328278",
    name: "3 months",
    description:
      "Elevate your fitness game with our popular 3-month subscription.",
    rate: 2700,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    tag: "save 10%",
  },
  {
    id: "56c6fd63-654f-45f7-b102-9ad0584eaa7d",
    name: "6 months",
    description:
      "Take your commitment to the next level with a 6-month subscription.",
    rate: 4500,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    tag: "save 25%",
  },
  {
    id: "7a8ce3c4-f036-4ca8-ba38-95e2b1db575f",
    name: "1 year",
    description:
      "Maximize your gains with our 1-year subscription, designed to support your long-term fitness goals.",
    rate: 6500,
    features: [
      "Open-air Gym Facility",
      "Cardio and Strength Equipment",
      "Indoor Cycling",
      "Zumba Sessions",
      "Free Parking",
    ],
    tag: "save 45%",
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
