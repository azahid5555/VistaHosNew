import "@/styles/style.css";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import corporateImg1 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import corporateImg2 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_2.webp";
import corporateImg3 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_3.webp";
import corporateImg4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_4.webp";
import corporateImg5 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_5.webp";
import corporateImg6 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_6.webp";
import corporateImg7 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_7.webp";

import AED3Img1 from "@/public/assets/imgs/blogDemo3.webp";
import AED3Img2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";

import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailThreeRight from "@/components/Events/AboutEventDetailThree";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
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

export default function corporateDinnerEvents() {
  return (
    <PageWrapper>
      <main className="corporateDinner_main">
        <HeroInnerPages
          subtitle="CORPORATE DINNER"
          title1="Elevate Your Corporate"
          title2="Moments"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <ColorChnagingHeadThreeImage
          text="Welcome to an exceptional setting where business meets elegance, and corporate gatherings become memorable experiences. At Vista Hospitality, we invite you to explore our Corporate Dinner offerings, tailored to provide a sophisticated backdrop for networking, celebrations, and strategic discussions."
          mainTitle="Corporate Dinner at"
          mainTitleWord="Vista Hospitality"
        />
        <section className=" position-relative">
          <div className=" container-fluid vistaCon">
            <AboutEventDetailThreeRight
              subtitle="Embracing Innovation Together."
              title1text1="Showcase Annual"
              title1text2="Exhibition"
              para="Immerse your corporate events in a professional ambiance conducive to meaningful discussions and networking. Our venues offer a refined setting that complements the significance of your corporate dinners, creating an environment where business and elegance seamlessly converge."
              feature1="Innovative Showcases"
              feature2="Interactive Learning Experiences"
              img1={corporateImg5}
              img2={corporateImg1}
              btntitle="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Where Excellence Meets Every Celebration"
              subHeading="WHY CHOOSE VISTA HOSPITALITY INN"
              cardsArray={whyChooseUS}
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
