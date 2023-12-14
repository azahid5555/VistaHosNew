import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import featureImg from "@/public/assets/imgs/feature--1.png";
import detailImg1 from "@/public/assets/imgs/teamDemo.jpg";
import detailImg2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import WhatWeDo from "@/components/aboutPage/WhatWeDo";
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
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
];

export default function BirthdayParty() {
  return (
    <PageWrapper>
      <main clas="BirthdayParty">
        <HeroInnerPages
          subtitle="Birthday Party"
          title1="VISTA BIRTHDAY"
          title2="BLISS"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetailSix
          subtitle="Dance Grooves"
          mainTitle="Dynamic Dance Floor"
          para="Immerse in the pulsating energy of Hip Grooves on our
                      Dynamic Dance Floor. Elevate your party experience with
                      beats that make your celebration unforgettable."
          feature1="Beating"
          feature1br="Sync"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={detailImg1}
          detailImg2={detailImg2}
          featureImg={featureImg}
        />

        <ColorChnagingHeadThreeImage
          text="Step into the world of limitless possibilities at Vista Hospitality's Exhibition Showcase. Our marquee stands as a versatile and dynamic space, curated to elevate your exhibitions. With an expansive layout and cutting-edge facilities, our venue is designed to accentuate and spotlight your innovations, creating an immersive experience for both exhibitors and attendees."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <WhatWeDo />
        <FaqWithSlider
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          questions={questions}
        />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
