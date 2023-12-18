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
const featurelist = [
  {
    id: 1,
    feature_1: " Expert Event Planning Services",
  },
  {
    id: 2,
    feature_1: "Tailored Culinary Excellence",
  },
  {
    id: 3,
    feature_1: "Unmatched Attention to Detail",
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

export default function FestivalsEvent() {
  return (
    <PageWrapper>
      <main className="FestivalsEvent">
        <HeroInnerPages
          subtitle="Public Festivals"
          title1="CORPORATE EXCELLENCE "
          title2="UNVEILED"
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
              className="row py-5 gap-5 flex-row-reverse"
              mainTitle="Vista Charity Support and giving Hub"
              subtitle="A PREMIER EVENT DESIGN and PLANNING FIRM"
              para="Welcome to Vista Giving Hub, where compassion meets action. Explore our dedicated space designed for impactful charity events. Join us in making a difference and creating positive change in our community"
              featurelist={featurelist}
              btntext="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <ColorChnagingHeadThreeImage
          text="Step into the world of limitless possibilities at Vista Hospitality's Exhibition Showcase. Our marquee stands as a versatile and dynamic space, curated to elevate your exhibitions. With an expansive layout and cutting-edge facilities, our venue is designed to accentuate and spotlight your innovations, creating an immersive experience for both exhibitors and attendees."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <TextMarqueeOneLine text={marqueeTexts} />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Enchanting Gala Evening"
          title1text2="Experience"
          para="Indulge in an evening of unparalleled elegance and sophistication at our annual dinner. Immerse yourself in a world of exquisite cuisine, captivating entertainment, and enchanting moments that will linger in your memories."
          img1={AED2Img1}
          img2={AED2Img2}
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
