import "server-only";

import { cache } from "react";
import Gym from "./gym.interface";

const mockGyms: Gym[] = [
  {
    id: "03aa91a6-0bae-462f-90b9-e3ba66d1bec8",
    name: "Sta. Ana",
    address: {
      line1: "6th floor, Alyvea Building Corporate Center",
      line2: "Corner Sta. Ana Avenue, Leon Guerrero St.",
    },
    contact: {
      mobile: "09171002469",
      tel: "(082) 3279621",
    },
    location: {
      lat: 7.076738,
      lng: 125.616227,
    },
  },
  {
    id: "dcb99a2e-44c7-45e7-b32f-a50949a37a8b",
    name: "Buhangin",
    address: {
      line1: "Buhangin-Lapanday Road, KM 5",
    },
    contact: {
      mobile: "09171125912",
      tel: "(082) 3313806",
    },
    location: {
      lat: 7.104413,
      lng: 125.613956,
    },
  },
  {
    id: "63e23fa6-d92b-4c1a-8a4a-99716b517ca3",
    name: "Ecoland",
    address: {
      line1: "Quimpo Blvd, Talomo",
      line2: "",
    },
    contact: {
      mobile: "09171020703",
      tel: "(082) 3312766",
    },
    location: {
      lat: 7.052437,
      lng: 125.591072,
    },
  },
  {
    id: "acd6dea8-e524-4050-8c67-30faba2e2fe7",
    name: "Lanang",
    address: {
      line1: "71 J.P. Laurel Ave, Agdao",
      line2: "",
    },
    contact: {
      mobile: "09171125912",
      tel: "(082) 3080589",
    },
    location: {
      lat: 7.099748,
      lng: 125.628202,
    },
  },
];

export const GetGyms = cache(async (): Promise<Gym[]> => {
  const promise = new Promise<Gym[]>((resolve) => {
    // Simulate a 1-second DB call.
    setTimeout(() => {
      resolve(mockGyms);
    }, 1000);
  });

  const gyms = await promise;

  return gyms;
});

export const GetGym = cache(async (id: string): Promise<Gym> => {
  const promise = new Promise<Gym>((resolve, reject) => {
    // Simulate a 1-second DB call.
    setTimeout(() => {
      const gym = mockGyms.find((g) => g.id === id);

      if (gym === undefined) {
        reject({ errorCode: 404, error: "Gym not found." });
        return;
      }

      resolve(gym);
    }, 1000);
  });

  const gym = await promise;

  return gym;
});
