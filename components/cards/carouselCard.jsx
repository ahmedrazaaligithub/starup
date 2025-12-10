import React from "react";

const CarouselCard = ({icon, themeClasses, cat}) => {
  return (
    <div
      className={`w-full p-6 flex flex-col items-center justify-center border backdrop-blur-md ${themeClasses}`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <p className="font-medium text-theme-light">{cat}</p>
    </div>
  );
};

export default CarouselCard;
