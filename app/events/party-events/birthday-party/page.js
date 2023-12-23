import "@/styles/style.css";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import BDpartyImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_1.webp";
import BDpartyImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_2.webp";
import BDpartyImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_3.webp";
import BDpartyImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_4.webp";
import BDpartyImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_5.webp";
import BDpartyImg6 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_6.webp";

import featureImg from "@/public/assets/imgs/feature--1.png";

import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import WhatWeDo from "@/components/aboutPage/WhatWeDo";
const ImgArray = [
  {
    img: BDpartyImg1,
  },
  {
    img: BDpartyImg2,
  },
  {
    img: BDpartyImg3,
  },
  {
    img: BDpartyImg4,
  },
  {
    img: BDpartyImg5,
  },
  {
    img: BDpartyImg6,
  },
];
const questions = [
  {
    id: 1,
    question: "What types of events are possible? ",
    answer:
      "The Vista Hospitality INN is a versatile event venue that can accommodate a wide range of events, including weddings, corporate meetings, banquets, private parties, fundraisers, conferences, trade shows, product launches, galas, awards ceremonies, concerts, plays, dance recitals, bar mitzvahs, bat mitzvahs, sweet 16 parties, graduation parties, retirement parties, anniversaries, birthday parties, and more.",
  },
  {
    id: 2,
    question:
      "Are there specific features for model photoshoots in   your marquee? ",
    answer:
      "Certainly! Explore our Previous Model Shoots and Gallery sections for a glimpse into successful model photoshoots held in our dynamic and versatile marquee.",
  },
  {
    id: 3,
    question: "What are the catering options available? ",
    answer:
      "The Vista Hospitality INN offers a variety of menus prepared by the full-service on-site kitchen and a team of experienced chefs. If you prefer outside catering vendors, please discuss with our sales team.",
  },
  {
    id: 4,
    question: "What are the parking options available? ",
    answer:
      "The Vista Hospitality has a large parking lot that can accommodate up to 500 cars. The venue also has a valet parking service available for an additional fee.",
  },
  {
    id: 5,
    question:
      "Can I see examples of past model photoshoots in your   marquee? ",
    answer:
      "Certainly! Explore our Previous Model Shoots and Gallery sections for a glimpse into successful model photoshoots held in our dynamic and versatile marquee.",
  },
];
const marqueeTexts = [
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
  "Crafting",
  "Memories",
  "Unforgotable",
  "Momments",
];

export default function BirthdayParty() {
  return (
    <PageWrapper>
      <main clas="BirthdayParty">
        <HeroInnerPages
          subtitle="Birthday Party"
          title1="Celebrate Your Special "
          title2="Day in Style"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetailSix
          subtitle="BIRTHDAY PARTIES"
          mainTitle="Crafting Unforgettable Birthday Moments"
          para="Make your birthday an unforgettable affair with Vista Hospitality, where every detail is designed to turn your celebration into a cherished memory. Our venues, culinary delights, and personalized service come together to create a birthday experience that is as unique as you are."
          feature1="Crafting"
          feature1br="Memories"
          feature2="Beautiful"
          feature2br="Momments"
          detailImg1={BDpartyImg4}
          detailImg2={BDpartyImg1}
          featureImg={featureImg}
        />

        <ColorChnagingHeadThreeImage
          text="Experience the warmth of personalized service as our dedicated team attends to every detail of your celebration. From planning to execution, we work closely with you to ensure that your birthday party reflects your personality and preferences."
          mainTitle="Birthday Parties at "
          mainTitleWord="Vista Hospitality Inn"
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <WhatWeDo />
        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
