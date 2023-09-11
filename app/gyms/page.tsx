import Gym from "../lib/gym.interface";
import { GetGyms } from "../lib/gym.service";

import GymSearch from "./components/gym-search";

export default async function Gyms() {
  const gyms: Gym[] = await GetGyms();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-200">
      <GymSearch gyms={gyms} />
    </div>
  );
}
