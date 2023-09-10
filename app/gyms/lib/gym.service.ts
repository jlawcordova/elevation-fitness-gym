import "server-only";

import { cache } from "react";
import Gym from "./gym.interface";

export const revalidate = 60;

const mockGyms: Gym[] = [
  {
    name: "Sta. Ana",
    address: {
      line1: "6th floor, Alyvea Building Corporate Center",
      line2: "Corner Sta. Ana Avenue, Leon Guerrero St.",
    },
    contact: {
      mobile: "(+63)917 100 2469",
    },
    location: {
      lat: 7.076738,
      lng: 125.616227,
    },
  },
  {
    name: "Buhangin",
    address: {
      line1: "Buhangin-Lapanday Road, KM 5",
    },
    contact: {
      mobile: "(+63)917 112 5912",
    },
    location: {
      lat: 7.104413,
      lng: 125.613956,
    },
  },
  {
    name: "Ecoland",
    address: {
      line1: "Quimpo Blvd, Talomo",
      line2: "",
    },
    contact: {
      mobile: "(+63)917 102 0703",
    },
    location: {
      lat: 7.052437,
      lng: 125.591072,
    },
  },
  {
    name: "Lanang",
    address: {
      line1: "71 J.P. Laurel Ave, Agdao",
      line2: "",
    },
    contact: {
      mobile: "(+63)917 112 5912",
    },
    location: {
      lat: 7.099748,
      lng: 125.628202,
    },
  },
];

export const GetGyms = cache(async (): Promise<Gym[]> => {
  const promise = new Promise<Gym[]>((resolve) => {
    setTimeout(() => {
      resolve(mockGyms);
    }, 0);
  });

  const gyms = await promise;

  return gyms;
});
