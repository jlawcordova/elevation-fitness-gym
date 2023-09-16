export interface JoinCommand {
  gymId: string;
  gymPlanId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const Join = async (joinCommand: JoinCommand): Promise<boolean> => {
  // Simulate a 2 second save.
  const promise = new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  const gym = await promise;

  return gym;
};
