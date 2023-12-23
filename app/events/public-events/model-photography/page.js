import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import modelingImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_1.webp";
import modelingImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_2.webp";
import modelingImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_3.webp";
import modelingImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_4.webp";
import modelingImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_5.webp";
import modelingImg6 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_6.webp";
import modelingImg7 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_7.webp";
import modelingImg8 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_8.webp";
import modelingImg9 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_9.webp";
import modelingImg10 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_10.webp";
import modelingImg11 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_11.webp";
import modelingImg12 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_12.webp";
import modelingImg13 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_13.webp";
import modelingImg14 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_14.webp";
import modelingImg15 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_15.webp";
import modelingImg16 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_16.webp";

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
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
const marqueeTexts = [
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
  "Fashion Flourish",
  "Style Soars",
  "Glamour Unbound",
  "Model Moments",
];
const ImgArray = [
  {
    img: modelingImg15,
  },
  {
    img: modelingImg14,
  },
  {
    img: modelingImg1,
  },
  {
    img: modelingImg2,
  },
  {
    img: modelingImg3,
  },
  {
    img: modelingImg4,
  },
  {
    img: modelingImg5,
  },
  {
    img: modelingImg6,
  },
  {
    img: modelingImg7,
  },
  {
    img: modelingImg8,
  },
  {
    img: modelingImg9,
  },
];
const ImgArrayTwo = [
  {
    img: modelingImg16,
  },
  {
    img: modelingImg15,
  },
  {
    img: modelingImg10,
  },
  {
    img: modelingImg11,
  },
  {
    img: modelingImg12,
  },
  {
    img: modelingImg13,
  },
  {
    img: modelingImg14,
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
    title: "Versatile Runway Spaces",
    desc: "Bring your vision to life in our adaptable venues, perfect for both intimate shows and grand fashion extravaganzas.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "Inclusive Model Platform",
    desc: "Celebrate diversity on our runways, welcoming models of all backgrounds, ages, and sizes.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "Creative Collaborations",
    desc: "Ignite fashion innovation with us—thematic showcases, avant-garde presentations, and more, we bring your vision to life.",
  },
];

export default function modelPhotography() {
  return (
    <PageWrapper>
      <main className="modelPhotography">
        <HeroInnerPages
          subtitle="MODELING EVENT"
          title1="Modeling Excellence at"
          title2="Vista Hospitality."
          para="Benefit from our cutting-edge audiovisual technology, creating a high-definition runway experience that captures every detail of your fashion creations."
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <AboutEventDetail text="Unleash your inner confidence and express your unique style on the runway at Vista Hospitality. Our Modeling experiences are not just about showcasing fashion; they are about embracing individuality, celebrating diversity, and creating moments of glamour that leave a lasting impression." />
        <TextMarqueeOneLine text={marqueeTexts} />

        <section className=" VistaSec_topBorder_grade bg-dark60 position-relative Event__feature-section">
          <div className=" container-fluid vistaCon">
            <FeaturesLists featureList={featureList} />
          </div>
        </section>
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Unveil Your Style"
          title1text2="Beyond the Catwalk"
          para="At Vista Hospitality, our Modeling Events are designed to be more than just runway showcases; they're immersive experiences that captivate audiences and empower models to express their unique identity. Connect with industry professionals, designers, and fashion enthusiasts at our exclusive networking events."
          img1={modelingImg10}
          video="/assets/vistaModeling.mp4"
        />
        <ReservationSec video="/assets/modeling.mp4" />

        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
