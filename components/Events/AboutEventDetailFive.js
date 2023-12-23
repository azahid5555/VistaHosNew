"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import FuzzyOverla from "../general/FuzzyOverlay";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import FAQSec from "../general/FAQSec";
import HeadingTwo from "../general/HeadingTwo";
import VistaBtn from "../general/VistaBtn";
import VistaBtnLight from "../general/VistaBtnLight";

export default function FaqWithSlider(props) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className={props.className}>
      <div className="column right-column col-12 col-md-5 col-lg-5">
        <div className="description swiper-container faqslider_con">
          <div className="overflow-hidden position-relative">
            <FuzzyOverla />
            {/* <Image alt="Our Story" src={img} className=" img-fluid" /> */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              effect={"fade"}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              modules={[EffectFade, Autoplay, Pagination]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  alt="Our Story"
                  src={props.img1}
                  className=" img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Our Story"
                  src={props.img2}
                  className=" img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Our Story"
                  src={props.img3}
                  className=" img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Our Story"
                  src={props.img4}
                  className=" img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Our Story"
                  src={props.img5}
                  className=" img-fluid"
                />
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="col-lg-6 d-flex flex-column col-md-7 mt-5 mt-md-0 ">
        <div className="sub--title pb-2">
          <span className="text-uppercase Vista_para_ssm">
            {props.subtitle}
          </span>
        </div>

        <HeadingTwo text={props.mainTitle} />

        {/* !lower seprator section */}
        <div className="d-flex gap-3 align-items-center pt-2">
          <h6 className="h6 text-white">{props.feature1}</h6>
          <p className="text-white">|</p>
          <div className="icon-wrappers d-flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffce56"
              height={16}
              width={18}
              viewBox="0 0 576 512"
            >
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
              <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
            </svg>
            <h6 className="h6 text-white"> {props.feature2}</h6>
          </div>
        </div>
        {/* !lower seprater section neded */}
        {/* !line seprater started   */}
        <div className="col-12 py-3 light-black">
          <div className="line" />
        </div>
        {/* !line seprater ended   */}
        <p className="Vista_para_sm text-white mt-4 mt-lg-3">{props.para}</p>
        <div className="button-wrapper d-flex flex-sm-row flex-column pt-3 gap-3">
          <VistaBtn text={props.btntext1} link={props.link1} />
          <VistaBtnLight text={props.btntext2} link={props.link2} />
        </div>
        {/* !lower seprater section neded */}
      </div>
    </div>
  );
}
