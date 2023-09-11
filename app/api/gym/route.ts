import { GetGyms } from "@/app/lib/gym.service";
import { NextResponse } from "next/server";

export async function GET() {
  const gym = await GetGyms();

  return NextResponse.json(gym);
}
