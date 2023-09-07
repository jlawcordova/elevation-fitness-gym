import Gym from "./lib/gym.interface";
import { GetGyms } from "./lib/gym.service";

import GymSearch from "./components/gym-search";

export default async function Gyms() {
  const gyms: Gym[] = await GetGyms();

  return <GymSearch gyms={gyms} />;
}
