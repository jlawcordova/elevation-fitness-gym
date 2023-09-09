import Image from "next/image";
import Gym from "../lib/gym.interface";

export default function GymMapMarker({
  lat,
  lng,
  gym,
  selected = false,
  onSelect,
}: {
  lat: number;
  lng: number;
  gym: Gym;
  selected: boolean;
  onSelect: (gym: Gym) => void;
}) {
  const handleMarkerClick = () => {
    onSelect(gym);
  };

  return (
    <div onClick={handleMarkerClick} className="cursor-pointer">
      <Image
        src={selected ? "/map/selected-gym-marker.svg" : "/map/gym-marker.svg"}
        alt="marker"
        width={selected ? 64 : 42}
        height={selected ? 64 : 42}
        className="-translate-x-1/2 -translate-y-1/2"
      ></Image>
    </div>
  );
}
