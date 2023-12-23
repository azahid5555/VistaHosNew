import "@/styles/style.css";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import featureImg from "@/public/assets/imgs/feature--1.png";

import sweet1 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_1.webp";
import sweet2 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_2.png";
import sweet3 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_3.webp";
import sweet4 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_4.webp";
import sweet5 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_5.webp";
import sweet6 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_6.webp";
import sweet7 from "@/public/assets/imgs/vista_hospitality_Inn_sweets_7.webp";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import FeaturesListsTwo from "@/components/tourComponent/FeaturesListsTwo";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import TourWelcome from "@/components/tourComponent/TourWelcome";
const featureList_2 = [
  {
    id: 1,
    img: featureImg1,
    title: "High-Speed Wi-Fi",
    desc: "Ensuring you can effortlessly work, browse, or connect with loved ones during your stay.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "Free Room Service",
    desc: "Enjoy the convenience of complimentary room service, ensuring a delightful culinary experience within the comfort of your suite.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "Luxurious Bath Amenities",
    desc: "Enhancing your bathing experience and adding a touch of opulence to your stay.",
  },
  {
    id: 4,
    img: featureImg2,
    title: "Concierge Assistance",
    desc: "Our dedicated concierge team is at your service, offering personalized assistance and recommendations for local experiences.",
  },
  {
    id: 5,
    img: featureImg1,
    title: "Complimentary Parking",
    desc: "Allowing you to travel with ease and ensuring that your arrival and departure are seamless.",
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
const imgArray = [
  {
    img: sweet1,
  },
  {
    img: sweet2,
  },
  {
    img: sweet3,
  },
  {
    img: sweet4,
  },
  {
    img: sweet5,
  },
  {
    img: sweet6,
  },
  {
    img: sweet7,
  },
];
import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";
const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Personalized Luxury",
    para: "Experience a level of personalized luxury that goes beyond expectations.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Exclusive Access",
    para: "Enjoy exclusive access to amenities within Vista Hospitality Inn.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Panoramic Views",
    para: "Enjoy sweeping views of the surroundings from expansive windows.",
  },
];
export default function vistaLuxurySuits() {
  return (
    <PageWrapper>
      <main className="vistaBirthdayParty">
        <HeroInnerPages
          subtitle="VISTA LUXURY SUITES"
          title1="Where Opulence"
          title2="Meets Comfort"
          para=""
        />

        <TourWelcome
          tourWelcome_1={sweet1}
          tourWelcome_2={sweet2}
          tourWelcome_3={sweet3}
          tourWelcome_4={sweet4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Luxury Sweets"
          subtitle="The best of best"
          para="Select suites feature private balconies, inviting you to bask in the beauty of the surroundings in exclusive privacy. Enjoy sweeping views of the surroundings from expansive windows, providing a picturesque backdrop to your stay."
        />

        <AboutEventDetailSix
          subtitle="Opulent Living Spaces"
          mainTitle="Unparalleled Comfort"
          para="Indulge in the epitome of luxury at Vista Luxury Suites, an exclusive accommodation within Vista Hospitality Inn. Designed for discerning travelers seeking a blend of opulence and comfort, our suites provide a haven of tranquility and sophistication."
          feature1="Beautiful"
          feature1br="View"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={sweet5}
          detailImg2={sweet6}
          featureImg={featureImg}
        />

        <section className="Event__feature-section position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className=" container-fluid vistaCon  mb-0">
            <FeaturesListsTwo featureList_2={featureList_2} title="Amenities" />
          </div>
        </section>
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon mt-0">
            <WhatWeOffer
              heading="Capture the precious moments of your Annual Dinner"
              subHeading="WHY US"
              cardsArray={whyChooseUS}
            />
          </div>
        </section>
        <FaqWithSlider carouselArray={imgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
