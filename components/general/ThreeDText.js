"use client";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useEffect } from "react";

export default function ThreeDText(props) {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const titles = gsap.utils.toArray(".threeDAnimatedHeading");
    titles.forEach((title, index) => {
      const tl = gsap.timeline({
        repeat: -1, // -1 means infinite loop
        repeatDelay: 11.5, // Adjust the delay before restarting the animation
      });
      const splitTitle = new SplitText(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 40,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -40,
          rotateX: 90,
          stagger: 0.02,
        },
        "<3"
      );

      // Adjust the delay for each heading
      tl.delay(index * 3); // Change the value as needed
    });
  }, []);

  return (
    <div className="">
      <div className="text-wrapper threeDtext ">
        {/* <h1 className="vista_hos_title text-center">The Destination</h1> */}
        <div className="d d-flex justify-content-center align-items-center">
          <h1 className="vista_hos_title w-auto m-0 me-3">of</h1>
          <div>
            <h1 className="vista_hos_title threeDAnimatedHeading">Memories</h1>
            <h1 className="vista_hos_title threeDAnimatedHeading">Happiness</h1>
            <h1 className="vista_hos_title threeDAnimatedHeading">Goodness</h1>
            <h1 className="vista_hos_title threeDAnimatedHeading">Melodies</h1>
            <h1 className="vista_hos_title threeDAnimatedHeading">New Life</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
