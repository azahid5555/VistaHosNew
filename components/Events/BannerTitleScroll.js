"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function BannerTitleScroll(props) {
  const xOne = useRef(null);
  const { scrollYProgress } = useScroll({
    target: xOne,
    offset: ["start start", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-120%", "-90%"]);
  return (
    <section
      ref={xOne}
      className="bottomCta_sec position-relative BannerTitleScroll"
    >
      <div className=" w-100 overflow-hidden position-relative">
        <div className="row justify-content-between z-3">
          <div className="col-12 col-md-12">
            <div className="text position-relative">
              <div className="titleCon">
                <motion.p
                  className="bottomCTA_title line-h-2"
                  style={{ x: x1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <span>{props.title1} &nbsp;</span>
                  <span>{props.title1} &nbsp;</span>
                  <span>{props.title1} &nbsp;</span>
                </motion.p>
              </div>
              <div className="titleCon">
                <motion.p
                  style={{ x: x2 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bottomCTA_title line-h-2"
                >
                  <span>{props.title2} &nbsp;</span>
                  <span>{props.title2} &nbsp;</span>
                  <span>{props.title2} &nbsp;</span>
                </motion.p>
              </div>
              {/* <div>
                <p style={{}} className="bottomCTA_title">
                  <span>START HERE</span>
                  <span>START HERE</span>
                  <span>START HERE</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="video_wrapper w-100 top-0 position-absolute h-100 w-100">
          <video
            style={{}}
            className="w-100 top-0 position-absolute h-100 w-100"
            loop
            muted
            autoPlay
          >
            <source src="/assets/CtaBgVideo.MP4" />
          </video>
        </div>
      </div>
    </section>
  );
}
