"use client";

import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "next/navigation";

import Gym from "../lib/gym.interface";
import JoinSteps from "./components/join-steps";
import JoinGym from "./components/join-gym";
import JoinPlan from "./components/join-plan";

enum JoinActionKind {
  selectGym,
}

interface JoinActionPayload {
  gymId: string | null;
  gym: Gym | null;
}

interface JoinAction {
  type: JoinActionKind;
  payload: JoinActionPayload;
}

interface JoinState {
  step: number;
  gymId: string | null;
  gym: Gym | null;
}

function joinReducer(state: JoinState, action: JoinAction): JoinState {
  const { type, payload } = action;

  switch (type) {
    case JoinActionKind.selectGym:
      return {
        ...state,
        step: 1,
        gymId: payload.gymId,
        gym: payload.gym,
      };
      break;
    default:
      return state;
  }
}

export default function Join() {
  const searchParams = useSearchParams();
  const gymIdSearchParam = searchParams.get("gymId");

  const [joinState, joinDispatch] = useReducer(joinReducer, {
    // Move to step 1 immediately if user has provided a gymId via search params.
    // This occurs in scenarios where the user has already selected a gym from
    // another page (i.e. in app/gyms/page.tsx)
    step: gymIdSearchParam === null ? 0 : 1,
    gymId: gymIdSearchParam,
    gym: null,
  });

  useEffect(() => {
    async function getGym() {
      const response = await fetch(`/api/gym/${gymIdSearchParam}`);
      const gym: Gym = await response.json();

      joinDispatch({
        type: JoinActionKind.selectGym,
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
      type: JoinActionKind.selectGym,
      payload: {
        gymId: gym.id,
        gym: gym,
      },
    });
  };

  const getJoinBody = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return <JoinGym onJoin={handleGymJoin}></JoinGym>;
      case 1:
        if (joinState.gym === null) {
          return <></>;
        }

        return <JoinPlan gym={joinState.gym}></JoinPlan>;
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
            {"Let's do this!"}
          </h1>
          <p className="text-center">
            {"You're a few steps closer to reaching new heights in fitness."}
          </p>
        </div>
        <div className="pb-8 md:pb-12 flex justify-center items-center">
          <JoinSteps step={joinState.step}></JoinSteps>
        </div>
        <div className="md:flex md:justify-center">
          <div className="p-4 pb-8 md:max-w-4xl">{joinBody}</div>
        </div>
      </div>
    </>
  );
}
