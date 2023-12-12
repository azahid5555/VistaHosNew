"use client";
import Image from "next/image";
import ArrowImg from "@/public/assets/icons/arrow-left.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TextMarqueeTwo() {
  const thirdText = useRef(null);
  const fothText = useRef(null);
  const sliderTwo = useRef(null);
  let xPercent = 0;
  let directionTow = -1;

  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScrollTwo = () => {
      const newScrollY = window.scrollY;
      directionTow = newScrollY > scrollY ? -1 : 1;
      scrollY = newScrollY;

      // console.log("Scroll Dir:", directionTow);

      // Add a basic animation for testing
      gsap.to(thirdText.current, { opacity: 1, duration: 0.5 });

      gsap.to([thirdText.current, fothText.current], {
        x: () => `${xPercent}%`,
        duration: 0.1, // Adjust the duration for smoother animation
        ease: "ease-in", // Experiment with different easing functions
      });

      gsap.to(".arrowimgTwo", {
        rotation: directionTow === -1 ? 0 : 180,
        duration: 0.5, // Adjust the duration for the rotation effect
      });
    };

    window.addEventListener("scroll", handleScrollTwo);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScrollTwo);
    };
  }, []);

  const animate = () => {
    gsap.set(thirdText.current, { x: xPercent + "%" });
    gsap.set(fothText.current, { x: xPercent + "%" });

    xPercent += 0.015 * directionTow;

    // Use modulo to loop the animation when it reaches -100 or 0
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent >= 0) {
      xPercent = -100;
    }

    requestAnimationFrame(animate);
  };

  return (
    <main className="position-relative overflow-hidden d-flex marqueeMain">
      <div className="sliderContainer">
        <div ref={sliderTwo} className="slider position-relative text-nowrap">
          <h2 className=" vista_hos_title2" ref={thirdText}>
            <span className="marquessText">Birthday Parties</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Sufi Nights</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Annual Dinner</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Hip Hop Parties</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Annual Meetings</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Corporate Dinner</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Charity Events</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Royal High Tae</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
          </h2>
          <h2 className=" vista_hos_title2" ref={fothText}>
            <span className="marquessText">Birthday Parties</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Sufi Nights</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Annual Dinner</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Hip Hop Parties</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Annual Meetings</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Corporate Dinner</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Charity Events</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
            <span className="marquessText">Royal High Tae</span>
            <span className="icon">
              <Image
                className="arrowimg arrowimgTwo"
                alt="arrow"
                src={ArrowImg}
              />
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
