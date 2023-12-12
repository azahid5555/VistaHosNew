import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import AboutEventDetail from "@/components/Events/AboutEventDetail";
import FeaturesLists from "@/components/Events/FeaturesLists";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";

import img1 from "@/public/assets/imgs/homeAbout.webp";
import img2 from "@/public/assets/imgs/carousel1.webp";
import img3 from "@/public/assets/imgs/carousel2.webp";
import img4 from "@/public/assets/imgs/carousel3.webp";
import img5 from "@/public/assets/imgs/carousel4.webp";
import ReviewsSec from "@/components/general/ReviewsSec";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";

const StickyContent = [
  {
    headText1: "",
    headText2: "Why choose",
    para: "",
  },
  {
    headText1: "",
    headText2: "OFFSET MEETINGS",
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
  },
  {
    headText1: "",
    headText2: "TEAM HAPPY HOURS",
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
  },
  {
    headText1: "",
    headText2: "CONFERENCES",
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
  },
];

const ImgArray = [
  {
    img: carouselImg,
  },
  {
    img: carouselImg1,
  },
  {
    img: carouselImg2,
  },
  {
    img: carouselImg3,
  },
  {
    img: carouselImg4,
  },
  {
    img: carouselImg5,
  },
];

const featureList = [
  {
    id: 1,
    img: featureImg1,
    title: "ELEGANT",
    desc: "Sophisticated spaces and stunning decor for your occasion.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "VERSATILE",
    desc: "Spaces for weddings, conferences, trade shows, and more.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "PERSONAL",
    desc: "Experienced team for personalized service and tailored events.",
  },
];
export default function WeddingEventPage() {
  return (
    <PageWrapper>
      <main className="weddingEvent_page">
        <HeroInnerPages
          subtitle="WEDDINGS"
          title1="Lets get"
          title2="married"
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetail text="A wedding is a truly amazing moment in life, and we would love to help make it special and memorable. We offer a range of wedding packages to fit any budget or style, from intimate ceremonies to elaborate ballroom receptions. Let us help make your day perfect and truly unforgettable." />
        <section className=" VistaSec_topBorder_grade bg-dark60 position-relative Event__feature-section">
          <div className=" container-fluid vistaCon">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
        <AboutStickySec
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          StickyContent={StickyContent}
        />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
