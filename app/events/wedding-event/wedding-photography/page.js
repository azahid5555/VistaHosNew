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
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import WhatWeDo from "@/components/aboutPage/WhatWeDo";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FaqWithSlider from "@/components/Events/FaqWithSlider";

import img1 from "@/public/assets/imgs/homeAbout.webp";
import img2 from "@/public/assets/imgs/carousel1.webp";
import img3 from "@/public/assets/imgs/carousel2.webp";
import img4 from "@/public/assets/imgs/carousel3.webp";
import img5 from "@/public/assets/imgs/carousel4.webp";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";

import AED2Img1 from "@/public/assets/imgs/carousel2.webp";
import AED2Img2 from "@/public/assets/imgs/carouselInnerEvent5.webp";

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

export default function WeddingPhotography() {
  return (
    <PageWrapper>
      <main className="weddingPhotography_page">
        <HeroInnerPages
          subtitle="WEDDINGS PHOTOGRAPHY"
          title1="Images that are"
          title2="unique"
          para="Dicta sunt explicabo. Nemo enim fugit ipsam aut voluptatem quia voluptas sit aspernatur aut odit."
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Enchanting Gala Evening"
          title1text2="Experience"
          para="Indulge in an evening of unparalleled elegance and sophistication at our annual dinner. Immerse yourself in a world of exquisite cuisine, captivating entertainment, and enchanting moments that will linger in your memories."
          img1={AED2Img1}
          img2={AED2Img2}
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer />
          </div>
        </section>
        <section className="Event__subHero-section position-relative">
          <div className=" container-fluid vistaCon mt-0 pt-5 mb-0 pb-0">
            <SubHeroSection
              head1="No matter your"
              head2="thing, we’re here for"
              head3="you."
              para="We believe that every occasion is deserving of a personalized touch. Each of our unique spaces is flexible to suit the range of need for any event or gathering."
            />
          </div>
        </section>
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
