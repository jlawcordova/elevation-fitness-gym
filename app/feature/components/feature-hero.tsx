import Image, { StaticImageData } from "next/image";

export default function FeatureHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: StaticImageData;
}) {
  return (
    <>
      <div className="hero min-h-[45vh]">
        <div className="relative w-full min-h-[45vh] -z-10">
          <div className="absolute top-0 left-0 right-0 w-full h-full">
            <Image
              fill
              src={image}
              sizes="100vw"
              alt={`${title} background image`}
              className="object-cover object-top"
            ></Image>
          </div>
        </div>
        <div className="hero-content">
          <div>
            <h1 className="mb-4 text-2xl">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
