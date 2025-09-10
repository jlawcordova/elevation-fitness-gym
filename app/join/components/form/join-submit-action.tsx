"use server";

import { Join, JoinCommand } from "@/app/lib/join.service";

export default async function submit(formData: FormData) {
  const joinCommand: JoinCommand = Object.fromEntries(
    formData,
  ) as unknown as JoinCommand;

  const ok = await Join(joinCommand);
  if (!ok) {
    throw new Error("Failed to save join request");
  }

  return {
    ok: true,
  };
}
