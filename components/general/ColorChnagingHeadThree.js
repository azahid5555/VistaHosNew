"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import VistaBtn from "./VistaBtn";
export default function HomeAboutSec(props) {
  // const sentence =
  //   "Welcome to Vista Hospitality, where we redefine hospitality with elegance and innovation. From the enchanting Vista Marquess to the delightful Vista Luxury Sweets, each moment is crafted with passion. Join us in creating unforgettable memories at Vista, where your journey is our priority.";
  const sentence = props.text;
  const words = sentence.split(" ");
  // Create a ref for the h1 element
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize the ScrollTrigger for the animation
    ScrollTrigger.defaults({
      markers: false, // Set to true for debugging markers
    });

    // Define the animation for changing the color
    gsap.to(h1Ref.current.children, {
      stagger: 0.2,
      color: "white", // Final color
      scrollTrigger: {
        trigger: "#animecolorheadingCon>h3>span", // Trigger element ID
        start: "top 90%", // Animation starts when the top of the trigger hits the center of the viewport
        end: "top 50%", // Animation ends when the bottom of the trigger hits the center of the viewport
        scrub: 0.8, // Smoothly transition the animation
      },
    });
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <div id="animecolorheadingCon" className="col-11 col-sm-10 text-center">
          <h3
            ref={h1Ref}
            className="vista_hos_title3 text-center  font-heading-regular lh-sm chnagecolorHeading"
          >
            {words.map((word, index) => (
              <span key={index}>{word + " "}</span>
            ))}
          </h3>
          <div className="ceo_details">
            <div className="name">
              <p className="Vista_para_sm m-0 mt-4">Ch Salahudin</p>
              <p className="Vista_para_sm font-link fs-6 m-0">
                CEO VISTA GROUP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-4">
          <VistaBtn text="Make an inquiry" link="/" />
        </div>
      </div>
    </>
  );
}
