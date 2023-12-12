"use client";
import Image from "next/image";
import img from "@/public/assets/imgs/teamDemo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function CarouselInnerEvent(props) {
  return (
    <section className=" position-relative">
      <div className=" container-fluid ">
        <div className="row">
          <div className="col-12">
            <div className="position-relative">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="0"
                loop={true}
                autoplay={false}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 0,
                  },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
                className="swiper-container eventsCarousel"
              >
                {props.ImgArray.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="eventsCarouselSlides position-relative">
                      <Image src={img.img} alt="Team 1" className="img-fluid" />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
