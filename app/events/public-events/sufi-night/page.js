import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import sofiImg1 from "@/public/assets/imgs/vista_hospitality_Inn_SofiNight_1.webp";
import sofiImg2 from "@/public/assets/imgs/vista_hospitality_Inn_SofiNight_2.webp";
import sofiImg3 from "@/public/assets/imgs/vista_hospitality_Inn_SofiNight_3.webp";
import sofiImg4 from "@/public/assets/imgs/vista_hospitality_Inn_7.webp";

import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import serviceFeatureImg1 from "@/public/assets/imgs/star-sharp-svgrepo-com.png";
import serviceFeatureImg2 from "@/public/assets/imgs/calendar-svgrepo-com.png";
import serviceFeatureImg3 from "@/public/assets/imgs/mic-svgrepo-com.png";
import serviceFeatureImg4 from "@/public/assets/imgs/game-controller-round-795-svgrepo-com.png";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import ReservationSec from "@/components/general/ReservationSec";
import ServiceFeature from "@/components/Events/ServiceFeature";
const ImgArray = [
  {
    img: sofiImg1,
  },
  {
    img: sofiImg2,
  },
  {
    img: sofiImg3,
  },
  {
    img: sofiImg4,
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

export default function sufiNight() {
  return (
    <PageWrapper>
      <main className="sufiNight">
        <HeroInnerPages
          subtitle="SUFI NIGHT"
          title1="Immerse in Spiritual "
          title2="Harmony"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <ColorChnagingHeadThreeImage
          text="Journey into the soulful realm of Sufi music at Vista Hospitality, where the mystical melodies of Sufi Nights transport you to a world of spiritual bliss and tranquility. Our Sufi Night Events are an ode to the rich tradition of Sufism, offering an intimate space for reflection, connection, and a profound musical experience."
          mainTitle="Live Performances by"
          mainTitleWord="Sufi Maestros"
        />
        {/* video="/assets/ReservationVideo.MP4" */}
        <ReservationSec ResImg={sofiImg2} />
        <ServiceFeature
          subtitle="Musical Serenity"
          mainTitle="Vista Music "
          mainTitleWord="Extravaganza"
          para="Immerse yourself in the rhythmic enchantment at Vista Harmony Haven, where every note resonates with magic. Join us in a musical journey curated to captivate your senses and create unforgettable memories."
          featureTitle1="Diverse Musical Lineup"
          featureTitle2="Interactive Schedule"
          featureTite3="Immersive Performances"
          featureTite4="Engaging Activities"
          serviceFeatureImg1={serviceFeatureImg1}
          serviceFeatureImg2={serviceFeatureImg2}
          serviceFeatureImg3={serviceFeatureImg3}
          serviceFeatureImg4={serviceFeatureImg4}
        />

        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
