import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import weddingImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import weddingImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_1.webp";
import weddingImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_2.webp";
import weddingImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_3.webp";
import weddingImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_4.webp";
import weddingImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_5.webp";
import weddingImg6 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_6.webp";
import weddingImg7 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_7.webp";
import weddingImg8 from "@/public/assets/imgs/carousel1.webp";
import weddingImg9 from "@/public/assets/imgs/carousel2.webp";
import weddingImg10 from "@/public/assets/imgs/carousel3.webp";
import weddingImg11 from "@/public/assets/imgs/carousel4.webp";

import AboutEventDetail from "@/components/Events/AboutEventDetail";
import FeaturesLists from "@/components/Events/FeaturesLists";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import featureImg3 from "@/public/assets/imgs/elegant.png";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";

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
    headText2: "Elegant Venues",
    para: "Choose Vista Hospitality for timeless sophistication, offering enchanting venues like Vista Marquess and Vista Ava Lawn.",
  },
  {
    headText1: "",
    headText2: "Tailored Wedding Experiences",
    para: "Craft your dream wedding with Vista Hospitality, where our dedicated team ensures every detail aligns seamlessly with your unique vision.",
  },
  {
    headText1: "",
    headText2: "Culinary Perfection",
    para: "Entrust your wedding feast to Vista Hospitality's culinary artisans, creating a delectable journey of flavors from the wedding cake to exquisite dining.",
  },
];

const ImgArray = [
  {
    img: weddingImg,
  },
  {
    img: weddingImg1,
  },
  {
    img: weddingImg2,
  },
  {
    img: weddingImg3,
  },
  {
    img: weddingImg4,
  },
];
const ImgArrayTwo = [
  {
    img: weddingImg5,
  },
  {
    img: weddingImg6,
  },
  {
    img: weddingImg7,
  },
  {
    img: weddingImg8,
  },
  {
    img: weddingImg9,
  },
  {
    img: weddingImg10,
  },
  {
    img: weddingImg11,
  },
];
const featureList = [
  {
    id: 1,
    img: featureImg1,
    title: "Elegant Venues",
    desc: "Our venues exude sophistication and charm, creating a captivating ambiance for your event with timeless elegance and refined aesthetics, setting the stage for unforgettable moments.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "Versatile Spaces",
    desc: "From intimate gatherings to grand celebrations, our spaces adapt to your vision, offering versatility in layout and design, ensuring every event is unique and perfectly tailored to your needs.",
  },
  {
    id: 3,
    img: featureImg3,
    title: "Personalised Service",
    desc: "Our dedicated team goes above and beyond, providing personalised attention and care, ensuring every detail aligns with your preferences, making your experience with us truly exceptional.",
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
        <AboutEventDetail text="At Vista Hospitality, we understand the significance of this special day. We strive to create a magical atmosphere, ensuring every detail reflects the couple's unique story. From breathtaking venues to impeccable service and exquisite touches, our goal is to craft a wedding that captures the essence of romance, creating an unforgettable experience for the couple and their loved ones." />
        <section className=" VistaSec_topBorder_grade bg-dark60 position-relative Event__feature-section">
          <div className=" container-fluid vistaCon">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
        <AboutStickySec
          carouselArray={ImgArrayTwo}
          StickyContent={StickyContent}
        />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
