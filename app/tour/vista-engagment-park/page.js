import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import EgPark1 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_1.webp";
import EgPark2 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_2.webp";
import EgPark3 from "@/public/assets/imgs/vista_hospitality_Inn_AvaLawn_6.webp";
import EgPark4 from "@/public/assets/imgs/vista_hospitality_Inn_tour_BDPark.webp";
import EgPark5 from "@/public/assets/imgs/vista_hospitality_Inn_2.webp";
import EgPark6 from "@/public/assets/imgs/carousel1.webp";
import EgPark7 from "@/public/assets/imgs/carousel2.webp";
import EgPark8 from "@/public/assets/imgs/carousel3.webp";

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
import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import "@/styles/style.css";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FeaturesLists from "@/components/Events/FeaturesLists";
import ReservationSec from "@/components/general/ReservationSec";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";
import TourWelcome from "@/components/tourComponent/TourWelcome";
const StickyContent = [
  {
    headText1: "",
    headText2: "Secluded Elegance",
    para: "Enjoy the exclusivity of a secluded venue that offers an elegant and romantic backdrop for your engagement, ensuring a private and special atmosphere.",
  },
  {
    headText1: "",
    headText2: "Tailored Moments",
    para: "Benefit from personalized event planning, allowing you to tailor every moment of your engagement celebration to your preferences and style.",
  },
  {
    headText1: "",
    headText2: "Nature's Embrace",
    para: "Immerse yourselves in the embrace of nature, surrounded by greenery and natural beauty that enhances the romance of your engagement celebration.",
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
const imgArray = [
  {
    img: EgPark1,
  },
  {
    img: EgPark2,
  },
  {
    img: EgPark3,
  },
  {
    img: EgPark8,
  },
  {
    img: EgPark6,
  },
  {
    img: EgPark7,
  },
];
export default function vistaEngagmentPark() {
  return (
    <PageWrapper>
      <main className="vistaEngagmentPark">
        <HeroInnerPages
          subtitle="VISTA ENGAGEMENT PARK"
          title1="Crafting Moments of Romance"
          title2="and Celebration"
          para=""
        />

        <TourWelcome
          tourWelcome_1={EgPark1}
          tourWelcome_2={EgPark2}
          tourWelcome_3={EgPark3}
          tourWelcome_4={EgPark6}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Engagement Park"
          subtitle="The best of best"
          para="Nestled within Vista Hospitality Inn, this venue is tailored to host engagements with an ambiance that blends elegance, intimacy, and natural beauty."
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
        <AboutStickySec
          carouselArray={imgArray}
          StickyContent={StickyContent}
        />
        <ReservationSec video="/assets/engagementPark.mp4" />

        <FaqWithSlider carouselArray={imgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
