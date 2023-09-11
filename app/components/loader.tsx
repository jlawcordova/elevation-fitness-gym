export default function Loader({ text }: { text: string }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="block loading loading-spinner text-primary"></span>
        <p className="block mt-2">{text}</p>
      </div>
    </>
  );
}
