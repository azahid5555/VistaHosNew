import AboutEventDetailThree from "@/components/Events/AboutEventDetailThree";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
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
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import BottomCTA from "@/components/general/BottomCTA";
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import HomeAboutSecImage from "@/components/general/ColorChnagingHeadThreeImage";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";

import AED2Img1 from "@/public/assets/imgs/carousel2.webp";
import AED2Img2 from "@/public/assets/imgs/carouselInnerEvent5.webp";

import AED3Img1 from "@/public/assets/imgs/homeAbout.webp";
import AED3Img2 from "@/public/assets/imgs/blogDemo3.webp";

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

export default function exhibition() {
  return (
    <PageWrapper>
      <main className="exibition">
        <HeroInnerPages
          subtitle="EXIBITION"
          title1="VISTA INNOVATION"
          title2="SHOWCASE"
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />

        <ColorChnagingHeadThreeImage
          text="Step into the world of limitless possibilities at Vista Hospitality's Exhibition Showcase. Our marquee stands as a versatile and dynamic space, curated to elevate your exhibitions. With an expansive layout and cutting-edge facilities, our venue is designed to accentuate and spotlight your innovations, creating an immersive experience for both exhibitors and attendees."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="Enchanting Gala Evening"
          title1text2="Experience"
          para="Indulge in an evening of unparalleled elegance and sophistication at our annual dinner. Immerse yourself in a world of exquisite cuisine, captivating entertainment, and enchanting moments that will linger in your memories."
          img1={AED2Img1}
          img2={AED2Img2}
        />
        <section className="photography__wedding-album position-relative bg-dark60">
          <div className="container-fluid vistaCon">
            <AboutEventDetailThree
              subtitle="THE BEST OF THE BEST"
              title1text1="A Night of Culinary"
              title1text2="Mastery"
              para="Savor an extraordinary culinary journey at our annual dinner, where expertly crafted flavors meet impeccable presentation. Experience gastronomic delight in every bite, setting the stage for an unforgettable evening."
              feature1="Exquisite Menu Selection"
              feature2="Fine Dining Ambiance"
              btntitle="Contact Us"
              btnlink="/"
              img1={AED3Img1}
              img2={AED3Img2}
            />
          </div>
        </section>

        <FaqWithSlider
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          questions={questions}
        />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}