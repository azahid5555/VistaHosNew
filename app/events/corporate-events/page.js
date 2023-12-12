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

import img11 from "@/public/assets/imgs/corporate_event.webp";
import img22 from "@/public/assets/imgs/corporateEventBg.webp";
import img33 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img44 from "@/public/assets/imgs/charity.webp";
import img55 from "@/public/assets/imgs/exhibition.webp";

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
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
  },
  {
    headText1: "",
    headText2: "Conferences",
    para: "Enhance productivity and collaboration in a unique marquee atmosphere.",
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

export default function CorporateEvents() {
  return (
    <PageWrapper>
      <main className="corporateEvents_page ">
        <Banner
          heading="Corporate Events"
          para="At VistaHospitality, elegance is our signature. We infuse sophistication into every detail, creating events that resonate with timeless grace and style"
          bgImg={bannerImg}
        />
        <AboutStickySec
          img1={img1}
          img2={img2}
          img3={img3}
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
        <FaqWithSlider
          img1={img11}
          img2={img22}
          img3={img33}
          img4={img44}
          img5={img55}
          questions={questions}
        />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
