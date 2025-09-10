import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elevation Fitness Gym",
  description:
    "Privacy policy describing what data we collect, how we use it, and your choices.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">
        Your privacy matters to us. This policy explains what information we
        collect when you use our website and services, how we use and share it,
        and your choices.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-6">
        When you submit a join request, we collect your name, email address,
        selected gym branch, and plan details. We may also collect basic
        technical information such as IP address and device/browser metadata to
        keep our services secure and reliable.
      </p>

      <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
      <p className="mb-6">
        We use your information to process your request, contact you regarding
        membership, provide customer support, improve our services, and comply
        with legal obligations.
      </p>

      <h2 className="text-xl font-semibold mb-2">Sharing</h2>
      <p className="mb-6">
        We do not sell your personal information. We may share limited data with
        service providers that help us operate our website and process join
        requests. These providers are bound by contractual obligations to protect
        your data.
      </p>

      <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
      <p className="mb-6">
        We retain personal information only for as long as necessary to fulfill
        the purposes outlined here or as required by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
      <p className="mb-6">
        You can request access, correction, or deletion of your personal data by
        contacting us. If you disagree with this policy, please do not submit a
        join request.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="mb-6">
        For questions about this policy, please contact us via our social media
        pages linked in the site footer or when you visit our gym.
      </p>

      <p className="mt-10">
        Ready to proceed? Return to the {" "}
        <Link className="link link-primary" href="/join">
          Join page
        </Link>
        .
      </p>
    </main>
  );
}
