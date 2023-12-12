"use client";
import Image from "next/image";
import ArrowImg from "@/public/assets/icons/star.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TextMarqueeOneLine(props) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      direction = newScrollY > scrollY ? 1 : -1;
      scrollY = newScrollY;

      // Log the direction to the console
      // console.log("Scroll Direction:", direction);
      // console.log("xP:", xPercent);

      // Add a basic animation for testing
      gsap.to(firstText.current, { opacity: 1, duration: 0.1 });

      gsap.to([firstText.current, secondText.current], {
        x: () => `${xPercent}%`,
        duration: 1, // Adjust the duration for smoother animation
        ease: "power2.inOut", // Experiment with different easing functions
      });
      // Rotate the arrow icons based on the scroll direction
      gsap.to(".arrowimg", {
        rotation: direction === 1 ? 0 : 180,
        duration: 0.5, // Adjust the duration for the rotation effect
      });
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animate = () => {
    gsap.set(firstText.current, { x: xPercent + "%" });
    gsap.set(secondText.current, { x: xPercent + "%" });

    xPercent += 0.015 * direction;

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
        <div ref={slider} className="slider position-relative text-nowrap">
          <h2 className=" vista_hos_title2" ref={firstText}>
            {props.text.map((text, i) => (
              <>
                <span className="marquessText">{text}</span>
                <span className="icon">
                  <Image className="arrowimg" alt="arrow" src={ArrowImg} />
                </span>
              </>
            ))}
          </h2>
          <h2 className=" vista_hos_title2" ref={secondText}>
            {props.text.map((text, i) => (
              <>
                <span className="marquessText">{text}</span>
                <span className="icon">
                  <Image className="arrowimg" alt="arrow" src={ArrowImg} />
                </span>
              </>
            ))}
          </h2>
        </div>
      </div>
    </main>
  );
}
