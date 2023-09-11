import Loader from "../components/loader";

export default function GymsLoading() {
  return (
    <div className="py-8 min-h-[calc(100vh-4rem)] bg-base-200 flex flex-col justify-center items-center">
      <Loader text="Looking for gyms in your area..."></Loader>
    </div>
  );
}
