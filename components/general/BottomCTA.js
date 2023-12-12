"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/assets/icons/callimg.svg";
export default function BottomCTA() {
  const xOne = useRef(null);
  const xTwo = useRef(null);
  const { scrollYProgress } = useScroll({
    target: xOne,
    offset: ["start center", "start end"],
  });
  const { scrollYProgress: scrollYProgressTwo } = useScroll({
    target: xTwo,
    offset: ["start center", "start end"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  const y = useTransform(
    scrollYProgressTwo,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "20%", "50%", "80%", "80%", "80%"]
  );
  const op = useTransform(
    scrollYProgressTwo,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.3, 0, 0, 0, 0]
  );

  return (
    <>
      <section className=" container-fluid">
        <div className="separator100 bg-black"></div>
      </section>
      <section ref={xOne} className="bottomCta_sec position-relative">
        <div ref={xTwo} className=" w-100 overflow-hidden position-relative">
          <div className="row justify-content-between z-3">
            <div className="col-12 col-md-6">
              <div className="text">
                <motion.p
                  className="bottomCTA_title"
                  style={{
                    x: x1,
                  }}
                >
                  MOMENTS
                </motion.p>
                <motion.p style={{ x: x2 }} className="bottomCTA_title">
                  STARTS
                </motion.p>
                <motion.p style={{ x: x3 }} className="bottomCTA_title">
                  HERE
                </motion.p>
              </div>
            </div>
            <div className="col-12 col-md-6 z-3">
              <div className="row">
                <div className="col-8">
                  <Link
                    href="/"
                    className="BottomCta_link text-decoration-none text-white  d-block"
                  >
                    <motion.div
                      style={{ y: y, opacity: op }}
                      whileHover={{ scale: 0.97 }}
                      className="BottomCta_link_inner d-flex flex-column justify-content-center align-content-center text-center position-relative"
                    >
                      <div className="icon position-absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          class="absolute top-[3vw] right-[3vw] -rotate-45"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M.87 12.314h21.757m0 0L11.314 1m11.313 11.314L11.314 23.627"
                          ></path>
                        </svg>
                      </div>
                      <div className="BottomCta_content">
                        <div>
                          <span className="font-link d-inline-block">
                            Lets Talk
                          </span>
                        </div>
                        <h2 className="vista_hos_title2">Inquire Today</h2>
                      </div>
                      <div className="BottomCta_img">
                        <Image alt="call us" src={img} />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="video_wrapper w-100 top-0 position-absolute h-100 w-100">
            <motion.video
              style={{ x: x2 }}
              className="w-100 top-0 position-absolute h-100 w-100"
              loop
              muted
              autoPlay
            >
              <source src="/assets/CtaBgVideo.MP4" />
            </motion.video>
          </div>
        </div>
      </section>
    </>
  );
}
