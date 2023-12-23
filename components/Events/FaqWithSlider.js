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

export default function FaqWithSlider(props) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="why__choose--section faq--section position-relative">
      <div className=" container-fluid vistaCon">
        <div className="row gap-lg-0 gap-5 position-relative">
          <div className="col-lg-6 d-flex justify-content-center align-items-center col-12 p-lg-4 p-md-0">
            <div className="content--wrapper col-12 col-lg-12">
              <div className="card__wrapper pb-5">
                <div className="upper--content">
                  <h5 className="mb-2 h5 vista_hos_title5 faq-headline">
                    <span className="secondary--color font-link">
                      All the answers
                    </span>
                  </h5>
                </div>
              </div>
              <FAQSec questions={props.questions} />
              {/* !end of 1st card wrapper */}
            </div>
          </div>
          <div className="column right-column col-12 col-md-6">
            <div className="description swiper-container faqslider_con">
              <div className="overflow-hidden position-relative">
                <FuzzyOverla />
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
                  {props.carouselArray &&
                    props.carouselArray.map((img, i) => (
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
