import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Elevation Fitness Gym",
  description:
    "Terms and conditions governing membership, usage, payments, and other policies.",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-6">
        These Terms and Conditions (&quot;Terms&quot;) govern your use of our
        website and services. By submitting a join request or becoming a member,
        you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">Membership</h2>
      <p className="mb-6">
        Membership eligibility and benefits are determined by the selected plan
        and the policies of the chosen gym branch. You agree to follow posted
        rules and staff instructions while on premises.
      </p>

      <h2 className="text-xl font-semibold mb-2">Payments</h2>
      <p className="mb-6">
        Fees, billing cycles, and available payment methods may vary by branch
        and plan. Any applicable taxes and charges will be indicated at the time
        of enrollment or renewal.
      </p>

      <h2 className="text-xl font-semibold mb-2">Conduct and Safety</h2>
      <p className="mb-6">
        You agree to use equipment properly, maintain good hygiene, and respect
        other members. The gym may suspend or terminate access for violations of
        policies or unsafe behavior.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cancellations and Changes</h2>
      <p className="mb-6">
        Cancellation, freeze, and transfer policies may differ per branch and
        plan. Please inquire at the gym for details. We may update these Terms
        as needed to reflect changes in our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">Liability</h2>
      <p className="mb-6">
        To the extent permitted by law, the gym is not responsible for injuries
        or losses resulting from misuse of equipment or failure to follow
        instructions. Consult your physician before starting any fitness
        program.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="mb-6">
        For questions about these Terms, please contact us via our social media
        pages linked in the site footer or when you visit our gym.
      </p>
    </main>
  );
}
