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
import HeadingTwo from "../general/HeadingTwo";
export default function AboutStickySec(props) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="wedding__FAQ-section">
      <div className="container-fluid vistaCon position-relative z-2 pt-0">
        <div className="project project-a Event__faq-wrapper py-5 row">
          <div className=" col-12 col-md-6">
            {props.StickyContent.map((list, i) => (
              <div className="faq__left-wrapper mt-3 pt-0 pt-md-3" key={i}>
                <div className="faq__inner-content px-2 py-3 px-sm-5 py-sm-3 p-md-5">
                  <div className="faq-headline text-center faeture__content-wrapper">
                    <HeadingTwo text={list.headText1} text2={list.headText2} />
                    <p className=" wedding_story-desc text-center Vista_para_sm text-paragraph text-white">
                      {list.para}
                    </p>
                  </div>
                </div>
                {i !== props.StickyContent.length - 1 && (
                  <div className="skew__line-wrapper text-center faeture__content-wrapper">
                    <div className="just-skewing" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="column right-column col-12 col-md-6">
            <div className="description swiper-container">
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
                  {props.carouselArray.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        alt="Our Story"
                        src={img.img}
                        className=" img-fluid"
                      />
                    </SwiperSlide>
                  ))}
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
        </div>
      </div>
    </section>
  );
}
