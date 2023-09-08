import { Transition } from "@headlessui/react";
import Gym from "../lib/gym.interface";
import GymCard from "./gym-card";

export function GymList({
  gyms,
  selectedGym,
  onGymSelect,
}: {
  gyms: Gym[];
  selectedGym?: Gym;
  onGymSelect: (gym: Gym) => void;
}) {
  function handleGymSelect(gym: Gym) {
    onGymSelect(gym);
  }

  return (
    <div className="m-4">
      {gyms.map((gym, i) => (
        <Transition
          appear={true}
          show={true}
          enter={`transition-opacity duration-200 delay-[${i * 100}ms]`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <GymCard
            key={gym.name}
            gym={gym}
            selected={selectedGym?.name === gym.name}
            onSelect={handleGymSelect}
          />
        </Transition>
      ))}
    </div>
  );
}
