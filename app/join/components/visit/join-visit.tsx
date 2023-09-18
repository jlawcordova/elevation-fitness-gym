import Gym from "@/app/lib/gym.interface";
import JoinHeader from "../join-header";
import Link from "next/link";

export default function JoinVisit({ gym }: { gym?: Gym }) {
  return (
    <>
      <div className="p-8 bg-base-100">
        <p className="mb-4">
          Congratulations on taking the first step towards your fitness journey
          with Elevation Fitness Gym! We are excited to have you on board as a
          new member.
        </p>
        <p className="mb-4">
          {`Please visit `}
          <span className="font-bold">{`Elevation Fitness ${gym?.name}`}</span>{" "}
          {`and complete your registration. Our friendly and knowledgeable staff will be more than happy to give you a tour, answer any questions you may have, and help you coordinate your fitness goals.`}
        </p>
        <p className="mb-4">
          Get ready to elevate your fitness to new heights!
        </p>
        <Link href={"/"}>
          <p className="text-primary text-center md:text-start">
            Return to Home ↩
          </p>
        </Link>
      </div>
    </>
  );
}
