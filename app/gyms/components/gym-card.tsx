import Gym from "../lib/gym.interface";

export default function GymCard({
  gym,
  selected = false,
  onSelect,
}: {
  gym: Gym;
  selected: boolean;
  onSelect: (gym: Gym) => void;
}) {
  function handleCardClick(): void {
    onSelect(gym);
  }

  return (
    <div
      className={`${
        selected ? "bg-primary" : "bg-neutral"
      } m-4 card md:w-96 cursor-pointer shadow-xl transition-colors`}
      onClick={handleCardClick}
    >
      <div className="card-body">
        <h2 className="card-title">{gym.name}</h2>
        <p>{gym.address.line1}</p>
        <p>{gym.address.line2 ?? "\u00A0"}</p>
      </div>
    </div>
  );
}
