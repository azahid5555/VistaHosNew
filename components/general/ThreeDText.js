"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Memories",
  },
  {
    id: 2,
    content: "Happiness",
  },
  {
    id: 3,
    content: "Goodness",
  },
  {
    id: 4,
    content: "Melodies",
  },
  {
    id: 5,
    content: "New Life",
  },
];

export default function ThreeDText(props) {
  const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   gsap.registerPlugin(SplitText);

  //   const titles = gsap.utils.toArray(".threeDAnimatedHeading");
  //   titles.forEach((title, index) => {
  //     const tl = gsap.timeline({
  //       repeat: -1, // -1 means infinite loop
  //       repeatDelay: 11.5, // Adjust the delay before restarting the animation
  //     });
  //     // const splitTitle = new SplitText(title);
  //     const splitTitle = title.textContent.split(" ");

  //     tl.from(
  //       splitTitle.chars,
  //       {
  //         opacity: 0,
  //         y: 40,
  //         rotateX: -90,
  //         stagger: 0.02,
  //       },
  //       "<"
  //     ).to(
  //       splitTitle.chars,
  //       {
  //         opacity: 0,
  //         y: -40,
  //         rotateX: 90,
  //         stagger: 0.02,
  //       },
  //       "<3"
  //     );

  //     // Adjust the delay for each heading
  //     tl.delay(index * 3); // Change the value as needed
  //   });
  // }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="">
      <div className="text-wrapper threeDtext ">
        <div className="d d-flex justify-content-center align-items-center position-relative">
          <div className="threeDAnimatedHeading_con w-100 d-flex justify-content-center">
            <AnimatePresence>
              <motion.h1
                key={items[index].id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut" }}
                style={{ position: "absolute" }}
                className="vista_hos_title threeDAnimatedHeading"
              >
                {items[index].content}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
