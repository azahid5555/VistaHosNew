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
import weddingImg8 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_8.webp";
import weddingImg9 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_9.webp";
import weddingImg10 from "@/public/assets/imgs/carousel1.webp";
import weddingImg11 from "@/public/assets/imgs/carousel2.webp";
import weddingImg12 from "@/public/assets/imgs/carousel3.webp";
import weddingImg13 from "@/public/assets/imgs/carousel4.webp";

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

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";

const ImgArray = [
  {
    img: weddingImg9,
  },
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
const questions = [
  {
    id: 1,
    question:
      "How do I inquire about booking Vista Hospitality's wedding photography services?",
    answer:
      "To inquire about our wedding photography services, please fill out the contact form on our website or contact our dedicated photography team via email or phone for detailed information and availability.",
  },
  {
    id: 2,
    question:
      "What styles of photography do Vista Hospitality's wedding photographers specialize in?",
    answer:
      "Our talented photographers specialize in various styles, including traditional, photojournalistic, candid, and artistic approaches, ensuring a diverse range of captured moments tailored to your preferences.",
  },
  {
    id: 3,
    question:
      "Can I customize my wedding photography package to suit my specific needs?",
    answer:
      "Absolutely! We offer customizable photography packages to cater to your unique needs, allowing you to select services, coverage hours, albums, prints, and additional add-ons according to your preferences.",
  },
  {
    id: 4,
    question:
      "Are engagement or pre-wedding photoshoots included in Vista Hospitality's wedding photography services?",
    answer:
      "Yes, engagement or pre-wedding photoshoots can be included in your photography package. Our photographers work with you to schedule and capture memorable moments before your big day.",
  },
  {
    id: 5,
    question:
      "What is the typical turnaround time for receiving edited wedding photos from Vista Hospitality?",
    answer:
      "Our turnaround time for edited wedding photos generally ranges from [Insert Timeframe] after the event. We prioritize quality editing to ensure your cherished moments are beautifully preserved.",
  },
  {
    id: 6,
    question:
      "Do Vista Hospitality's wedding photography services include destination weddings or travel arrangements?",
    answer:
      "Absolutely! Our photography services extend to destination weddings. Contact our photography team to discuss travel arrangements and tailored services for your destination wedding needs.",
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

const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Wedding Day Coverage",
    para: "Immortalize every heartfelt moment on your big day with our comprehensive wedding photography coverage.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Professional Photography",
    para: "Experience excellence in capturing emotions and memories with our skilled and seasoned photographers.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Pre-Wedding Photoshoot",
    para: "Begin your journey together with a captivating pre-wedding shoot, creating beautiful memories before the big day.",
  },
];

export default function WeddingPhotography() {
  return (
    <PageWrapper>
      <main className="weddingPhotography_page">
        <HeroInnerPages
          subtitle="WEDDINGS PHOTOGRAPHY"
          title1="Images that are"
          title2="unique"
          para="Experience a collection of exclusive and captivating visuals that stand out. Our unique images capture moments beyond ordinary, offering a distinctive perspective that evokes fascination and inspiration."
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetailTwo
          subtitle="THE PIMMACLE OF EXCELLENCE"
          title1text1="Captivating Gala"
          title1text2="Evening Experience"
          para="Immerse yourself in a captivating gala evening experience unlike any other. From the glamorous ambiance to the enchanting entertainment, our gala events promise an unforgettable evening filled with sophistication and excitement. Indulge in exquisite cuisine, mingle amidst elegant surroundings, and revel in the delightful moments that make our galas truly extraordinary. Join us for an evening of glamour and sophistication, where every detail is meticulously crafted to ensure a memorable experience for all attendees."
          img1={AED2Img1}
          img2={AED2Img2}
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Capture the precious moments of your couple"
              subHeading="WHAT WE OFFER"
              cardsArray={whyChooseUS}
            />
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
        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
