import "@/styles/style.css";
import AboutEventDetailThree from "@/components/Events/AboutEventDetailThree";
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import { PageWrapper } from "@/components/general/PageWrapper";

// import corporateImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import corporateImg1 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import corporateImg2 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_2.webp";
import corporateImg3 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_3.webp";
import corporateImg4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_4.webp";
import corporateImg5 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_5.webp";
import corporateImg6 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_6.webp";
import corporateImg7 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_7.webp";

import FaqWithSlider from "@/components/Events/FaqWithSlider";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";

const ImgArray = [
  {
    img: corporateImg1,
  },
  {
    img: corporateImg2,
  },
  {
    img: corporateImg3,
  },
  {
    img: corporateImg4,
  },
  {
    img: corporateImg5,
  },
];
const ImgArrayTwo = [
  {
    img: corporateImg1,
  },
  {
    img: corporateImg2,
  },
  {
    img: corporateImg3,
  },
  {
    img: corporateImg4,
  },
  {
    img: corporateImg5,
  },
  {
    img: corporateImg6,
  },
  {
    img: corporateImg7,
  },
];
const marqueeTexts = [
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
  "Elegance",
  "Unveiled",
  "Celebrating",
  "Excellence",
  "Evening",
  "Dinner",
];

const questions = [
  {
    id: 1,
    question:
      "What is the significance of hosting an annual dinner for our corporation?",
    answer:
      "The annual dinner serves as a momentous occasion for corporations to celebrate achievements, foster team spirit, and acknowledge the contributions of employees. It's a platform for networking, team-building, and reinforcing company values.",
  },
  {
    id: 2,
    question:
      "How can Vista Hospitality assist in organizing our corporate annual dinner?",
    answer:
      "Vista Hospitality specializes in creating memorable corporate events. We offer comprehensive event planning services tailored to your preferences, including venue selection, catering, entertainment, and thematic design, ensuring a seamless and unforgettable evening.",
  },
  {
    id: 3,
    question:
      "Can Vista Hospitality accommodate specific dietary requirements for the annual dinner?",
    answer:
      "Absolutely. Our catering services encompass a diverse range of culinary options to accommodate dietary needs and preferences, ensuring all attendees can enjoy a delightful dining experience.",
  },
  {
    id: 4,
    question:
      "What entertainment options can Vista Hospitality provide for our annual dinner?",
    answer:
      "We offer a plethora of entertainment choices, including live music, DJs, themed performances, interactive activities, and keynote speakers. Tailoring entertainment to align with your event's theme and preferences is our specialty.",
  },
  {
    id: 5,
    question:
      "How early should we contact Vista Hospitality to plan our corporate annual dinner?",
    answer:
      "We recommend reaching out to us as soon as possible to ensure optimal planning time. However, we are adept at handling last-minute arrangements and will strive to accommodate your needs regardless of the timeline.",
  },
];
const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Elegant Venue Selection",
    para: "Elevate your Annual Dinner with our chic venues, where sophistication meets celebration.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Culinary Delights",
    para: "Indulge in a culinary journey of excellence, tailor-made for your Annual Dinner's significance.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Seamless Planning",
    para: "Trust us for meticulous planning, ensuring a flawlessly orchestrated Annual Dinner that mirrors your organization's commitment to excellence.",
  },
];
export default function AnnualDinner() {
  return (
    <PageWrapper>
      <main className="annualdinner">
        <HeroInnerPages
          subtitle="ANNUAL DINNER"
          title1="Your Annual Dinner, A  "
          title2="Night of Excellence."
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Capture the precious moments of your Annual Dinner"
              subHeading="WHY US"
              cardsArray={whyChooseUS}
            />
          </div>
        </section>
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Welcome to a Night of "
          title1text2="Excellence"
          para="At Vista Hospitality, we invite you to elevate your annual celebrations with a touch of sophistication and flair. Our Annual Dinner experience is meticulously designed to offer an unforgettable evening of elegance, fine dining, and seamless orchestration."
          img1={corporateImg3}
          img2={corporateImg1}
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <section className="photography__wedding-album position-relative bg-dark60">
          <div className="container-fluid vistaCon">
            <AboutEventDetailThree
              subtitle="THE BEST OF THE BEST"
              title1text1="Annual Dinner at "
              title1text2="Vista Hospitality"
              para="From conceptualization to execution, we handle every detail with meticulous care, allowing you to focus on enjoying the evening. Our commitment to seamless planning ensures that your Annual Dinner reflects the professionalism and excellence of your organization."
              feature1="Meticulous Planning"
              feature2="Exquisite Dining"
              btntitle="Contact Us"
              btnlink="/"
              img1={corporateImg6}
              img2={corporateImg1}
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
