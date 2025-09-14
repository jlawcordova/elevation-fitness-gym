import { MapIcon, ListBulletIcon } from "@heroicons/react/24/solid";

export enum GymView {
  List = "list",
  Map = "map",
}

export default function GymViewToggle({
  view,
  onViewChange,
}: {
  view: GymView;
  onViewChange: (view: GymView) => void;
}) {
  return (
    <div className="flex justify-end gap-2 mt-4 lg:hidden">
      <button
        aria-label="List view"
        className={`btn btn-sm btn-square rounded-none ${view === GymView.Map ? "btn-ghost" : "btn-primary"}`}
        onClick={() => onViewChange(GymView.List)}
      >
        <ListBulletIcon className="w-5 h-5" />
      </button>
      <button
        aria-label="Map view"
        className={`btn btn-sm btn-square rounded-none ${view === GymView.Map ? "btn-primary" : "btn-ghost"}`}
        onClick={() => onViewChange(GymView.Map)}
      >
        <MapIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

