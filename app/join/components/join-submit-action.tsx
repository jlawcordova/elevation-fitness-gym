"use server";

export default async function submit(formData: FormData) {
  console.log(formData);
  return {
    ok: true,
  };
}
