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

export default function TeamSlider() {
  return (
    <div className=" position-relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="0"
        loop={true}
        autoplay={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 0,
            // width: 760,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
            // width: 760,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
            width: 560,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 0,
            width: 760,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            width: 960,
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
        className="swiper-container teamslider"
      >
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teamSlide position-relative">
            <Image
              src={img}
              alt="Team 1"
              className="img-fluid teamImg"
              width={500}
              height={500}
            />
            <div className="team_contact_con">
              <div className="contact_inner">
                <a
                  href="#"
                  className="memName text-decoration-none font-heading text-white"
                >
                  <p className=" Vista_para_l m-0 mb-2">Ali Zahid</p>
                </a>
                <div className="designation teamsub pt-2">CEO</div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
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
  );
}
