import { GetGym } from "@/app/lib/gym.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const gym = await GetGym(params.id);

    return NextResponse.json(gym);
  } catch (e: any) {
    if (e?.errorCode === 404) {
      return NextResponse.json(
        { error: e.error ?? "Gym not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Unable to retrieve gym." },
      { status: 500 },
    );
  }
}
