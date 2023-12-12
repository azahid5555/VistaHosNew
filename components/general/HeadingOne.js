"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const mainAnimation = {
  hidden: {
    opacity: 0,
    y: 1.6,
    x: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const defaultAnimation = {
  hidden: {
    opacity: 0,
    // y: 20,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.1,
    },
  },
};
export default function HeadingOne(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div>
      {/* <h2 className="vista_hos_title2">
        {props.text} <span>{props.span}</span>
      </h2> */}
      <motion.h1
        ref={ref}
        className=" vista_hos_title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {props.text.split(" ").map((word, key) => (
          <motion.span
            key={key}
            className=" d-inline-block"
            variants={mainAnimation}
          >
            {word.split("").map((char, i) => (
              <motion.span
                className="d-inline-block"
                variants={mainAnimation}
                key={i}
              >
                {char}
              </motion.span>
            ))}
            <span className=" d-inline-block">&nbsp;</span>
          </motion.span>
        ))}
        {props.text2 &&
          props.text2.split(" ").map((word, key) => (
            <motion.span
              key={key}
              className=" d-inline-block clrPrime"
              variants={mainAnimation}
            >
              {word.split("").map((char, i) => (
                <motion.span
                  className="d-inline-block"
                  variants={mainAnimation}
                  key={i}
                >
                  {char}
                </motion.span>
              ))}
              <span className=" d-inline-block">&nbsp;</span>
            </motion.span>
          ))}
      </motion.h1>
    </div>
  );
}
