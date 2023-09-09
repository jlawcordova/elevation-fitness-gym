export default function Hero() {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-200 bg-opacity-80">
      <div className="relative w-full min-h-[calc(100vh-4rem)] -z-10 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover grayscale"
          loop
          autoPlay
          muted
        >
          <source src="/elevation-video.mov"></source>
        </video>
      </div>
      <div className="hero-content text-center">
        <div className="max-w-3xl text-6xl md:text-8xl">
          <h1
            className="mb-16 uppercase font-normal leading-tight drop-shadow-2xl"
            style={{ textShadow: "0px 4px 12px #18181b;" }}
          >
            <span className="text-primary font-extrabold">Elevate</span>
            <br />
            <span className="block">your potential.</span>
            <span className="">Level up your</span>
            <br />
            <span className="text-primary font-extrabold">fitness.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
