import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-4 flex-1 flex bg-theme-light/10 rounded-md py-10">
      <div className="w-12 h-12 p-4 inline-flex items-center justify-center rounded-full bg-theme-dark/10 text-theme-dark mb-4 shrink">
        {icon}
      </div>

      <div className="grow pl-6">
        <h2 className="text-theme-dark text-lg font-semibold mb-2">{title}</h2>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
