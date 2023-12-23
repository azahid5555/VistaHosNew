import "@/styles/style.css";
import AboutEventDetailThree from "@/components/Events/AboutEventDetailThree";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import { PageWrapper } from "@/components/general/PageWrapper";

import ExeImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Exe_1.webp";
import ExeImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Exe_2.webp";
import ExeImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Exe_3.webp";
import ExeImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Exe_4.webp";
import ExeImg5 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_8.webp";

import FaqWithSlider from "@/components/Events/FaqWithSlider";
import BottomCTA from "@/components/general/BottomCTA";
import AboutEventDetailTwo from "@/components/Events/AboutEventDetailTwo";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";

const ImgArray = [
  {
    img: ExeImg5,
  },
  {
    img: ExeImg1,
  },
  {
    img: ExeImg2,
  },
  {
    img: ExeImg3,
  },
  {
    img: ExeImg4,
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
const ImgArrayTwo = [
  {
    img: ExeImg5,
  },
  {
    img: ExeImg1,
  },
  {
    img: ExeImg2,
  },
  {
    img: ExeImg3,
  },
  {
    img: ExeImg4,
  },
];
export default function exhibition() {
  return (
    <PageWrapper>
      <main className="exibition">
        <HeroInnerPages
          subtitle="EXIBITION"
          title1="Where Innovation Meets Inspiration"
          title2="in Every Showcase."
          para=""
        />
        <CarouselInnerEvent ImgArray={ImgArray} />

        <ColorChnagingHeadThreeImage
          text="At Vista Hospitality, we invite you to showcase your vision and captivate your audience in our versatile and inspiring exhibition spaces. Our commitment to excellence ensures that your exhibition event is not only seamlessly executed but becomes an immersive experience for attendees."
          mainTitle="Step into a World of Innovation "
          mainTitleWord="Exhibition Events at Vista Hospitality"
        />
        <AboutEventDetailTwo
          subtitle="THE BEST OF THE BEST"
          title1text1="The Pinnacle of"
          title1text2="Excellence"
          para="Welcome to a realm where excellence is not just a standard but a commitment. At Vista Hospitality, we take pride in curating experiences that stand out as the epitome of sophistication, service, and innovation. Discover what sets us apart and why we are proud to be recognized as 'The Best of the Best.'"
          img1={ExeImg5}
          img2={ExeImg1}
        />
        <section className="photography__wedding-album position-relative bg-dark60">
          <div className="container-fluid vistaCon">
            <AboutEventDetailThree
              subtitle="THE BEST OF THE BEST"
              title1text1="Unveiling Excellence"
              title1text2="One Exhibit at a Time"
              para="Our commitment to excellence has not gone unnoticed. Vista Hospitality is honored to be recognized as The Best of the Best in the hospitality industry. These accolades reflect our continuous dedication to providing unparalleled service and creating moments that transcend expectations."
              feature1="Unparalleled Venues"
              feature2="Technological Innovation"
              btntitle="Contact Us"
              btnlink="/"
              img1={ExeImg1}
              img2={ExeImg2}
            />
          </div>
        </section>

        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
