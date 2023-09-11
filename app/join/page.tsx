"use client";

import { useState } from "react";
import JoinSteps from "./components/join-steps";
import { useSearchParams } from "next/navigation";

export default function Join() {
  const searchParams = useSearchParams();
  const gymIdSearchParam = searchParams.get("gymId");

  const [step, setStep] = useState<number>(gymIdSearchParam === null ? 0 : 1);
  const [gymId, setGymId] = useState<string | null>(gymIdSearchParam);

  return (
    <>
      <div className="bg-base-200">
        <div className="py-8 flex justify-center items-center">
          <JoinSteps step={step}></JoinSteps>
        </div>
        <div className="mb-8">
          <h1 className="mb-2 text-center text-4xl md:text-6xl">
            {"Let's do this!"}
          </h1>
          <p className="text-center">
            {"You're a few steps closer to reaching new heights in fitness."}
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
}
