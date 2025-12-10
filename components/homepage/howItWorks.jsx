import React from "react";
import { HowItWorksData } from "@/mockData/howItWork";
import HowItWorksCard from "../cards/howItWorksCard";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-theme-light/10">
      <div className="my-container text-center">
        <h2 className="text-3xl font-semibold text-theme-dark mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {HowItWorksData?.map((data, index) => (
            <HowItWorksCard
              key={index}
              id={data?.id}
              title={data?.title}
              description={data?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
