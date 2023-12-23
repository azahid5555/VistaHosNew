import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import Banner from "@/components/general/Banner";

import bannerImg from "@/public/assets/imgs/corporateEventBg.webp";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";

import img1 from "@/public/assets/imgs/blogDemo3.webp";
import img2 from "@/public/assets/imgs/homeAbout.webp";
import img3 from "@/public/assets/imgs/corporateEventBg.webp";
import EventsTypes from "@/components/Events/EventsTypes";
import SubHeroSection from "@/components/Events/SubHeroSection";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";

import corporateImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import corporateImg1 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import corporateImg2 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_2.webp";
import corporateImg3 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_3.webp";
import corporateImg4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_4.webp";
import corporateImg5 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_5.webp";
import corporateImg6 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_6.webp";
import corporateImg7 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_7.webp";

const StickyContent = [
  {
    headText1: "",
    headText2: "Why Choose Us",
    para: "",
  },
  {
    headText1: "",
    headText2: "Offset Meetings",
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
  },
  {
    headText1: "",
    headText2: "Team Happy Hours",
    para: "Our venues boast modern amenities and versatile spaces suitable for a range of corporate functions.",
  },
  {
    headText1: "",
    headText2: "Conferences",
    para: "With attention to detail and a focus on your objectives, we ensure that every aspect of your corporate event exceeds expectations.",
  },
];

const questions = [
  {
    id: 1,
    question: "What types of corporate events does Vista Hospitality cater to?",
    answer:
      "Vista Hospitality specialises in a wide range of corporate events, including conferences, seminars, board meetings, product launches, team-building sessions, and corporate dinners.",
  },
  {
    id: 2,
    question:
      "Can we customize the venue setup to suit our event's specific requirements?",
    answer:
      "Absolutely! Our venues offer versatile setups that can be tailored to accommodate your event's unique needs. We work closely with you to customize the layout, seating arrangements, and technical requirements as per your preferences.",
  },
  {
    id: 3,
    question:
      "What support does Vista Hospitality provide in planning and executing corporate events?",
    answer:
      "We offer comprehensive support throughout the planning and execution phases. Our dedicated team assists with event conceptualization, logistics, audiovisual setups, catering arrangements, and on-site coordination to ensure a seamless and successful event.",
  },
  {
    id: 4,
    question:
      "Are there options for team-building activities or breakout sessions available at your venues?",
    answer:
      "Yes, our venues offer versatile spaces suitable for team-building activities, breakout sessions, or workshops. We can assist in organizing various activities and provide the necessary arrangements to enhance your event's objectives.",
  },
  {
    id: 5,
    question:
      "Can Vista Hospitality handle last-minute changes or unexpected requirements during the event?",
    answer:
      "Flexibility is key in event management. Our experienced team is adept at handling unforeseen circumstances or last-minute changes. We remain adaptable and responsive to ensure that your event runs smoothly, even amidst unexpected situations.",
  },
];

const ImgArray = [
  {
    img: corporateImg,
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
    img: corporateImg4,
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
    img: corporateImg5,
  },
  {
    img: corporateImg6,
  },
  {
    img: corporateImg7,
  },
];
export default function CorporateEvents() {
  return (
    <PageWrapper>
      <main className="corporateEvents_page ">
        <Banner
          heading="Corporate Events"
          para="At Vista Hospitality, we specialize in curating unparalleled corporate events that seamlessly blend professionalism with sophistication."
          bgImg={bannerImg}
        />
        <AboutStickySec
          carouselArray={ImgArray}
          StickyContent={StickyContent}
        />
        <section className="Event__subHero-section position-relative">
          <div className=" container-fluid vistaCon mt-0 pt-5 mb-0 pb-0">
            <SubHeroSection
              head1="No matter your"
              head2="thing, we’re here for"
              head3="you."
              para="We believe that every occasion is deserving of a personalized touch. Each of our unique spaces is flexible to suit the range of need for any event or gathering."
            />
          </div>
        </section>
        <section className="events_types_sec position-relative">
          <div className=" container-fluid vistaCon position-relative mt-0">
            <div className="mb-4">
              <EventsTypes />
            </div>
          </div>
        </section>
        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
