import "@/styles/style.css";
import Banner from "@/components/general/Banner";
import { PageWrapper } from "@/components/general/PageWrapper";
import AboutUs from "@/components/aboutPage/AboutUs";
import WhatWeDo from "@/components/aboutPage/WhatWeDo";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";
import ReservationSec from "@/components/general/ReservationSec";
import TeamSection from "@/components/general/TeamSection";
import bannerImg from "@/public/assets/imgs/vista_hospitality_Inn_1.webp";

import BlogSec from "@/components/general/BlogSec";
import BottomCTA from "@/components/general/BottomCTA";

import img1 from "@/public/assets/imgs/vista_hospitality_Inn_1.webp";
import img2 from "@/public/assets/imgs/vista_hospitality_Inn_2.webp";
import img3 from "@/public/assets/imgs/vista_hospitality_Inn_3.webp";
import img4 from "@/public/assets/imgs/vista_hospitality_Inn_5.webp";
import img5 from "@/public/assets/imgs/vista_hospitality_Inn_7.webp";

const StickyContent = [
  {
    headText1: "",
    headText2: "We’ve been doing this since 1998",
    para: "Vista Hospitality has evolved into a premier destination for remarkable events. Our journey is defined by a dedication to transforming ordinary moments into unforgettable memories for our clients and their guests.",
  },
  {
    headText1: "",
    headText2: "Top Notch Event Experts",
    para: "",
  },
  {
    headText1: "",
    headText2: "Diverse Venues",
    para: "From scenic outdoor settings to elegant indoor spaces, our array of venues provides the ideal backdrop for any occasion",
  },
];
const ImgArray = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
];
export default function About() {
  return (
    <>
      <PageWrapper>
        <main>
          <Banner
            heading="About Vista"
            para="At Vista Hospitality, we take pride in redefining the hospitality experience, offering a seamless blend of luxury, comfort, and personalized services to our esteemed guests. Our commitment lies in creating an unparalleled atmosphere where every stay is an unforgettable journey."
            bgImg={bannerImg}
          />
          <AboutUs />
          <WhatWeDo />
          <AboutStickySec
            carouselArray={ImgArray}
            StickyContent={StickyContent}
          />
          <div className=" bg-dark60 VistaSec_topBorder_grade position-relative">
            <TeamSection />
          </div>
          <ReservationSec video="/assets/ReservationVideo.MP4" />
          <BlogSec />
          <BottomCTA />
        </main>
      </PageWrapper>
    </>
  );
}
