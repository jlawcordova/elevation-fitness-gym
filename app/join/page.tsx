"use client";

import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "next/navigation";

import Gym from "../lib/gym.interface";
import GymPlan from "../lib/gym-plan.interface";

import {
  JoinActionKind,
  joinReducer,
  type JoinState,
} from "./joinReducer";

import JoinSteps from "./components/join-steps";
import JoinGym from "./components/gym/join-gym";
import JoinPlan from "./components/plan/join-plan";
import JoinForm from "./components/form/join-form";
import JoinVisit from "./components/visit/join-visit";

export default function Join() {
  const searchParams = useSearchParams();
  const gymIdSearchParam = searchParams.get("gymId");

  const [joinState, joinDispatch] = useReducer(joinReducer, {
    // Move to step 1 immediately if user has provided a gymId via search params.
    // This occurs in scenarios where the user has already selected a gym from
    // another page (i.e. in app/gyms/page.tsx)
    step: gymIdSearchParam === null ? 0 : 1,
    gymId: gymIdSearchParam,
    gym: undefined,
  });

  // Retrieve the gym when a gym id is provided via search params.
  useEffect(() => {
    async function getGym() {
      const response = await fetch(`/api/gym/${gymIdSearchParam}`);
      const gym: Gym = await response.json();

      joinDispatch({
        type: JoinActionKind.joinGym,
        payload: {
          gymId: gym.id,
          gym: gym,
        },
      });
    }

    if (gymIdSearchParam !== null) {
      getGym();
    }
  }, [gymIdSearchParam]);

  const handleGymJoin = (gym: Gym): void => {
    joinDispatch({
      type: JoinActionKind.joinGym,
      payload: {
        gymId: gym.id,
        gym: gym,
      },
    });
  };

  const handleGymPlanChoose = (gymPlan: GymPlan): void => {
    joinDispatch({
      type: JoinActionKind.chooseGymPlan,
      payload: {
        gymPlan: gymPlan,
      },
    });
  };

  const handleSubmitSuccess = (): void => {
    joinDispatch({
      type: JoinActionKind.submit,
    });
  };

  const getJoinBody = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return <JoinGym onJoin={handleGymJoin}></JoinGym>;
      case 1:
        return (
          <JoinPlan
            gym={joinState.gym}
            onChoose={handleGymPlanChoose}
          ></JoinPlan>
        );
      case 2:
        return (
          <JoinForm
            gym={joinState.gym}
            gymPlan={joinState.gymPlan}
            onSubmitSuccess={handleSubmitSuccess}
          ></JoinForm>
        );
      case 3:
        return <JoinVisit gym={joinState.gym}></JoinVisit>;
      default:
        return <></>;
    }
  };

  const joinBody = getJoinBody(joinState.step);

  return (
    <>
      <div className="bg-base-200">
        <div className="py-8">
          <h1 className="mb-2 text-center text-4xl md:text-6xl">
            {joinState.step < 3 ? "Let's do this!" : "All set!"}
          </h1>
          <p className="text-center">
            {joinState.step < 3
              ? "You're a few steps closer to reaching new heights in fitness."
              : "You're ready to go to our gym facility!"}
          </p>
        </div>
        <div className="pb-8 md:pb-12 flex justify-center items-center">
          <JoinSteps step={joinState.step}></JoinSteps>
        </div>
        <div className="md:flex md:justify-center">
          <div className="p-4 pb-8 md:max-w-3xl flex flex-col flex-1">
            {joinBody}
          </div>
        </div>
      </div>
    </>
  );
}
