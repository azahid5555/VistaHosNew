import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import FeaturesLists from "@/components/Events/FeaturesLists";
import MainVideo from "@/components/Events/MainVideo";
import SubHeroSection from "@/components/Events/SubHeroSection";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import BottomCTA from "@/components/general/BottomCTA";

import img1 from "@/public/assets/imgs/homeAbout.webp";
import img2 from "@/public/assets/imgs/carousel1.webp";
import img3 from "@/public/assets/imgs/carousel2.webp";
import img4 from "@/public/assets/imgs/carousel3.webp";
import img5 from "@/public/assets/imgs/carousel4.webp";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import featureImg3 from "@/public/assets/imgs/elegant.png";
import EvnetsTypesMain from "@/components/Events/EvnetsTypesMain";

const questions = [
  {
    id: 1,
    question:
      "How do I inquire about booking an event venue with Vista Hospitality? ",
    answer:
      "To inquire about booking a venue for your event, please reach out to our dedicated events team through our contact page or by calling our provided contact numbers.",
  },
  {
    id: 2,
    question:
      "What types of events can be hosted at Vista Hospitality's venues? ",
    answer:
      "Our venues cater to a diverse range of events, including weddings, corporate gatherings, birthday parties, anniversaries, and more. We provide spaces suitable for various occasions.",
  },
  {
    id: 3,
    question:
      "Can Vista Hospitality assist with event planning and coordination services? ",
    answer:
      "Absolutely! Our experienced event planners offer comprehensive planning and coordination services, ensuring your event is meticulously organized and executed flawlessly.",
  },
  {
    id: 4,
    question:
      "Are catering services available for events hosted at Vista Hospitality venues?",
    answer:
      "Yes, we offer catering services with a diverse menu selection to suit your event's culinary preferences. External caterers can also be accommodated with prior arrangement.",
  },
  {
    id: 5,
    question:
      "What safety measures and protocols are in place at Vista Hospitality venues?",
    answer:
      "Your safety is our priority. Our venues adhere to strict safety standards, including regular maintenance, emergency procedures, and compliance with all necessary regulations.",
  },
];
const featureList = [
  {
    id: 1,
    img: featureImg3,
    title: "ELEGANT",
    desc: "Sophisticated spaces and stunning decor for your occasion.",
  },
  {
    id: 2,
    img: featureImg1,
    title: "VERSATILE",
    desc: "Spaces for weddings, conferences, trade shows, and more.",
  },
  {
    id: 3,
    img: featureImg2,
    title: "PERSONAL",
    desc: "Experienced team for personalized service and tailored events.",
  },
];
const ImgArrayTwo = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
];
export default function Events() {
  return (
    <PageWrapper>
      <main className="Event_main">
        <MainVideo video="/assets/ReservationVideo.MP4" />

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
            <EvnetsTypesMain />
          </div>
        </section>
        <section className="Event__feature-section position-relative">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
        <section className="VistaSec_topBorder_grade position-relative bg-dark60 homeAboutSec">
          <div className="container-fluid vistaCon position-relative z-2">
            <HomeAboutSec text="Welcome to Vista Hospitality, where we redefine hospitality with elegance and innovation. From the enchanting Vista Marquess to the delightful Vista Luxury Sweets, each moment is crafted with passion. Join us in creating unforgettable memories at Vista, where your journey is our priority." />
          </div>
        </section>
        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
