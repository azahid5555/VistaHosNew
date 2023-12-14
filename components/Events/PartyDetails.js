"use client";
import Image from "next/image";
import logoimage from "@/public/assets/imgs/vIcon.webp";
import HeadingThree from "../general/HeadingThree";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import dotsImg from "@/public/assets/imgs/dots.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
export default function PartyDetails(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <section
      id="Event__moments-section  "
      className="Partyoverview__section position-relative"
      ref={ref}
    >
      <motion.div style={{ y: y }} className="dotsImg position-absolute">
        <Image alt="icons" src={dotsImg} className="position-absolute " />
      </motion.div>
      <div className="container-fluid vistaCon">
        <div className="row">
          <div className="col-12">
            <div className="Event__moments-content w-100">
              <div className="row mb-4 justify-content-center align-items-center">
                <div className="col-2">
                  <div className="vista-image text-center">
                    <Image
                      alt="img"
                      src={logoimage}
                      className="img-fluid object-fit-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="moment_headline  text-center">
                <HeadingThree text={props.mainTitle} />
              </div>

              <div className="row gap-3 justify-content-center align-items-center pt-5">
                <div className="col-xl-5 col-12">
                  <div className="moment__sub-headline d-flex flex-column gap-4">
                    <HeadingFourAnimated text={props.subtitle} />

                    <div className="row g-0 flex-start justify-content-center align-items-center py-1">
                      <div className="col-1 line__wrapper w-100 text-start">
                        <div className="line w-100 text-center" />
                      </div>
                    </div>

                    <p className="Vista_para_sm text-lg-start text-center text-white">
                      {props.para}
                    </p>
                  </div>
                </div>

                <div className="col-xl-6 col-12">
                  <div className="right__side-wrapper">
                    <div className="row gap-xl-0 gap-4 justify-content-center justify-content-lg-start">
                      <div className="col-xl-6 col-5 pb-xl-2 pb-0">
                        <HeadingFourAnimated text2={props.feature1} />
                        <p className="Vista_para_sm text-xl-start text-center text-white">
                          {props.feature1_para}
                        </p>
                      </div>

                      <div className="col-xl-6 col-5 pb-xl-2 pb-0">
                        <HeadingFourAnimated text2={props.feature2} />

                        <p className="Vista_para_sm text-white text-xl-start text-center">
                          {props.feature2_para}
                        </p>
                      </div>

                      <div className="col-xl-6 col-5 ">
                        <HeadingFourAnimated text2={props.feature3} />

                        <p className="Vista_para_sm text-white text-xl-start text-center">
                          {props.feature3_para}
                        </p>
                      </div>

                      <div className="col-xl-6 col-5">
                        <HeadingFourAnimated text2={props.feature4} />

                        <p className="Vista_para_sm text-white text-xl-start text-center">
                          {props.feature4_para}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
