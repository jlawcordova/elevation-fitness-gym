"use server";

import { Join, JoinCommand } from "@/app/lib/join.service";

export default async function submit(formData: FormData) {
  const joinCommand: JoinCommand = Object.fromEntries(
    formData,
  ) as unknown as JoinCommand;
  await Join(joinCommand);
  return {
    ok: true,
  };
}
