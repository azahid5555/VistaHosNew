"use client";
import Image from "next/image";
import img1 from "@/public/assets/imgs/carousel2.webp";
import flower from "@/public/assets/icons/flowerIcon.svg";
import img2 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function AboutEventDetailTwo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <section
      className="photographer__details-section position-relative"
      ref={ref}
    >
      <div className="container-fluid vistaCon">
        <div className="row">
          <div className="col-12">
            <div className="photographer_detail-wrapper">
              <div className="photographer_detail-content">
                <div className="row justify-content-center">
                  <div className="col-11 col-md-5">
                    <div className="photographer_detail-left d-flex justify-content-start position-relative">
                      <div className="photographer--image position-relative">
                        <Image
                          alt="Vista Hospitality INN"
                          src={img1}
                          className="img-fluid object-fit-cover z-3"
                        />
                        <motion.div
                          className="flower-image z-1"
                          style={{ rotate: rotateValue }}
                        >
                          <Image
                            alt="Vista Hospitality INN"
                            className=" z-1"
                            src={flower}
                          />
                        </motion.div>
                      </div>
                      {/* d-md-block d-none */}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="photographer_detail-right">
                      <div className="photographer_detail-right-content d-flex justify-content-center flex-column gap-5">
                        <div className="upper--content d-flex justify-content-center flex-column gap-2">
                          <div className="row">
                            <div className="col-12">
                              <div className="sub--title">
                                <HeadingFourAnimated text="THE BEST OF THE BEST" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="main-title">
                                <HeadingTwo
                                  text="Enchanting Gala Evening"
                                  text2="Experience"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="description">
                                <p className="Vista_para_sm">
                                  Indulge in an evening of unparalleled elegance
                                  and sophistication at our annual dinner.
                                  Immerse yourself in a world of exquisite
                                  cuisine, captivating entertainment, and
                                  enchanting moments that will linger in your
                                  memories.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower--content">
                          <div className="photographer--image">
                            <Image
                              alt="Vista Hospitality INN"
                              className=" img-fluid"
                              src={img2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* !end of main row wrapper */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}