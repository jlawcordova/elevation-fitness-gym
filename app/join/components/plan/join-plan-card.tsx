import GymPlan from "@/app/lib/gym-plan.interface";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function JoinPlanCard({
  gymPlan,
  onChoose,
}: {
  gymPlan: GymPlan;
  onChoose: (gymPlan: GymPlan) => void;
}) {
  const handleClick = (): void => {
    onChoose(gymPlan);
  };

  return (
    <div
      className={`card bg-base-100 rounded-none ${
        gymPlan.isPopular ? "order-1" : "order-2 md:order-1"
      }`}
    >
      <div className="card-body justify-start">
        <div className="mb-2 card-title flex justify-between">
          <h1 className="text-primary">{gymPlan.name}</h1>
          {gymPlan.isPopular !== undefined && gymPlan.isPopular && (
            <div className="badge badge-primary">Popular</div>
          )}
        </div>
        <p className="mb-4 grow-0">{gymPlan.description}</p>
        <p className="mb-4 grow-0 text-center">
          <span className="text-4xl font-bold">₱{gymPlan.rate}</span>/month
        </p>
        <ul>
          {gymPlan.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <CheckIcon className="w-5 h-5 text-primary shrink-0" /> {feature}
            </li>
          ))}
        </ul>
        <div className="card-actions w-full mt-4 flex-grow items-end">
          <button
            className="btn btn-secondary w-full rounded-none"
            onClick={handleClick}
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
