import React from "react";
import FeatureCard from "../cards/featureCard";
import { FeaturesData } from "@/mockData/features";
const Features = () => {
  return (
    <section className="py-24 theme-light">
      <div className="container px-5 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center text-theme-dark mb-20">
          Spotlight on Talent, Powered by Innovation
        </h1>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4  gap-5 box-border">
          {FeaturesData?.map((data, index) => (
            <FeatureCard
              key={index}
              icon={data?.icon}
              title={data?.title}
              description={data?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
