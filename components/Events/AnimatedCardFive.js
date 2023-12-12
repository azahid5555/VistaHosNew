"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FuzzyOverla from "../general/FuzzyOverlay";
import HeadingThree from "../general/HeadingThree";
import Link from "next/link";

const textMotion = {
  rest: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const imgCon = {
  rest: { margin: 0 },
  hover: {
    margin: "1.25rem 1.25rem clamp(6rem, 3.14286rem + 4.46429vw, 8.5rem)",
  },
};

export default function AnimatedCardFive(props) {
  return (
    <motion.section
      className="animatedCard_sec position-relative rounded overflow-hidden d-flex align-items-end"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link
        href={props.link}
        className=" position-absolute top-0 bottom-0 end-0 start-0 z-3"
      />
      <div className=" position-relative z-2 animatedCard_content">
        <HeadingThree text={props.title} />
        <div className="subcontent">
          <motion.p className=" Vista_para_sm m-0" variants={textMotion}>
            {props.para}
          </motion.p>
        </div>
      </div>
      <motion.div
        className="animatedCard_img_wrapper position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden rounded"
        variants={imgCon}
      >
        <div className=" position-absolute h-100 w-100 overflow-hidden">
          <div
            className=" position-absolute w-100 z-1"
            style={{ height: "120%" }}
          >
            <FuzzyOverla />
            <Image
              alt="Vista Hospitality"
              src={props.img}
              className=" position-absolute top-0 bottom-0 end-0 start-0 h-100 w-100 object-fit-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
