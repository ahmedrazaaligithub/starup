import React from "react";

const HowItWorksCard = ({ id, title, description }) => {
  return (
    <div className="p-6 rounded-xl shadow-sm bg-background">
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#71b64b]/20 text-theme-dark mb-4">
        <span className="text-2xl font-bold">{id}</span>
      </div>
      <h3 className="text-xl font-semibold text-theme-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCard;
