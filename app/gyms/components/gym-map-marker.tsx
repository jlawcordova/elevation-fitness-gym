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
        width={36}
        height={36}
        className={`transition-transform duration-200 -translate-x-1/2 -translate-y-1/2 ${
          selected ? "scale-150" : "scale-100"
        }`}
      ></Image>
    </div>
  );
}
