import { cache } from "react";
import Gym from "./gym.interface";

export const revalidate = 60;

const mockGyms: Gym[] = [
  {
    name: "Buhangin Branch",
    address: {
      line1: "Buhangin-Lapanday Road, KM 5",
    },
    contact: {
      mobile: "(+63)917 112 5912",
    },
  },
  {
    name: "Sta. Ana Branch",
    address: {
      line1: "6th floor, Alyvea Building Corporate Center",
      line2: "Corner Sta. Ana Avenue, Leon guerrero St.",
    },
    contact: {
      mobile: "(+63)917 100 2469",
    },
  },
];

export const GetGyms = cache(async (): Promise<Gym[]> => {
  const promise = new Promise<Gym[]>((resolve) => {
    setTimeout(() => {
      resolve(mockGyms);
    }, 200);
  });

  const gyms = await promise;

  return gyms;
});
