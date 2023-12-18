import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import bannerImg from "@/public/assets/imgs/aboutBanner.webp";
import tourMarqueeImg from "@/public/assets/imgs/lovely couple.svg";
import img5 from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import Banner from "@/components/general/Banner";
import EventsTypesTwo from "@/components/tourComponent/EventsTypesTwo";
import TourMarqueeDetail from "@/components/tourComponent/TourMarqueeDetail";
import AboutStickySec from "@/components/aboutPage/AboutStickySec";

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

export default function Tour() {
  return (
    <PageWrapper>
      <main className="Tour">
        <Banner
          heading="Tour"
          para="Embark on a virtual journey through our spaces and envision the perfect setting for your upcoming event. Explore the highlights of VistaHospitality with our immersive tour experience"
          bgImg={bannerImg}
        />

        <TourMarqueeDetail
          tourMarqueeImg={tourMarqueeImg}
          mainTitle="Explore Limitless Elegance in 40,000 Sq Ft"
          para="At VistaHospitality, we thrive on infusing every occasion with a distinct touch. Our dynamic and adaptable spaces cater to diverse needs, promising a customized experience for each celebration"
        />
        <section className="events_types_sec position-relative">
          <div className=" container-fluid vistaCon position-relative mt-0">
            <div className="mb-4">
              <EventsTypesTwo />
            </div>
          </div>
        </section>

        <AboutStickySec
          img1={img1}
          img2={img2}
          img3={img3}
          StickyContent={StickyContent}
        />

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
