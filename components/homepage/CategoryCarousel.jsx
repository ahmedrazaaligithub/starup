"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "../cards/carouselCard";
import { categories } from "@/mockData/categories";

export default function TalentCategories({ theme = "dark" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const isDark = theme === "dark";

  const titleColor = isDark ? "text-theme-light" : "text-theme-dark";

  const cardThemeClasses = isDark
    ? "bg-theme-dark/10 border-background/10 text-theme-light"
    : "bg-theme-light/10 border-foreground/10 text-theme-dark";

  const arrowTheme =
    isDark
      ? "bg-background/10 text-theme-light hover:bg-background/20"
      : "bg-foreground/10 text-theme-dark hover:bg-foreground/20";

  // Arrow functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="my-container py-24">
      <h2 className={`text-3xl font-semibold mb-12 text-center ${titleColor}`}>
        Talent Categories
      </h2>

      <div className="relative">

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 text-xl p-3 
            rounded-full shadow-lg backdrop-blur-md transition ${arrowTheme}
            disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          ◀
        </button>

        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 text-xl p-3 
            rounded-full shadow-lg backdrop-blur-md transition ${arrowTheme}
            disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          ▶
        </button>

        {/* Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="
                  embla__slide min-w-0 
                  flex-[0_0_60%] sm:flex-[0_0_40%] md:flex-[0_0_25%] lg:flex-[0_0_20%]
                "
              >
                <CarouselCard
                  cat={cat.name}
                  icon={cat.icon}
                  themeClasses={cardThemeClasses}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
