import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import AboutEventDetail from "@/components/Events/AboutEventDetail";

import BDpartyImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_1.webp";
import BDpartyImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_2.webp";
import BDpartyImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_3.webp";
import BDpartyImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_4.webp";
import BDpartyImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_5.webp";
import BDpartyImg6 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_6.webp";

import img11 from "@/public/assets/imgs/homeAbout.webp";
import img22 from "@/public/assets/imgs/carousel1.webp";
import img33 from "@/public/assets/imgs/carousel2.webp";
import img44 from "@/public/assets/imgs/carousel3.webp";
import img55 from "@/public/assets/imgs/carousel4.webp";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import bannerImg from "@/public/assets/imgs/aboutBanner.webp";

import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import FeaturesLists from "@/components/Events/FeaturesLists";
import AboutStickySecTwo from "@/components/Events/AboutStickySecTwo";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import Banner from "@/components/general/Banner";

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
    headText2: "Collaborative Event Planning",
    para: "Our experienced event planning team collaborates with organizers to ensure seamless planning and execution. We understand the unique requirements of public events and provide support every step of the way.",
  },
  {
    headText1: "",
    headText2: "Technology Integration",
    para: "Leverage our state-of-the-art audiovisual technology for impactful presentations and performances. Our venues are equipped to enhance the visibility and engagement of your event.",
  },
];

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";
const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Inclusive Venue Spaces",
    para: "Vista Hospitality offers inclusive venues designed to accommodate a variety of public events.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Culinary Diversity",
    para: "Explore a world of culinary diversity at our Public Events.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Engaging Entertainment",
    para: "Elevate your public gatherings with engaging entertainment options. ",
  },
];

export default function PublicEvents() {
  return (
    <PageWrapper>
      <main className="PublicEvents">
        <Banner
          heading="Vista public Events"
          para="Vista Hospitality offers inclusive venues designed to accommodate a variety of public events. From open-air spaces for festivals to versatile indoor settings for cultural gatherings, our venues provide a canvas for events that unite people from all walks of life."
          bgImg={bannerImg}
        />
        <AboutEventDetail text="At Vista Hospitality, we believe in the power of bringing people together. Our Public Events are a celebration of community, culture, and shared experiences. Whether it's a festival, cultural gathering, or a public celebration, our venues provide the perfect setting for moments that connect, inspire, and leave a lasting impact." />
        <section className=" VistaSec_topBorder_grade bg-dark60 position-relative Event__feature-section">
          <div className=" container-fluid vistaCon">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
        <AboutStickySecTwo
          carouselArray={ImgArray}
          StickyContent={StickyContent}
        />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Capture the precious moments of your Annual Dinner"
              subHeading="WHY US"
              cardsArray={whyChooseUS}
            />
          </div>
        </section>
        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
