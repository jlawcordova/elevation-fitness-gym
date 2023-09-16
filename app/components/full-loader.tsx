export default function FullLoader({ text }: { text: string }) {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-base-100 bg-opacity-80 flex flex-col justify-center items-center">
        <span className="block loading loading-spinner text-primary"></span>
        <p className="block mt-2">{text}</p>
      </div>
    </>
  );
}
