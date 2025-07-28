import test from 'node:test';
import { equal } from 'node:assert/strict';

import { joinReducer, JoinActionKind, JoinState } from '../app/join/joinReducer';

const sampleGym = {
  id: 'gym1',
  name: 'Test Gym',
  address: { line1: '123 St' },
  location: { lat: 0, lng: 0 },
};

const samplePlan = {
  id: 'plan1',
  name: 'Basic',
  description: 'desc',
  rate: 10,
  features: [],
};

test('joinGym action moves to step 1 and stores gym info', () => {
  const initial: JoinState = { step: 0 };
  const result = joinReducer(initial, {
    type: JoinActionKind.joinGym,
    payload: { gymId: sampleGym.id, gym: sampleGym },
  });

  equal(result.step, 1);
  equal(result.gymId, sampleGym.id);
  equal(result.gym, sampleGym);
});

test('chooseGymPlan action moves to step 2 and stores plan', () => {
  const initial: JoinState = { step: 1, gymId: sampleGym.id, gym: sampleGym };
  const result = joinReducer(initial, {
    type: JoinActionKind.chooseGymPlan,
    payload: { gymPlan: samplePlan },
  });

  equal(result.step, 2);
  equal(result.gymPlan, samplePlan);
});

test('submit action moves to step 3', () => {
  const initial: JoinState = {
    step: 2,
    gymId: sampleGym.id,
    gym: sampleGym,
    gymPlan: samplePlan,
  };
  const result = joinReducer(initial, {
    type: JoinActionKind.submit,
  });

  equal(result.step, 3);
});
