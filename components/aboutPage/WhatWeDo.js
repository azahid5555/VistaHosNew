"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import Image from "next/image";

import icon1 from "@/public/assets/icons/whatwedo1.svg";
import icon2 from "@/public/assets/icons/whatwedo2.svg";
import icon3 from "@/public/assets/icons/whatwedo3.svg";
import icon4 from "@/public/assets/icons/whatwedo4.svg";
import icon5 from "@/public/assets/icons/whatwedo5.svg";
import icon6 from "@/public/assets/icons/whatwedo6.svg";
import icon7 from "@/public/assets/icons/whatwedo7.svg";
import icon8 from "@/public/assets/icons/whatwedo8.svg";
import icon9 from "@/public/assets/icons/whatwedo9.svg";
import icon10 from "@/public/assets/icons/whatwedo10.svg";
import icon11 from "@/public/assets/icons/whatwedo11.svg";
import icon12 from "@/public/assets/icons/whatwedo12.svg";
import icon13 from "@/public/assets/icons/whatwedo13.svg";
import icon14 from "@/public/assets/icons/whatwedo14.svg";

const whatweDo = [
  {
    icon: icon1,
    title: "Wedding Event",
    desc: "Experience the magic of love and celebration with our meticulously crafted wedding events, where every detail is tailored to create unforgettable moments of joy and togetherness.",
    link: "/events/wedding-event",
  },
  {
    icon: icon14,
    title: "Wedding Photography",
    desc: "Capture the essence of your special day with our exquisite Wedding Photography. Our skilled photographers craft timeless moments that tell your unique love story.",
    link: "/events/wedding-event/wedding-photography",
  },
  {
    icon: icon3,
    title: "Corporate Events",
    desc: "Immerse in professional sophistication at our Corporate Events. Elevate gatherings with tailored settings, seamless service, and a touch of corporate finesse.",
    link: "/events/corporate-events",
  },
  {
    icon: icon5,
    title: "Annual Dinner",
    desc: "Experience elegance and sophistication at Vista Hospitality's Annual Dinner. Indulge in a night of culinary delights and impeccable service, creating unforgettable memories.",
    link: "/events/corporate-events/annual-dinner",
  },
  {
    icon: icon8,
    title: "Annual Meetings",
    desc: "Transform your annual meetings into inspiring gatherings with Vista Hospitality's sophisticated venues and unparalleled service, ensuring success and productivity in every session.",
    link: "/events/corporate-events/annual-meetings",
  },
  {
    icon: icon2,
    title: "Charity Events",
    desc: "Join us at Vista Hospitality as we champion causes that matter. Elevate your charitable events with our commitment to making a meaningful difference.",
    link: "/events/corporate-events/charity-events",
  },
  {
    icon: icon4,
    title: "Corporate Dinner Events",
    desc: "Experience refinement and seamless service at Vista Hospitality's Corporate Dinner Events. Elevate your gatherings with exquisite dining and impeccable hospitality.",
    link: "/events/corporate-events/corporate-dinner-events",
  },
  {
    icon: icon6,
    title: "Party Events",
    desc: "Discover unparalleled joy and celebration at Vista Hospitality's Party Events. Immerse yourself in unforgettable moments filled with laughter, entertainment, and cherished memories.",
    link: "/events/party-events",
  },
  {
    icon: icon3,
    title: "Royal High Tea Party",
    desc: "Indulge in regal elegance with Vista Hospitality's Royal High Tea parties, where sophistication meets delightful flavors in a refined setting, creating a truly luxurious experience.",
    link: "/events/party-events/royal-hightea-party",
  },
  {
    icon: icon10,
    title: "Hip Hop Party",
    desc: "Experience the rhythm and energy at Vista Hospitality's Hip Hop Party, where beats and vibes collide for an electrifying celebration like no other.",
    link: "/events/party-events/hiphop-party",
  },
  {
    icon: icon11,
    title: "Birthday Party",
    desc: "Make your birthday an unforgettable celebration with Vista Hospitality's tailored party experiences. From themed décor to delightful entertainment, create cherished memories on your special day.",
    link: "/events/party-events/birthday-party",
  },
  {
    icon: icon7,
    title: "Musical Concert",
    desc: "Experience the magic of live music at Vista Hospitality's Musical Concerts. Immerse yourself in captivating performances amidst an ambiance of pure musical delight.",
    link: "/events/public-events/musical-concert",
  },
  {
    icon: icon13,
    title: "Sufi Night",
    desc: "Experience the enchantment of Sufi Night with Vista Hospitality, where soulful melodies and mystical rhythms create an unforgettable evening of spiritual resonance and cultural richness.",
    link: "/events/public-events/sufi-night",
  },
  {
    icon: icon12,
    title: "Festivals Event",
    desc: "Vista Hospitality: Where Festivities Flourish. Experience vibrant celebrations curated with precision and joy.",
    link: "/events/public-events/festivals-event",
  },
  {
    icon: icon9,
    title: "Model Photography",
    desc: "Vista Hospitality offers exquisite model photography services, capturing elegance and style in every shot. Elevate your portfolio with our professional and tailored photography expertise.",
    link: "/events/public-events/model-photography",
  },
];

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
          <div className="col-12 col-md-3 col-lg-3">
            <h5 className="subheading vista_hos_title5 clrSec">What We Do</h5>
            <HeadingTwo text="Event Mastery" />
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <p className="Vista_para_sm">
              Journey into event excellence with VistaHospitality. Crafting
              moments beyond expectations, creating memories for a lifetime.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 d-flex align-items-center justify-content-end">
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
        <div className="row gap-4 mt-5 px-3 px-md-0">
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
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper position-relative"
          >
            {whatweDo.map((slider, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={slider.link}
                  className="col whatwedo-col-card text-decoration-none"
                >
                  <div className="whatwedo-a-svg-link d-flex justify-content-start">
                    <Image alt="" src={slider.icon} />
                  </div>
                  <div className="whatwedo-col-card-innercontent mt-3">
                    <HeadingFourAnimated text={slider.title} />
                    <p className="Vista_para_cw mt-3">{slider.desc}</p>
                    <i className="bi bi-arrow-right clrSec" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
