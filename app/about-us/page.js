import "@/styles/style.css";
import Banner from "@/components/general/Banner";
import { PageWrapper } from "@/components/general/PageWrapper";
import AboutUs from "@/components/aboutPage/AboutUs";
import WhatWeDo from "@/components/aboutPage/WhatWeDo";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";
import ReservationSec from "@/components/general/ReservationSec";
import TeamSection from "@/components/general/TeamSection";
import bannerImg from "@/public/assets/imgs/aboutBanner.webp";

import BlogSec from "@/components/general/BlogSec";
import BottomCTA from "@/components/general/BottomCTA";

import img1 from "@/public/assets/imgs/homeAbout.webp";
import img2 from "@/public/assets/imgs/carousel1.webp";
import img3 from "@/public/assets/imgs/carousel2.webp";
import img4 from "@/public/assets/imgs/carousel3.webp";
import img5 from "@/public/assets/imgs/carousel4.webp";

const StickyContent = [
  {
    headText1: "",
    headText2: "We’ve been doing this since 1971",
    para: "Dedicated to delivering exceptional experiences, our close-knit team of 65+ talented professionals creates over 1,000 unique events annually",
  },
  {
    headText1: "",
    headText2: "Top Notch Event Experts",
    para: "",
  },
  {
    headText1: "",
    headText2: "Efficient Culinary Team",
    para: "",
  },
];
export default function About() {
  return (
    <>
      <PageWrapper>
        <main>
          <Banner
            heading="About Vista"
            para="At VistaHospitality, elegance is our signature. We infuse sophistication into every detail, creating events that resonate with timeless grace and style"
            bgImg={bannerImg}
          />
          <AboutUs />
          <WhatWeDo />
          <AboutStickySec
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
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
