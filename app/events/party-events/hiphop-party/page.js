import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import HiphopDanceImg1 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_1.webp";
import HiphopDanceImg2 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_2.webp";
import HiphopDanceImg3 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_3.webp";
import HiphopDanceImg4 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_4.webp";
import HiphopDanceImg5 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_5.webp";
import HiphopDanceImg6 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_6.webp";
import HiphopDanceImg7 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_7.webp";
import HiphopDanceImg8 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_8.webp";

import featureImg from "@/public/assets/imgs/feature--1.png";

import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutStickySecTwo from "@/components/Events/AboutStickySecTwo";
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";

const ImgArray = [
  {
    img: HiphopDanceImg1,
  },
  {
    img: HiphopDanceImg2,
  },
  {
    img: HiphopDanceImg3,
  },
  {
    img: HiphopDanceImg4,
  },
  {
    img: HiphopDanceImg5,
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
const StickyContent = [
  {
    headText1: "",
    headText2: "Why Choose Us",
    para: "",
  },
  {
    headText1: "",
    headText2: "State-of-the-Art Audiovisual Setup",
    para: "Immerse yourself in the music with our cutting-edge audiovisual setup, ensuring crystal-clear sound and dynamic lighting that enhance the overall experience.",
  },
  {
    headText1: "",
    headText2: "Event Planning Assistance",
    para: "Our experienced event planning team is here to assist you every step of the way, from conceptualization to execution, ensuring your Hip-Hop Party is a seamless and unforgettable affair.",
  },
  {
    headText1: "",
    headText2: "Customizable Themes",
    para: "Personalize your Hip-Hop Party with customizable themes and decor that reflect the vibrant and dynamic nature of the Hip-Hop culture.",
  },
];
const marqueeTexts = [
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
  "Beating",
  "Sync",
  "Rhythmic",
  "Waves",
];

export default function HipHopParty() {
  return (
    <PageWrapper>
      <main className="HipHopParty">
        <HeroInnerPages
          subtitle="HipHop Party"
          title1="Get Ready to "
          title2="Groove"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetailSix
          subtitle="Dance Grooves"
          mainTitle="Dynamic Dance Floor"
          para="Dive into the rhythm, feel the beats, and experience an electrifying night of Hip-Hop at Vista Hospitality. Our Hip-Hop Party is not just an event; it's a celebration of urban culture, music, and the vibrant energy that defines the spirit of the city."
          feature1="Beating"
          feature1br="Sync"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={HiphopDanceImg6}
          detailImg2={HiphopDanceImg7}
          featureImg={featureImg}
        />

        <ColorChnagingHeadThreeImage
          text="Groove to the hottest beats spun by our expert DJs, creating a playlist that spans the latest chart-toppers and classic Hip-Hop anthems. The dance floor comes alive with a mix of rhythm and rhyme, ensuring an unforgettable musical experience."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <AboutStickySecTwo
          carouselArray={ImgArray}
          StickyContent={StickyContent}
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Dynamic Music Lineup"
          title1text2="Urban Aesthetics"
          para="Witness the fusion of art and music with urban aesthetics that adorn our venues. Graffiti art, neon lights, and street-inspired decor set the stage for an immersive experience, capturing the essence of the Hip-Hop culture."
          img1={HiphopDanceImg8}
          img2={HiphopDanceImg6}
        />
        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
