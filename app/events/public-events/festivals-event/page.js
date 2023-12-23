import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import festivalImg1 from "@/public/assets/imgs/vista_hospitality_Inn_festivals_1.webp";
import festivalImg2 from "@/public/assets/imgs/vista_hospitality_Inn_festivals_2.webp";
import festivalImg3 from "@/public/assets/imgs/vista_hospitality_Inn_festivals_3.webp";
import festivalImg4 from "@/public/assets/imgs/vista_hospitality_Inn_festivals_4.webp";
import festivalImg5 from "@/public/assets/imgs/vista_hospitality_Inn_festivals_5.webp";

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
import "@/styles/style.css";
import AED2Img1 from "@/public/assets/imgs/carousel2.webp";
import AED2Img2 from "@/public/assets/imgs/carouselInnerEvent5.webp";

import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import PartyDetails from "@/components/Events/PartyDetails";
import AboutEventDetailFour from "@/components/Events/AboutEventDetailFour";
import TextMarqueeOneLine from "@/components/Events/TextMarqueeOneLine";
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
const ImgArray = [
  {
    img: festivalImg5,
  },
  {
    img: festivalImg1,
  },
  {
    img: festivalImg2,
  },
  {
    img: festivalImg3,
  },
  {
    img: festivalImg4,
  },
];
const featurelist = [
  {
    id: 1,
    feature_1: " Inclusive Venue Spaces",
  },
  {
    id: 2,
    feature_1: " Culinary Exploration",
  },
  {
    id: 3,
    feature_1: " Interactive Cultural Displays",
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
const marqueeTexts = [
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
  "Celebrate Together",
  "Cultural Bliss",
  "Embrace Diversity",
  "Community Festivities",
  "Infinite Memories",
];

export default function FestivalsEvent() {
  return (
    <PageWrapper>
      <main className="FestivalsEvent">
        <HeroInnerPages
          subtitle="PUBLIC FESTIVALS"
          title1="Celebrate Unity in "
          title2="Diversity"
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />

        <PartyDetails
          mainTitle="VISTA GRAND CELEBRATIONS CRAFTING UNFORGETTABLE MOMENTS IN EVERY EVENT WITH ELEGANCE AND EXCELLENCE"
          subtitle="WHERE SOPHISTICATION MEETS VERSATILITY, TURNING YOUR VISION INTO EXTRAORDINARY EVENTS WITH DISTINCTION."
          para="Step into Vista Grand Celebrations, where the ambiance echoes with sophistication and hospitality. Our versatile marquee transforms ordinary gatherings into extraordinary celebrations, elevating every event with style."
          feature1="Elegants Settings"
          feature1_para="Craft unforgettable moments in our elegant settings, curated for sophistication and styles.Suitable for all events"
          feature2="Exceptional Hospitality"
          feature2_para="Elevate your experience with exceptional hospitality, ensuring every guest feels welcomed and valued."
          feature3="Versatile Event Spaces"
          feature3_para="Our versatile spaces adapt to your vision, creating the perfect backdrop for any celebration."
          feature4="Innovative Solutions"
          feature4_para="Explore innovative solutions tailored to your event, making every occasion unique and memorable."
        />

        <section className="charity__details--sec position-relative">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <AboutEventDetailFour
              img={festivalImg5}
              className="row py-5 gap-5 flex-row-reverse"
              mainTitle="Your Community, Your Festival, Your Vista Hospitality."
              subtitle="A PREMIER EVENT DESIGN and PLANNING FIRM"
              para="Our venues are thoughtfully designed to accommodate a variety of public festivals, from cultural celebrations to community gatherings. Whether indoors or outdoors, the spaces are versatile, ensuring a comfortable and engaging environment for attendees."
              featurelist={featurelist}
              btntext="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <ColorChnagingHeadThreeImage
          text="Vista Hospitality embraces the spirit of diversity and community through our vibrant Public Festivals, where people of all backgrounds come together to celebrate, connect, and revel in the joy of shared experiences. Our venues provide a welcoming space for public celebrations, fostering a sense of unity and cultural richness."
          mainTitle="Celebrate Unity in Diversity "
          mainTitleWord="at Vista Hospitality Inn"
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="EPublic Festivals at"
          title1text2="Vista Hospitality"
          para="Delight in a culinary journey that mirrors the diversity of the festivals we host. Our expert chefs craft menus inspired by different cuisines, allowing attendees to savor a variety of flavors and culinary traditions."
          img1={festivalImg1}
          img2={festivalImg3}
        />
        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
