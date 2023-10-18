import FeatureHero from "../components/feature-hero";
import openAirFeature from "../../(landing)/components/feature/images/open-air-feature.png";

export default function OpenAir() {
  return (
    <>
      <FeatureHero
        title="Elevate in the Open"
        subtitle="Who said you can't enjoy the breeze while you're breaking a sweat? Step into our open-air gym equipped with modern fitness gear."
        image={openAirFeature}
      ></FeatureHero>
    </>
  );
}
