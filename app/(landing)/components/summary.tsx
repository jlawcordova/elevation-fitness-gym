import Button from "@/app/components/button";
import Link from "next/link";

export default function Summary() {
  return (
    <>
      <div className="p-8 md:py-16 md:flex md:justify-center bg-base-200">
        <div className="md:max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">
            Unleash your true potential.
          </h2>
          <p className="mb-4">
            At Elevation Fitness Gym, we believe that achieving fitness is more
            than just a physical journey.
          </p>
          <p className="mb-4">
            Embrace the invigorating experience of our open-air gym and
            state-of-the-art equipment, designed to empower you to reach new
            heights. Our team is here to guide you with unparalleled support and
            comprehensive wellness expertise both in and outside the gym.
          </p>
          <Link href="/join" className="mt-6 flex justify-center">
            <button className={`btn btn-secondary rounded-none w-full md:w-56`}>
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
