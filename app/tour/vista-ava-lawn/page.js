import "@/styles/style.css";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import vistaLawn1 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_1.webp";
import vistaLawn2 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_2.webp";
import vistaLawn3 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_3.webp";
import vistaLawn4 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_4.webp";
import vistaLawn5 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_5.webp";
import vistaLawn6 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_6.webp";

import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FeaturesLists from "@/components/Events/FeaturesLists";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import TourWelcome from "@/components/tourComponent/TourWelcome";
const ImgArray = [
  {
    img: vistaLawn1,
  },
  {
    img: vistaLawn2,
  },
  {
    img: vistaLawn3,
  },
  {
    img: vistaLawn4,
  },
  {
    img: vistaLawn5,
  },
  {
    img: vistaLawn6,
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

export default function vistaAvaLawn() {
  return (
    <PageWrapper>
      <main className="vistaAvaLawn">
        <HeroInnerPages
          subtitle="VISTA AVA LAWN"
          title1="Where Grandeur Meets"
          title2="Greenery"
          para=""
        />

        <TourWelcome
          tourWelcome_1={vistaLawn2}
          tourWelcome_2={vistaLawn3}
          tourWelcome_3={vistaLawn4}
          tourWelcome_4={vistaLawn5}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Ava Lawn"
          subtitle="The best of best"
          para="This sprawling venue within Vista Hospitality Inn is designed to elevate your events, providing a picturesque backdrop of nature combined with the sophistication of modern amenities."
        />

        <section className="Event__feature-section position-relative">
          <div className=" container-fluid vistaCon py-0">
            <SubHeroSection
              head1="No matter your"
              head2="thing, we’re here for"
              head3="you."
              para="We believe that every occasion is deserving of a personalized touch. Each of our unique spaces is flexible to suit the range of need for any event or gathering."
            />
          </div>
        </section>
        <section className="Event__feature-section position-relative">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>

        <CarouselInnerEvent ImgArray={ImgArray} />
        <section className="VistaSec_topBorder_grade position-relative bg-dark60 homeAboutSec">
          <div className="container-fluid vistaCon position-relative z-2">
            <HomeAboutSec text="Vista Ava Lawn harmonizes the grandeur of celebrations with the serenity of nature. Whether you envision a lavish wedding, a corporate gala, or an intimate social gathering, this venue invites you to create memorable moments against the backdrop of open skies and lush landscapes." />
          </div>
        </section>

        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
