"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
// import HeadingThree from "./HeadingThree";
import Link from "next/link";
import HeadingThree from "../general/HeadingThree";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
export default function ThreeDCardTwo(props) {
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
        <HeadingThree
          text={props.title}
          style={{
            transform: "translateZ(50px)",
          }}
        />
        {props.packageList_1 && (
          <ul
            style={{
              transform: "translateZ(50px)",
            }}
            className="list-inline list-unstyled mb-4 Vista_para_sm text-center d-flex justify-content-center flex-column align-items-center"
          >
            {props.packageList_1.map((li) => (
              <li className="d-flex align-items-center  " key={li.id}>
                <i className="bi bi-check fs-3 clrPrime" />
                <HeadingFourAnimated text={li.package_1} />
              </li>
            ))}
          </ul>
        )}
        {/* for package list-2 for package list-3 */}
        {props.packageList_2 && (
          <ul
            style={{
              transform: "translateZ(50px)",
            }}
            className="list-inline list-unstyled mb-4 Vista_para_sm text-center d-flex justify-content-center flex-column align-items-center"
          >
            {props.packageList_2.map((li) => (
              <li className="d-flex align-items-center  " key={li.id}>
                <i className="bi bi-check fs-3 clrPrime" />
                <HeadingFourAnimated text={li.package_2} />
              </li>
            ))}
          </ul>
        )}
        {/* for package list-2 for package list-3 */}
        {props.packageList_3 && (
          <ul
            style={{
              transform: "translateZ(50px)",
            }}
            className="list-inline list-unstyled mb-4 Vista_para_sm text-center d-flex justify-content-center flex-column align-items-center"
          >
            {props.packageList_3.map((li) => (
              <li className="d-flex align-items-center  " key={li.id}>
                <i className="bi bi-check fs-3 clrPrime" />
                <HeadingFourAnimated text={li.package_3} />
              </li>
            ))}
          </ul>
        )}
        {/* for package list-2 for package list-3 */}
      </div>
    </motion.div>
  );
}
