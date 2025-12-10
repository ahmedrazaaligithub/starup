import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-700 body-font bg-background">
      <div className="my-container flex py-24 md:flex-row flex-col items-center">
        {/* LEFT CONTENT */}
        <div
          className="lg:grow md:w-1/2 lg:pr-24 md:pr-16
                    flex flex-col md:items-start md:text-left 
                    mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-theme-dark leading-tight">
            Spotlight on
            <br className="hidden lg:block" />
            <span className="text-theme-light">Top Talent</span>
          </h1>

          <p className="mb-8 leading-relaxed text-theme-600 text-lg">
            Discover rising stars, explore fresh skills, and connect with talent
            ready to shine. StarUp helps individuals elevate their careers — and
            companies find the best people.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4">
            <button className="inline-flex text-background bg-theme-light py-2 px-6 rounded-md text-lg font-medium hover:bg-theme-dark transition">
              Get Started
            </button>

            <button className="inline-flex text-theme-dark border border-theme-light py-2 px-6 rounded-md text-lg font-medium hover:bg-theme-light hover:text-background transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl"
            alt="hero"
            src="/images/spotlight-person.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
