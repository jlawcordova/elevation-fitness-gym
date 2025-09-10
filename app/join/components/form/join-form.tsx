import Gym from "@/app/lib/gym.interface";
import GymPlan from "@/app/lib/gym-plan.interface";
import JoinFormSubmit from "./join-form-submit";
import submit from "./join-submit-action";
import JoinHeader from "../join-header";
import Link from "next/link";

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
            autoComplete="given-name"
            className="input mb-2 w-full rounded-none"
            required
          />
          <label htmlFor="lastName" className="label block">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Dela Cruz"
            autoComplete="family-name"
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
            autoComplete="email"
            placeholder="juan.delacruz@example.com"
            className="input mb-4 w-full rounded-none"
            required
          />
          <div className="form-control mb-4">
            <label className="label flex justify-start items-center cursor-pointer gap-3">
              <input
                id="acceptPrivacy"
                name="acceptPrivacy"
                type="checkbox"
                className="checkbox mt-1"
                required
              />
              <span className="label-text">
                I have read and accept the{" "}
                <Link
                  href="/privacy"
                  className="link link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
                {" and "}
                <Link
                  href="/terms"
                  className="link link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </span>
            </label>
          </div>
          <JoinFormSubmit></JoinFormSubmit>
        </form>
      </div>
    </>
  );
}
