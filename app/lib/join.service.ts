export interface JoinCommand {
  gymId: string;
  gymPlanId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const Join = async (joinCommand: JoinCommand): Promise<boolean> => {
  const url = `${process.env.SUPABASE_URL!}/rest/v1/join_requests`;
  const apiKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      gym_id: joinCommand.gymId,
      gym_plan_id: joinCommand.gymPlanId,
      first_name: joinCommand.firstName,
      last_name: joinCommand.lastName,
      email: joinCommand.email,
    }),
  });

  return response.ok;
};
