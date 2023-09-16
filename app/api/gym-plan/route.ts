import { GetGymPlans } from "@/app/lib/gym-plan.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("gymId");

  const gymPlans = await GetGymPlans(id);

  return NextResponse.json(gymPlans);
}
