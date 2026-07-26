import "server-only";

import { cache } from "react";
import Gym from "./gym.interface";

const mockGyms: Gym[] = [
  {
    id: "03aa91a6-0bae-462f-90b9-e3ba66d1bec8",
    name: "Sta. Ana",
    address: {
      line1: "6th floor, Alyvea Building, Sta. Ana Avenue",
      line2: "Leon Guerrero St., Davao City, Davao del Sur",
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
      line2: "Davao City, Davao del Sur",
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
      line2: "Davao City, Davao del Sur",
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
      line1: "Jureza Compound, Lanang",
      line2: "Davao City, Davao del Sur",
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
  {
    id: "c0ec9aa9-0f13-4666-8176-05957ad78dd3",
    name: "Boulevard",
    address: {
      line1: "Quezon Boulevard, Brgy. 37-D Poblacion",
      line2: "Davao City, Davao del Sur",
    },
    contact: {
      mobile: "09171588708",
      tel: "(082) 308 3372",
    },
    location: {
      lat: 7.064894,
      lng: 125.614089,
    },
  },
  {
    id: "69a109ab-cbe3-4055-9d65-3c247c43841c",
    name: "J.P. Laurel",
    address: {
      line1: "105 J.P. Laurel Ave, Poblacion District",
      line2: "Davao City, Davao del Sur",
    },
    contact: {
      mobile: "",
      tel: "(082) 308 0760",
    },
    location: {
      lat: 7.084247,
      lng: 125.612783,
    },
  },
  {
    id: "1a24c51f-c71d-49b0-8e35-2248ed2fb0e4",
    name: "National Highway",
    address: {
      line1: "Cuntapay Building, National Highway",
      line2: "Tagum, Davao del Norte",
    },
    contact: {
      mobile: "09171940926",
      tel: "(082) 227 0419",
    },
    location: {
      lat: 7.446973,
      lng: 125.809264,
    },
  },
  {
    id: "da866916-c837-4fa0-a235-27a817f57335",
    name: "Panabo",
    address: {
      line1: "3/F R.J.A. Building, Purok 4A, Tadeco Road",
      line2: "Brgy. San Francisco, Panabo City, Davao del Norte",
    },
    contact: {
      mobile: "09171852513",
      tel: "(084) 2270438",
    },
    location: {
      lat: 7.309302,
      lng: 125.683049,
    },
  },
  {
    id: "a04a9ec0-8846-4fec-81d4-ad6002a39994",
    name: "Toril",
    address: {
      line1: "Maharlika Hwy, Toril",
      line2: "Davao City, 8000 Davao del Sur",
    },
    contact: {
      mobile: "09173193284",
    },
    location: {
      lat: 7.025905182736987,
      lng: 125.50511464972415,
    },
  },
  {
    id: "4839c4b0-0feb-4233-8ea9-b54f51d151da",
    name: "Cabantian",
    address: {
      line1: "Indangan Road, KM-10 Cabantian Road",
      line2: "Buhangin, Davao City, 8000 Davao del Sur",
    },
    contact: {
      mobile: "09171862521",
    },
    location: {
      lat: 7.1371692792429835,
      lng: 125.61064298407862,
    },
  },
  {
    id: "f6314125-6581-4121-af2e-f22f10a708f8",
    name: "Airport",
    address: {
      line1: "Carlos P. Garcia Highway",
      line2: "Buhangin, Davao City, Davao del Sur",
    },
    contact: {
      mobile: "09171696378",
    },
    location: {
      lat: 7.126623620001701,
      lng: 125.63494219591392,
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
    const gym = mockGyms.find((g) => g.id === id);

    if (gym === undefined) {
      reject({ errorCode: 404, error: "Gym not found." });
      return;
    }

    resolve(gym);
  });

  const gym = await promise;

  return gym;
});
