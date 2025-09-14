import Link from "next/link";
import Gym from "../../lib/gym.interface";
import { PhoneIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function GymCard({
  gym,
  selected = false,
  onSelect,
}: {
  gym: Gym;
  selected: boolean;
  onSelect: (gym: Gym) => void;
}) {
  const handleCardClick = () => {
    onSelect(gym);
  };

  return (
    <div
      className={`${
        selected ? "bg-primary" : "bg-neutral"
      } mb-4 card rounded-none cursor-pointer shadow-xl transition-colors`}
      onClick={handleCardClick}
    >
      <div className="card-body px-4 py-4">
        <h2 className="card-title">{gym.name}</h2>
        <p className="leading-tight">{gym.address.line1}</p>
        <p className="leading-tight mb-2">{gym.address.line2 ?? "\u00A0"}</p>
        <address className="flex not-italic">
          <div className="flex items-center w-32">
            <PhoneIcon className="w-5 h-5 pr-1 inline" />
            <p>{gym.contact?.tel}</p>
          </div>
          {gym.contact?.mobile && gym.contact.mobile.trim() !== "" && (
            <div className="flex items-center ml-4">
              <DevicePhoneMobileIcon className="w-5 h-5 pr-1 inline" />
              <p>{gym.contact.mobile}</p>
            </div>
          )}
        </address>
        {selected ? (
          <div className="card-actions w-full md:w-96 lg:w-full block">
            <Link href={`/join?gymId=${gym.id}`}>
              <button className="btn btn-secondary w-full md:w-96 lg:w-full rounded-none">
                Join Here
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
