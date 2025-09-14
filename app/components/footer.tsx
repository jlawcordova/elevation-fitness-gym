import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/gyms" className="link link-hover">
          Find a Gym
        </Link>
        <Link href="/join" className="link link-hover">
          Join Now
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/terms" className="link link-hover">
          Terms &amp; Conditions
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://www.facebook.com/ElevationFitnessGym"
            aria-label="Elevation Fitness Gym on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="fill-current"
            >
              {" "}
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/elevationfitnessgym"
            aria-label="Elevation Fitness Gym on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="fill-current"
            >
              {" "}
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </Link>
          <Link
            href="https://www.tiktok.com/@elevationfitnessgym"
            aria-label="Elevation Fitness Gym on TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="fill-current"
            >
              {" "}
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
          </Link>
        </div>
      </nav>
      <aside className="flex w-full justify-between items-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Premier Elevation Fitness Gym
        </p>
        <p>
          <span>
            Powered by{" "}
            <Link
              href="https://www.linkedin.com/in/jlawcordova/"
              className="underline text-[#FF232E]"
            >
              J. Law.
            </Link>
          </span>
        </p>
      </aside>
    </footer>
  );
}
