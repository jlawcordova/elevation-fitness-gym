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
      {gyms.map((gym) => (
        <GymCard
          key={gym.name}
          gym={gym}
          selected={selectedGym?.name === gym.name}
          onSelect={handleGymSelect}
        />
      ))}
    </div>
  );
}
