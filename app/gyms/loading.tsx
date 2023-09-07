export default function GymsLoading() {
  return (
    <div className="py-8 min-h-[calc(100vh-4rem)] bg-base-200 flex flex-col justify-center items-center">
      <span className="block loading loading-spinner text-primary"></span>
      <p className="block mt-2">Looking for gyms in your area...</p>
    </div>
  );
}
