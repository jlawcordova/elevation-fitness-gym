import { DevicePhoneMobileIcon, PhoneIcon } from "@heroicons/react/24/solid";

import Gym from "@/app/gyms/lib/gym.interface";

export default function JoinGymCard({
  gym,
  onJoin,
}: {
  gym: Gym;
  onJoin: (gym: Gym) => void;
}) {
  const handleClick = (): void => {
    onJoin(gym);
  };

  return (
    <div className="mb-4 md:mx-2 md:basis-2/5 card bg-neutral rounded-none">
      <div className="card-body">
        <div className="card-title">{gym.name}</div>
        <p className="leading-tight">{gym.address.line1}</p>
        <p className="leading-tight mb-2">{gym?.address.line2 ?? "\u00A0"}</p>
        <address className="flex not-italic">
          <div className="flex items-center w-32">
            <PhoneIcon className="w-5 h-5 pr-1 inline" />
            <p>{gym.contact?.tel}</p>
          </div>
          <div className="flex items-center ml-4">
            <DevicePhoneMobileIcon className="w-5 h-5 pr-1 inline" />
            <p>{gym.contact?.mobile}</p>
          </div>
        </address>
        <div className="card-actions w-full md:w-96 lg:w-full block mt-4">
          <button
            className="btn btn-secondary w-full md:w-96 lg:w-full rounded-none"
            onClick={handleClick}
          >
            Join Here
          </button>
        </div>
      </div>
    </div>
  );
}
