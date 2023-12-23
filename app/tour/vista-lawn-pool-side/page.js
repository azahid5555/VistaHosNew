import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import poolSide1 from "@/public/assets/imgs/vista_hospitality_Inn_Poolside_1.webp";
import poolSide2 from "@/public/assets/imgs/vista_hospitality_Inn_Poolside_2.webp";
import poolSide3 from "@/public/assets/imgs/vista_hospitality_Inn_Poolside_3.webp";
import poolSide4 from "@/public/assets/imgs/vista_hospitality_Inn_Poolside_4.webp";
import poolSide5 from "@/public/assets/imgs/vista_hospitality_Inn_Tour_Poolside.webp";
import poolSide6 from "@/public/assets/imgs/vista_hospitality_Inn_Poolside_6.webp";

import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import tourWelcome_1 from "@/public/assets/imgs/cup-1.jpg";
import tourWelcome_2 from "@/public/assets/imgs/cup-2.jpg";
import tourWelcome_3 from "@/public/assets/imgs/cup-3.jpg";
import tourWelcome_4 from "@/public/assets/imgs/cup-4.jpg";
import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";
import featureImg from "@/public/assets/imgs/feature--1.png";
import detailImg1 from "@/public/assets/imgs/teamDemo.jpg";
import detailImg2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import "@/styles/style.css";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FeaturesLists from "@/components/Events/FeaturesLists";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import ReservationSec from "@/components/general/ReservationSec";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import TourWelcome from "@/components/tourComponent/TourWelcome";
const ImgArray = [
  {
    img: poolSide1,
  },
  {
    img: poolSide2,
  },
  {
    img: poolSide3,
  },
  {
    img: poolSide4,
  },
  {
    img: poolSide5,
  },
  {
    img: poolSide6,
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

export default function vistaLawnPoolSide() {
  return (
    <PageWrapper>
      <main className="vistaLawnPoolSide">
        <HeroInnerPages
          subtitle="VISTA LAWN POOL SIDE"
          title1="SERENITY BY"
          title2="WATER "
          para="Perfect for guests looking to unwind and enjoy the outdoors in a serene and inviting environment."
        />
        <TourWelcome
          tourWelcome_1={poolSide1}
          tourWelcome_2={poolSide2}
          tourWelcome_3={poolSide3}
          tourWelcome_4={poolSide4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Lawn Pool Side"
          subtitle="The best of best"
          para="Enjoy the soothing ambiance of our poolside area, surrounded by lush greenery and complemented by the refreshing presence of a crystal-clear swimming pool"
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
        <section className="VistaSec_topBorder_grade Event__feature-section position-relative">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>

        <AboutEventDetailSix
          subtitle="POOL SIDE"
          mainTitle="A Tranquil Oasis for Leisure and Celebration"
          para="Vista Lawn Pool Side, a picturesque haven within Vista Hospitality Inn that seamlessly blends the beauty of nature with the joy of leisure and celebration. This unique outdoor space is designed to offer a tranquil escape for guests seeking relaxation and a charming setting for a variety of events."
          feature1br="Sync"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={poolSide5}
          detailImg2={poolSide6}
          featureImg={featureImg}
        />
        <section className="VistaSec_topBorder_grade position-relative bg-dark60 homeAboutSec">
          <div className="container-fluid vistaCon position-relative z-2">
            <HomeAboutSec text="Vista Lawn Pool Side offers versatile event spaces that can be tailored to host a range of events, from intimate gatherings and cocktail parties to poolside celebrations. Ample seating options and customizable layouts ensure flexibility to accommodate your unique event vision" />
          </div>
        </section>
        <CarouselInnerEvent ImgArray={ImgArray} />

        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
