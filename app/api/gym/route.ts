import { GetGyms } from "@/app/lib/gym.service";
import { NextResponse } from "next/server";

export async function GET() {
  const gyms = await GetGyms();

  return NextResponse.json(gyms);
}
