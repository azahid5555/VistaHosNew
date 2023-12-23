import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import ReservationSec from "@/components/general/ReservationSec";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import corporateImg1 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import corporateImg2 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_2.webp";
import corporateImg3 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_3.webp";
import corporateImg4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_4.webp";
import corporateImg5 from "@/public/assets/imgs/blogDemo3.webp";
import corporateImg6 from "@/public/assets/imgs/charity.webp";
import corporateImg7 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_8.webp";
import corporateImg8 from "@/public/assets/imgs/homeAbout.webp";

import "@/styles/style.css";

const ImgArray = [
  {
    img: corporateImg5,
  },
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
    img: corporateImg6,
  },
  {
    img: corporateImg4,
  },
  {
    img: corporateImg7,
  },
];
const ImgArrayTwo = [
  {
    img: corporateImg5,
  },
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
    img: corporateImg6,
  },
  {
    img: corporateImg4,
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

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";

const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Professional Atmosphere",
    para: "Our sophisticated venues offer a professional ambiance conducive to productive discussions.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Customized Packages",
    para: "Tailor your Annual Meeting experience with our customizable packages.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Exceptional Service",
    para: "Experience unparalleled service with our dedicated team of professionals. ",
  },
];
export default function annualMeeting() {
  return (
    <PageWrapper>
      <main className="annual-meeting">
        <HeroInnerPages
          subtitle="ANNUAL MEETING"
          title1="Annual Meetings, Where "
          title2="Vision Meets Progress"
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <ReservationSec ResImg={corporateImg8} />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Where Excellence Meets Every Celebration"
              subHeading="WHY CHOOSE VISTA HOSPITALITY INN"
              cardsArray={whyChooseUS}
            />
          </div>
        </section>
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Plan Your Annual Meeting with"
          title1text2="Vista Hospitality"
          para="Enhance your meeting with our catering services, offering a range of culinary delights to keep your attendees refreshed and energized. Trust our experienced event planning team to handle every detail, allowing you to focus on the substance of your Annual Meeting."
          img1={corporateImg8}
          img2={corporateImg3}
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
