import Button from "@/app/components/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-200 bg-opacity-80">
      <div className="relative w-full min-h-[calc(100vh-4rem)] -z-10 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover grayscale"
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src="/elevation-video.mp4"></source>
        </video>
      </div>
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1
            className="mb-8 text-6xl md:text-8xl uppercase font-normal leading-tight drop-shadow-2xl"
            style={{ textShadow: "0px 4px 12px #18181b" }}
          >
            <span className="text-primary font-extrabold">Elevate</span>
            <br />
            <span className="block">your potential.</span>
            <span className="">Level up your</span>
            <br />
            <span className="text-primary font-extrabold">fitness.</span>
          </h1>
          <p className="max-w-lg mx-auto mb-8">
            With our state-of-the-art open-air gyms located in the vibrant city
            of Davao, we offer an affordable and modern fitness experience like
            no other.
          </p>
          <Link href="/join">
            <Button>Join Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
