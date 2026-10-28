"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  HALLOWEEN_HERO_IMAGE,
  HALLOWEEN_ROMAN_HERO_IMAGE,
  HALLOWEEN_THEME,
  HALLOWEEN_WOODEN_HERO_IMAGE,
} from "../../config/seasonal";
import { HeroHalloweenDecor, PumpkinIcon } from "../halloween-decor";

// Keep each banner's image, copy, and collection link together for easy updates.
const slides = [
  {
    image: HALLOWEEN_THEME ? HALLOWEEN_HERO_IMAGE : "/home/home-img1.webp",
    imagePosition: HALLOWEEN_THEME ? "75% center" : "center",
    title: "Quality Window Blinds",
    subtitle: "Dublin, Ireland",
    description:
      "Enhance your home or office with local made-to-measure blinds, crafted in a wide choice of colours, textures, and finishes, then professionally measured and fitted across Dublin.",
    href: "/ireland-blinds-quality-blinds-in-dublin",
    linkLabel: "Explore Collections",
    label: "Made-to-measure blinds",
  },
  {
    image: HALLOWEEN_THEME ? HALLOWEEN_WOODEN_HERO_IMAGE : "/home/hero-bg.webp",
    imagePosition: HALLOWEEN_THEME ? "75% center" : "65% center",
    title: "Natural Warmth.",
    subtitle: "Timeless Wooden Blinds.",
    description:
      "Bring warmth and character to your space with made-to-measure wooden blinds. Explore beautiful finishes with flexible light control, expertly measured and fitted for your windows.",
    href: "/wooden-blinds-in-dublin-ireland",
    linkLabel: "Explore Wooden Blinds",
    label: "Wooden blinds",
  },
  {
    image: HALLOWEEN_THEME ? HALLOWEEN_ROMAN_HERO_IMAGE : "/home/home-img2.webp",
    imagePosition: HALLOWEEN_THEME ? "75% center" : "60% center",
    title: "Your Style.",
    subtitle: "Your Perfect Fit.",
    description:
      "From contemporary roller blinds to soft Roman fabrics, discover colours, textures, and styles to suit every room. Let our Dublin team help you find the right fit for your home.",
    href: "/ireland-blinds-quality-blinds-in-dublin",
    linkLabel: "Find Your Blinds",
    label: "Blinds for every style",
  },
];

const rotationDelay = 6000;
const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(motionQuery).matches;
}

function getServerMotionPreference() {
  return true;
}

function NavigationArrow({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${previous ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}
    >
      <path
        d={previous ? "m10 5-7 7 7 7M3 12h18" : "m14 5 7 7-7 7M3 12h18"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25ZM4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625ZM5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583Z" fill="white" />
    </svg>
  );
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const isRotating = !isHovered && !isFocused && !reducedMotion;

  useEffect(() => {
    if (!isRotating) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((index) => (index + 1) % slides.length);
      }
    }, rotationDelay);

    return () => window.clearInterval(timer);
  }, [activeIndex, isRotating]);

  function changeSlide(direction: number) {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  }

  const controlClassName = "group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-[2px] border border-white/35 bg-white/10 text-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] backdrop-blur-md hover:border-white hover:bg-white hover:text-[#001825] focus-visible:border-white focus-visible:bg-white focus-visible:text-[#001825] active:scale-95 motion-reduce:transform-none sm:w-14";

  return (
    <section
      aria-label="Featured window blinds"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#001825]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
          changeSlide(deltaX > 0 ? -1 : 1);
        }
      }}
    >
      <div id="home-hero-slides" className="grid" aria-live={isRotating ? "off" : "polite"}>
        {slides.map((slide, index) => {
          const Heading = index === 0 ? "h1" : "h2";

          return (
            <div
              key={slide.label}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
              aria-hidden={index !== activeIndex}
              inert={index !== activeIndex}
              className={`relative col-start-1 row-start-1 flex min-h-[600px] items-center transition-opacity duration-700 ease-in-out motion-reduce:transition-none md:min-h-[620px] ${index === activeIndex ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                preload={index === 0}
                quality={90}
                sizes="(max-width: 767px) 1400px, (max-width: 1023px) 1100px, 100vw"
                className="object-cover"
                style={{ objectPosition: slide.imagePosition }}
              />
              <div
                className={
                  HALLOWEEN_THEME
                    ? "absolute inset-0 bg-gradient-to-r from-[rgba(20,12,30,0.78)] via-[rgba(20,12,30,0.4)] to-[rgba(20,12,30,0.08)]"
                    : "absolute inset-0 bg-gradient-to-r from-[rgba(0,24,37,0.82)] via-[rgba(0,24,37,0.62)] to-[rgba(0,24,37,0.2)]"
                }
              />

              <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 pb-28 pt-12 text-center md:items-start md:px-12 md:pb-28 md:pt-20 md:text-left">
                <div className="pb-7">
                  <div className="flex items-center rounded-[2px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-[17px] py-[9px] backdrop-blur-[2px]">
                    {HALLOWEEN_THEME ? (
                      <PumpkinIcon className="h-4 w-4 shrink-0" />
                    ) : (
                      <BadgeIcon />
                    )}
                    <span className="pl-2 text-xs font-bold uppercase leading-4 tracking-[0.6px] text-white">
                      Free Measuring &amp; Fitting in Dublin Ireland
                    </span>
                  </div>
                </div>

                <div className="max-w-[768px] pb-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.06),0_4px_1.5px_rgba(0,0,0,0.07)]">
                  <Heading className="max-w-[680px] text-[32px] font-bold leading-[42px] text-white md:text-[48px] md:leading-[62px]">
                    {slide.title}
                    <br />
                    {slide.subtitle}
                  </Heading>
                </div>

                <p className="max-w-[640px] pb-7 text-[15px] font-normal leading-7 text-[rgba(255,255,255,0.86)] md:text-[17px] md:leading-7">
                  {slide.description}
                </p>

                <div className="flex w-full max-w-[360px] flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
                  <Link
                    href="/contact"
                    className={[
                      "flex min-h-12 items-center justify-center rounded-[2px] px-7 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]",
                      HALLOWEEN_THEME
                        ? "bg-[#e8590c] hover:bg-[#d9480f] hover:shadow-[0_12px_24px_rgba(232,89,12,0.28)]"
                        : "bg-[#00aeef] hover:bg-[#009bd6] hover:shadow-[0_12px_24px_rgba(0,174,239,0.22)]",
                    ].join(" ")}
                  >
                    BOOK A FREE CONSULTATION
                  </Link>
                  <Link
                    href={slide.href}
                    className="flex min-h-12 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-7 text-center text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-white backdrop-blur-[2px] hover:border-white hover:bg-[rgba(255,255,255,0.16)]"
                  >
                    {slide.linkLabel}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {HALLOWEEN_THEME ? <div className="pointer-events-none absolute inset-0 z-20"><HeroHalloweenDecor /></div> : null}

      <div className="absolute inset-x-0 bottom-6 z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-12">
        <div className="flex items-center" role="group" aria-label="Choose a banner">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              aria-label={`Show banner ${index + 1}: ${slide.label}`}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-controls="home-hero-slides"
              className="flex h-11 w-9 items-center justify-center"
              onClick={() => setActiveIndex(index)}
            >
              <span className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${index === activeIndex ? "w-7 bg-white" : "w-2 bg-white/50"}`} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2" role="group" aria-label="Banner navigation">
          <button type="button" aria-label="Previous banner" aria-controls="home-hero-slides" className={controlClassName} onClick={() => changeSlide(-1)}>
            <NavigationArrow previous />
          </button>
          <button type="button" aria-label="Next banner" aria-controls="home-hero-slides" className={controlClassName} onClick={() => changeSlide(1)}>
            <NavigationArrow />
          </button>
        </div>
      </div>
    </section>
  );
}
