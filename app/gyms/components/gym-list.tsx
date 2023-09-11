import { Transition } from "@headlessui/react";
import Gym from "../../lib/gym.interface";
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
  const handleGymSelect = (gym: Gym) => {
    onGymSelect(gym);
  };

  return (
    <div className="px-4 lg:pt-8 lg:w-96 lg:bg-base-100 lg:bg-opacity-20">
      {gyms.map((gym, i) => (
        <Transition
          key={i}
          appear={true}
          show={true}
          enter="transition duration-200"
          enterFrom="opacity-0 -translate-x-8"
          enterTo="opacity-100 translate-x-0"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <GymCard
            gym={gym}
            selected={selectedGym?.name === gym.name}
            onSelect={handleGymSelect}
          />
        </Transition>
      ))}
    </div>
  );
}
