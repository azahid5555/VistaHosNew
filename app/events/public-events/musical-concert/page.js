import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import HiphopDanceImg1 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_1.webp";
import HiphopDanceImg2 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_2.webp";
import HiphopDanceImg3 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_3.webp";
import HiphopDanceImg4 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_4.webp";
import HiphopDanceImg5 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_5.webp";
import HiphopDanceImg6 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_6.webp";
import HiphopDanceImg7 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_7.webp";
import HiphopDanceImg8 from "@/public/assets/imgs/vista_hospitality_Inn_DanceParty_8.webp";

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
import serviceFeatureImg1 from "@/public/assets/imgs/star-sharp-svgrepo-com.png";
import serviceFeatureImg2 from "@/public/assets/imgs/calendar-svgrepo-com.png";
import serviceFeatureImg3 from "@/public/assets/imgs/mic-svgrepo-com.png";
import serviceFeatureImg4 from "@/public/assets/imgs/game-controller-round-795-svgrepo-com.png";
import detailSevenImg from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailSeven from "@/components/Events/AboutEventDetailSeven";
import ServiceFeature from "@/components/Events/ServiceFeature";
const ImgArray = [
  {
    img: HiphopDanceImg1,
  },
  {
    img: HiphopDanceImg2,
  },
  {
    img: HiphopDanceImg3,
  },
  {
    img: HiphopDanceImg4,
  },
  {
    img: HiphopDanceImg5,
  },
];
const ImgArrayTwo = [
  {
    img: HiphopDanceImg1,
  },
  {
    img: HiphopDanceImg2,
  },
  {
    img: HiphopDanceImg3,
  },
  {
    img: HiphopDanceImg4,
  },
  {
    img: HiphopDanceImg5,
  },
  {
    img: HiphopDanceImg6,
  },
  {
    img: HiphopDanceImg7,
  },
  {
    img: HiphopDanceImg8,
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

export default function musicalConcert() {
  return (
    <PageWrapper>
      <main className="musicalConcert">
        <HeroInnerPages
          subtitle="MUSICAL CONCERT"
          title1="Harmonize Your"
          title2="Night"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <ColorChnagingHeadThreeImage
          text="Experience the magic of live music at Vista Hospitality, where every musical note resonates with the energy of the crowd. Our Musical Concerts are not just events; they're unforgettable experiences that immerse you in the soul-stirring melodies and electrifying performances of renowned artists."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <AboutEventDetailSeven
          subtitle="Musical Serenity"
          mainTitle="Vista Harmony"
          mainTitleWord="Haven"
          para="Step into a world-class venue designed to amplify the sounds of your favorite music. Our acoustically optimized spaces create an immersive environment that ensures every beat, chord, and lyric is delivered with precision and clarity."
          feature_1="Sound Vibes"
          feature1_desc="Sonic sensations await"
          feature_2="Echo Harmoney"
          feature2_desc="Resonate with memories"
          countertitle_1="Event Artists"
          counterNum_1="30"
          countertitle_2="Event stages"
          counterNum_2="10"
          countertitle_3="Days concert"
          counterNum_3="13"
          detailSevenImg={HiphopDanceImg6}
          counterDuration={4}
        />
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
        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
