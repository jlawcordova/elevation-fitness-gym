export default function Hero() {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-200 bg-opacity-80">
      <div className="relative w-full min-h-[calc(100vh-4rem)] -z-10 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/elevation-video.mov"></source>
        </video>
      </div>
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-primary">Elevate</span> your potential, level
            up your <span className="text-primary">fitness</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
