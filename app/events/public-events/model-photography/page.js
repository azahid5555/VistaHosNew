import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import AboutEventDetail from "@/components/Events/AboutEventDetail";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import FeaturesLists from "@/components/Events/FeaturesLists";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import ReservationSec from "@/components/general/ReservationSec";
const marqueeTexts = [
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
  "Unique",
  "BrideStory",
  "Beautiful",
  "Inspiration",
];
const ImgArray = [
  {
    img: carouselImg,
  },
  {
    img: carouselImg1,
  },
  {
    img: carouselImg2,
  },
  {
    img: carouselImg3,
  },
  {
    img: carouselImg4,
  },
  {
    img: carouselImg5,
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

export default function modelPhotography() {
  return (
    <PageWrapper>
      <main className="modelPhotography">
        <HeroInnerPages
          subtitle="Add Photography"
          title1="images that  "
          title2="unique"
          para="Dicta sunt explicabo. Nemo enim fugit ipsam aut voluptatem quia voluptas sit aspernatur aut odit."
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetail text="A wedding is a truly amazing moment in life, and we would love to help make it special and memorable. We offer a range of wedding packages to fit any budget or style, from intimate ceremonies to elaborate ballroom receptions. Let us help make your day perfect and truly unforgettable." />
        <TextMarqueeOneLine text={marqueeTexts} />

        <section className=" VistaSec_topBorder_grade bg-dark60 position-relative Event__feature-section">
          <div className=" container-fluid vistaCon">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
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
