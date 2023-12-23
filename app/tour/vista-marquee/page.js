import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import marquee1 from "@/public/assets/imgs/vista_hospitality_Inn_1.webp";
import marquee2 from "@/public/assets/imgs/vista_hospitality_Inn_2.webp";
import marquee3 from "@/public/assets/imgs/vista_hospitality_Inn_3.webp";
import marquee4 from "@/public/assets/imgs/vista_hospitality_Inn_4.webp";
import marquee5 from "@/public/assets/imgs/vista_hospitality_Inn_5.webp";
import marquee6 from "@/public/assets/imgs/vista_hospitality_Inn_6.webp";
import marquee7 from "@/public/assets/imgs/vista_hospitality_Inn_7.webp";

import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import img5 from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import tourWelcome_1 from "@/public/assets/imgs/cup-1.jpg";
import tourWelcome_2 from "@/public/assets/imgs/cup-2.jpg";
import tourWelcome_3 from "@/public/assets/imgs/cup-3.jpg";
import tourWelcome_4 from "@/public/assets/imgs/cup-4.jpg";
import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import FeaturesListsTwo from "@/components/tourComponent/FeaturesListsTwo";
import ServiceFeature from "@/components/Events/ServiceFeature";
import BirthdayPackage from "@/components/tourComponent/BirthdayPackage";
import AboutEventDetailFour from "@/components/Events/AboutEventDetailFour";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FeaturesLists from "@/components/Events/FeaturesLists";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import TourWelcome from "@/components/tourComponent/TourWelcome";

const featurelist = [
  {
    id: 1,
    feature_1: "Select Your Desired Date",
  },
  {
    id: 2,
    feature_1: "Choose a Birthday Package",
  },
  {
    id: 3,
    feature_1: "Confirm the Reservation with Secure Online Payment",
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
    headText2: "Adaptable Event Spaces",
    para: "Vista Marquee offers adaptable event spaces that can be configured to accommodate a variety of occasions, ensuring flexibility for your unique requirements.",
  },
  {
    headText1: "",
    headText2: "Cutting Edge Facilities",
    para: "Modern amenities and infrastructure create a seamless and sophisticated environment for your guests.",
  },
  {
    headText1: "",
    headText2: "Modern Amenities",
    para: "Enjoy the convenience of modern amenities and cutting-edge facilities that enhance the overall experience for both hosts and guests.",
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
const featureList_2 = [
  {
    id: 1,
    img: featureImg1,
    title: "Professional Event Planning",
    desc: "With a dedicated team ready to assist you at every stage of the planning process.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "Catering Services",
    desc: "Diverse menu offering a range of culinary delights, from hors d'oeuvres to gourmet meals.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "Ample Parking",
    desc: "Well-maintained parking areas to accommodate attendees without any hassle.",
  },
  {
    id: 4,
    img: featureImg2,
    title: "Event Coordination",
    desc: "Expert event coordination services to ensure a seamless flow of activities during your event.",
  },
  {
    id: 5,
    img: featureImg1,
    title: "Modern Infrastructure",
    desc: "Contemporary and sophisticated infrastructure that sets the stage for a memorable event experience.",
  },
];
const ImgArray = [
  {
    img: marquee1,
  },
  {
    img: marquee2,
  },
  {
    img: marquee3,
  },
  {
    img: marquee4,
  },
  {
    img: marquee5,
  },
  {
    img: marquee6,
  },
];

export default function vistaMarquee() {
  return (
    <PageWrapper>
      <main className="vistaMarquee">
        <HeroInnerPages
          subtitle="VISTA MARQUEE"
          title1="A Dynamic Canvas for"
          title2="Your Events"
          para=""
        />

        <TourWelcome
          tourWelcome_1={marquee1}
          tourWelcome_2={marquee2}
          tourWelcome_3={marquee5}
          tourWelcome_4={marquee6}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Marquee"
          subtitle="The best of best"
          para="As a canvas that adapts to your vision, Vista Marquee is designed to host a spectrum of events, from grand galas and celebrations to intimate gatherings and corporate functions."
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
        <AboutStickySec
          carouselArray={ImgArray}
          StickyContent={StickyContent}
        />

        <section className="Event__feature-section position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesListsTwo featureList_2={featureList_2} title="Amenities" />
          </div>
        </section>
        <CarouselInnerEvent ImgArray={ImgArray} />
        <section className="VistaSec_topBorder_grade position-relative bg-dark60 homeAboutSec">
          <div className="container-fluid vistaCon position-relative z-2">
            <HomeAboutSec text="Welcome to Vista Marquee, the versatile and dynamic event space within Vista Hospitality Inn. As a canvas that adapts to your vision, Vista Marquee is designed to host a spectrum of events, from grand galas and celebrations to intimate gatherings and corporate functions." />
          </div>
        </section>

        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
