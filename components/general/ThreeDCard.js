"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import HeadingThree from "./HeadingThree";
import Link from "next/link";
export default function ThreeDCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href="/">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className=" position-relative threeDCon"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className=" position-absolute inset-4 d-flex gap-3 justify-content-center align-items-center flex-column rounded shadow threeDCardInner"
        >
          {/* <icon
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl fs-1"
        /> */}
          <div className=" threeDCard_img text-center">
            <Image
              className=" img-fluid"
              style={{
                transform: "translateZ(75px)",
              }}
              alt="icons"
              src={props.icon}
            />
          </div>
          {/* <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
          <HeadingThree
            text={props.title}
            style={{
              transform: "translateZ(50px)",
            }}
          />
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className=" Vista_para_sm text-center"
          >
            {props.para}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
