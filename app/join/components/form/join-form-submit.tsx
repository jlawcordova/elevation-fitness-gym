"use client";

import FullLoader from "@/app/components/full-loader";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

// Form submit should be a client component to display loading states.
// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#displaying-loading-state
export default function JoinFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <FullLoader text="Submitting your information..."></FullLoader>
      )}
      <input
        type="submit"
        value={"Submit"}
        className="btn btn-primary md:mb-8 rounded-none"
      ></input>
    </>
  );
}
