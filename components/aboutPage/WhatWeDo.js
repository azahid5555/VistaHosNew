"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";

export default function WhatWeDo() {
  const swiperRef = useRef();

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;

    const handleSlideChange = () => {
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="whatwedo-sec position-relative bg-dark60 VistaSec_topBorder_grade">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row align-items-center">
          <div className="col-5">
            <h5 className="subheading vista_hos_title5 clrSec">What We Do</h5>
            <HeadingTwo text="Event Mastery" />
          </div>
          <div className="col-6">
            <p className="Vista_para_sm">
              Journey into event excellence with VistaHospitality. Crafting
              moments beyond expectations, creating memories for a lifetime.
            </p>
          </div>
          <div className="col-1 d-flex align-items-center">
            <div className="whatwedo-slider-control d-flex justify-content-flex-end position-relative">
              <button
                className={`swiper_prev ${isPrevDisabled ? "disable" : ""}`}
                onClick={slidePrev}
              >
                <div className="slider-prev me-1">
                  <i className="bi bi-arrow-left text-dark" />
                </div>
              </button>
              <button
                className={`swiper_next ${isNextDisabled ? "disable" : ""}`}
                onClick={slideNext}
              >
                <div className="slider-next">
                  <i className="bi bi-arrow-right text-dark" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="row gap-4 mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            navigation={false}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper position-relative"
          >
            <SwiperSlide>
              <Link
                href="/"
                className="col whatwedo-col-card text-decoration-none"
              >
                <div className="whatwedo-a-svg-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="10px"
                    y="10px"
                    width={55}
                    height="54.999"
                    fill="#fab91d"
                    viewBox="0 0 93.4 93.4"
                    style={{ enableBackground: "new 0 0 93.4 93.4" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M87.9,77.2H5.3c-2.6,0-4.7-2.1-4.7-4.7V22.2c0-2.6,2.1-4.7,4.7-4.7h82.6c2.6,0,4.7,2.1,4.7,4.7v50.3   C92.6,75.1,90.5,77.2,87.9,77.2z M5.3,19.5c-1.5,0-2.7,1.2-2.7,2.7v50.3c0,1.5,1.2,2.7,2.7,2.7h82.6c1.5,0,2.7-1.2,2.7-2.7V22.2   c0-1.5-1.2-2.7-2.7-2.7C87.9,19.5,5.3,19.5,5.3,19.5z" />
                    </g>
                    <g>
                      <path d="M27.5,15.9H9.6v-5.6h17.9V15.9z M11.6,13.9h13.9v-1.6H11.6V13.9z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                    <g>
                      <path d="M27.9,43.4H9.2V25.1h18.7C27.9,25.1,27.9,43.4,27.9,43.4z M11.2,41.4h14.7V27.1H11.2V41.4z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                  </svg>
                </div>
                <div className="whatwedo-col-card-innercontent mt-3">
                  <HeadingFourAnimated text="Annual Dinner" />
                  <p className="Vista_para_cw mt-3">
                    Elevate your evenings with our annual dinners, where
                    exquisite cuisine meets unforgettable moments of celebration
                  </p>
                  <i className="bi bi-arrow-right clrSec" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="/"
                className="col whatwedo-col-card text-decoration-none"
              >
                <div className="whatwedo-a-svg-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="10px"
                    y="10px"
                    width={55}
                    height="54.999"
                    fill="#fab91d"
                    viewBox="0 0 93.4 93.4"
                    style={{ enableBackground: "new 0 0 93.4 93.4" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M87.9,77.2H5.3c-2.6,0-4.7-2.1-4.7-4.7V22.2c0-2.6,2.1-4.7,4.7-4.7h82.6c2.6,0,4.7,2.1,4.7,4.7v50.3   C92.6,75.1,90.5,77.2,87.9,77.2z M5.3,19.5c-1.5,0-2.7,1.2-2.7,2.7v50.3c0,1.5,1.2,2.7,2.7,2.7h82.6c1.5,0,2.7-1.2,2.7-2.7V22.2   c0-1.5-1.2-2.7-2.7-2.7C87.9,19.5,5.3,19.5,5.3,19.5z" />
                    </g>
                    <g>
                      <path d="M27.5,15.9H9.6v-5.6h17.9V15.9z M11.6,13.9h13.9v-1.6H11.6V13.9z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                    <g>
                      <path d="M27.9,43.4H9.2V25.1h18.7C27.9,25.1,27.9,43.4,27.9,43.4z M11.2,41.4h14.7V27.1H11.2V41.4z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                  </svg>
                </div>
                <div className="whatwedo-col-card-innercontent mt-3">
                  <HeadingFourAnimated text="Annual Dinner" />
                  <p className="Vista_para_cw mt-3">
                    Strategize for success in our meticulously designed spaces,
                    fostering collaboration and shared achievements
                  </p>
                  <i className="bi bi-arrow-right clrSec" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="/"
                className="col whatwedo-col-card text-decoration-none"
              >
                <div className="whatwedo-a-svg-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="10px"
                    y="10px"
                    width={55}
                    height="54.999"
                    fill="#fab91d"
                    viewBox="0 0 93.4 93.4"
                    style={{ enableBackground: "new 0 0 93.4 93.4" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M87.9,77.2H5.3c-2.6,0-4.7-2.1-4.7-4.7V22.2c0-2.6,2.1-4.7,4.7-4.7h82.6c2.6,0,4.7,2.1,4.7,4.7v50.3   C92.6,75.1,90.5,77.2,87.9,77.2z M5.3,19.5c-1.5,0-2.7,1.2-2.7,2.7v50.3c0,1.5,1.2,2.7,2.7,2.7h82.6c1.5,0,2.7-1.2,2.7-2.7V22.2   c0-1.5-1.2-2.7-2.7-2.7C87.9,19.5,5.3,19.5,5.3,19.5z" />
                    </g>
                    <g>
                      <path d="M27.5,15.9H9.6v-5.6h17.9V15.9z M11.6,13.9h13.9v-1.6H11.6V13.9z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                    <g>
                      <path d="M27.9,43.4H9.2V25.1h18.7C27.9,25.1,27.9,43.4,27.9,43.4z M11.2,41.4h14.7V27.1H11.2V41.4z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                  </svg>
                </div>
                <div className="whatwedo-col-card-innercontent mt-3">
                  <HeadingFourAnimated text="Annual Dinner" />
                  <p className="Vista_para_cw mt-3">
                    Mark milestones with timeless celebrations, tailored to your
                    vision, creating memories that last a lifetime
                  </p>
                  <i className="bi bi-arrow-right clrSec" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="/"
                className="col whatwedo-col-card text-decoration-none"
              >
                <div className="whatwedo-a-svg-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="10px"
                    y="10px"
                    width={55}
                    height="54.999"
                    fill="#fab91d"
                    viewBox="0 0 93.4 93.4"
                    style={{ enableBackground: "new 0 0 93.4 93.4" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M87.9,77.2H5.3c-2.6,0-4.7-2.1-4.7-4.7V22.2c0-2.6,2.1-4.7,4.7-4.7h82.6c2.6,0,4.7,2.1,4.7,4.7v50.3   C92.6,75.1,90.5,77.2,87.9,77.2z M5.3,19.5c-1.5,0-2.7,1.2-2.7,2.7v50.3c0,1.5,1.2,2.7,2.7,2.7h82.6c1.5,0,2.7-1.2,2.7-2.7V22.2   c0-1.5-1.2-2.7-2.7-2.7C87.9,19.5,5.3,19.5,5.3,19.5z" />
                    </g>
                    <g>
                      <path d="M27.5,15.9H9.6v-5.6h17.9V15.9z M11.6,13.9h13.9v-1.6H11.6V13.9z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                    <g>
                      <path d="M27.9,43.4H9.2V25.1h18.7C27.9,25.1,27.9,43.4,27.9,43.4z M11.2,41.4h14.7V27.1H11.2V41.4z" />
                    </g>
                    <g>
                      <path d="M62.7,65.5c-10,0-18.2-8.1-18.2-18.2c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2C80.9,57.3,72.7,65.5,62.7,65.5z    M62.7,31.2c-8.9,0-16.2,7.2-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2s16.2-7.2,16.2-16.2S71.6,31.2,62.7,31.2z" />
                    </g>
                  </svg>
                </div>
                <div className="whatwedo-col-card-innercontent mt-3">
                  <HeadingFourAnimated text="Annual Dinner" />
                  <p className="Vista_para_cw mt-3">
                    Mark milestones with timeless celebrations, tailored to your
                    vision, creating memories that last a lifetime
                  </p>
                  <i className="bi bi-arrow-right clrSec" />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
