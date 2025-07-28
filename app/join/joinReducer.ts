export enum JoinActionKind {
  joinGym,
  chooseGymPlan,
  submit,
  back,
}

export interface JoinActionPayload {
  gymId?: string | null;
  gym?: import("../lib/gym.interface").default;
  gymPlan?: import("../lib/gym-plan.interface").default;
}

export interface JoinAction {
  type: JoinActionKind;
  payload?: JoinActionPayload;
}

export interface JoinState {
  step: number;
  gymId?: string | null;
  gym?: import("../lib/gym.interface").default;
  gymPlan?: import("../lib/gym-plan.interface").default;
}

export function joinReducer(state: JoinState, action: JoinAction): JoinState {
  const { type, payload } = action;

  if (typeof window !== "undefined" && window.scrollTo) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  switch (type) {
    case JoinActionKind.joinGym:
      return {
        ...state,
        step: 1,
        gymId: payload?.gymId,
        gym: payload?.gym,
      };
    case JoinActionKind.chooseGymPlan:
      return {
        ...state,
        step: 2,
        gymPlan: payload?.gymPlan,
      };
    case JoinActionKind.submit:
      return {
        ...state,
        step: 3,
      };
    case JoinActionKind.back:
      return {
        ...state,
        step: state.step > 0 ? state.step - 1 : 0,
      };
    default:
      return state;
  }
}
