import Gym from "@/app/lib/gym.interface";
import JoinHeader from "./join-header";
import GymPlan from "@/app/lib/gym-plan.interface";
import submit from "./join-submit-action";

export default function JoinForm({
  gym,
  gymPlan,
  onSubmitSuccess,
}: {
  gym?: Gym;
  gymPlan?: GymPlan;
  onSubmitSuccess: () => void;
}) {
  const onSubmit = async (formData: FormData) => {
    const response = await submit(formData);
    if (response.ok) {
      onSubmitSuccess();
    }
  };

  return (
    <>
      <div className="w-full">
        <JoinHeader text={"We'd like to know more about you"} />
        <form action={onSubmit} className="form-control">
          <input
            id="gymId"
            name="gymId"
            type="hidden"
            className="input mb-2 w-full"
            value={gym?.id}
            required
          />
          <input
            id="gymPlanId"
            name="gymPlanId"
            type="hidden"
            className="input mb-2 w-full"
            value={gymPlan?.id}
            required
          />
          <label htmlFor="firstName" className="label block">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Juan"
            className="input mb-2 w-full rounded-none"
            required
            autoFocus
          />
          <label htmlFor="lastName" className="label block">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Dela Cruz"
            className="input mb-2 w-full rounded-none"
            required
          />
          <label htmlFor="email" className="label block">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="juan.delacruz@example.com"
            className="input mb-8 w-full rounded-none"
            required
          />
          <input
            type="submit"
            value={"Submit"}
            className="btn btn-primary md:mb-8 rounded-none"
          ></input>
        </form>
      </div>
    </>
  );
}
