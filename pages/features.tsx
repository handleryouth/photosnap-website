import { NextPage } from "next";
import { AdContainer, AdContainer3 } from "../components";
import { Feature } from "../components/Feature";
import { MockFeatures } from "../mock";

const featuresContainer = () => {
  return (
    <div className="flex flex-wrap w-3/4 mx-auto justify-center my-16">
      {MockFeatures.map((feature, index) => {
        return (
          <div key={index} className="my-8 ">
            <Feature
              image={feature.picture}
              title={feature.title}
              subTitle={feature.description}
            />
          </div>
        );
      })}
    </div>
  );
};

const features: NextPage = () => {
  return (
    <div>
      <AdContainer
        picture="/Images/features-bg.jpg"
        title="FEATURES"
        subTitle="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
      />
      {featuresContainer()}
      <AdContainer3 title="WE'RE IN BETA. GET YOUR INVITE TODAY!" />
    </div>
  );
};

export default features;
