import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
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
    headText2: "We’ve been doing this since 1971",
    para: "Dedicated to delivering exceptional experiences, our close-knit team of 65+ talented professionals creates over 1,000 unique events annually",
  },
  {
    headText1: "",
    headText2: "Top Notch Event Experts",
    para: "",
  },
  {
    headText1: "",
    headText2: "Efficient Culinary Team",
    para: "",
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

export default function vistaEngagmentPark() {
  return (
    <PageWrapper>
      <main className="vistaEngagmentPark">
        <HeroInnerPages
          subtitle="VISTA ENGAGEMENT PARK"
          title1="ROMANTIC PROPOSAL "
          title2="SETTING"
          para=""
        />

        <TourWelcome
          tourWelcome_1={tourWelcome_1}
          tourWelcome_2={tourWelcome_2}
          tourWelcome_3={tourWelcome_3}
          tourWelcome_4={tourWelcome_4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Coffee Shop"
          subtitle="The best of best"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
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
          img1={img1}
          img2={img2}
          img3={img3}
          StickyContent={StickyContent}
        />
        <ReservationSec video="/assets/ReservationVideo.MP4" />

        <FaqWithSlider
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          questions={questions}
        />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
