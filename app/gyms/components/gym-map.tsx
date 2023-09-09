"use client";

import GoogleMapReact from "google-map-react";
import Gym from "../lib/gym.interface";
import GymMapMarker from "./gym-map-marker";
import { DarkMapStyle } from "../lib/dark-map-style.const";

export default function GymMap({
  gyms,
  selectedGym,
  onGymSelect,
}: {
  gyms: Gym[];
  selectedGym?: Gym;
  onGymSelect: (gym: Gym) => void;
}) {
  const handleGymSelect = (gym: Gym) => {
    onGymSelect(gym);
  };

  const defaultProps = {
    center: {
      lat: 7.075478,
      lng: 125.585939,
    },
    zoom: 13,
  };

  const createMapOptions = (maps: any) => {
    return {
      styles: DarkMapStyle,
    };
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-4rem)]">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          // Center the map to a selected gym's location.
          // A few offsets are applied to consider the overlapping sidebar.
          center={
            selectedGym === undefined
              ? undefined
              : {
                  lat: selectedGym?.location.lat - 0.01,
                  lng: selectedGym?.location.lng - 0.025,
                }
          }
          options={createMapOptions}
        >
          {gyms.map((gym, index) => (
            <GymMapMarker
              key={index}
              lat={gym.location.lat}
              lng={gym.location.lng}
              gym={gym}
              selected={selectedGym?.name === gym.name}
              onSelect={handleGymSelect}
            ></GymMapMarker>
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
}
