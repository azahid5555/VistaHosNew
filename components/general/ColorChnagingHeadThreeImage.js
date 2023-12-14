"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import VistaBtn from "./VistaBtn";
import logoimage from "@/public/assets/imgs/vIcon.webp";
import HeadingFourAnimated from "./HeadingFourAnimated";
export default function ColorChnagingHeadThreeImage(props) {
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
    <section className="VistaSec_topBorder_grade position-relative bg-dark60 homeAboutSec">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-center">
          <div id="animecolorheadingCon" className="col-10 text-center">
            {/* now adding the above content here */}
            <div className="row justify-content-center align-items-center">
              <div className="vista-image col-2">
                <Image
                  alt="vistalogo_image"
                  src={logoimage}
                  className=" img-fluid mb-4"
                />
              </div>
            </div>
            <h4 className="moment_headline--text text-center h4 text-white mb-2">
              {/* <HeadingTwo text={props.mainTitle} text2={props.mainTitleWord} /> */}
              <HeadingFourAnimated
                text={props.mainTitle}
                text2={props.mainTitleWord}
              />
            </h4>
            {/*now ending the above content here  */}

            <h3
              ref={h1Ref}
              className="vista_hos_title3 text-center  font-heading-regular lh-sm chnagecolorHeading"
            >
              {words.map((word, index) => (
                <span key={index}>{word + " "}</span>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
