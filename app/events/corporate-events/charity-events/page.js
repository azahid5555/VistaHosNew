import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import carouselImg1 from "@/public/assets/imgs/vista_hospitality_Inn_charity_1.webp";
import carouselImg2 from "@/public/assets/imgs/vista_hospitality_Inn_charity_2.webp";
import carouselImg3 from "@/public/assets/imgs/vista_hospitality_Inn_charity_3.webp";
import carouselImg4 from "@/public/assets/imgs/vista_hospitality_Inn_charity_4.jpg";
import carouselImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Exe_3.webp";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";

import charity_image from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import AboutEventDetailFour from "@/components/Events/AboutEventDetailFour";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
const ImgArray = [
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
const featurelist = [
  {
    id: 1,
    feature_1: " Collaboration Spaces",
  },
  {
    id: 2,
    feature_1: " Interactive Technology",
  },
  {
    id: 3,
    feature_1: " Event Planning Assistance",
  },
];
const featurelist2 = [
  {
    id: 1,
    feature_1: " Community-Centric Spaces",
  },
  {
    id: 2,
    feature_1: " Customizable Packages for Impact",
  },
  {
    id: 3,
    feature_1: " Dedicated Support",
  },
];
export default function charity() {
  return (
    <PageWrapper>
      <main className="charity">
        <HeroInnerPages
          subtitle="CHARITY EVENTS"
          title1="Inspiring Hope,"
          title2="Creating Impact"
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />
        <ColorChnagingHeadThreeImage
          text="At Vista Hospitality, we believe in the power of meaningful gatherings that extend beyond celebration—events that make a positive impact on the community. Our Charity Events are crafted with care, providing a platform for philanthropy and heartfelt connections."
          mainTitle="Heartfelt Gatherings,"
          mainTitleWord="Purposeful Impact"
        />
        <section className="charity__details--sec position-relative">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <AboutEventDetailFour
              img={charity_image}
              className="row py-0 py-md-5 justify-content-between"
              mainTitle="Welcome to Vista Charity Support and Giving Hub"
              subtitle="A PREMIER EVENT DESIGN & PLANNING FIRM"
              para="At Vista Hospitality, we believe in the transformative power of giving. Introducing the Vista Charity Support & Giving Hub, a dedicated space designed to amplify the impact of charitable initiatives. Discover how we turn generosity into meaningful change and create a hub where community support thrives."
              featurelist={featurelist}
              btntext="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <section className="charity__details--sec position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <AboutEventDetailFour
              img={carouselImg2}
              className="row py-0 py-md-5 flex-row-reverse justify-content-end justify-content-md-between"
              mainTitle="Supporting a Spectrum of Causes"
              subtitle="A PREMIER EVENT DESIGN and PLANNING FIRM"
              para="Vista Charity Support & Giving Hub welcomes organizations spanning various causes, from healthcare and education to environmental conservation and social welfare. It is a dynamic space where diversity of purpose converges into a unified commitment to make the world a better place."
              featurelist={featurelist2}
              btntext="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <FaqWithSlider carouselArray={ImgArray} questions={questions} />
        <ReviewsSecOneLine />

        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
