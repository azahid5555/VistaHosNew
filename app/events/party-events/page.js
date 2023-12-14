import FaqWithSlider from "@/components/Events/FaqWithSlider";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import carouselImg from "@/public/assets/imgs/carouselInnerEvent0.webp";
import carouselImg1 from "@/public/assets/imgs/carouselInnerEvent1.webp";
import carouselImg2 from "@/public/assets/imgs/carouselInnerEvent2.webp";
import carouselImg3 from "@/public/assets/imgs/carouselInnerEvent3.webp";
import carouselImg4 from "@/public/assets/imgs/carouselInnerEvent4.webp";
import carouselImg5 from "@/public/assets/imgs/carouselInnerEvent5.webp";
import bannerImg from "@/public/assets/imgs/aboutBanner.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import Banner from "@/components/general/Banner";
import AboutEventDetailThreeRight from "@/components/Events/AboutEventDetailThree";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import PartyDetails from "@/components/Events/PartyDetails";
import AboutStickySecTwo from "@/components/Events/AboutStickySecTwo";

import AED3Img1 from "@/public/assets/imgs/blogDemo3.webp";
import AED3Img2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";

import img11 from "@/public/assets/imgs/homeAbout.webp";
import img22 from "@/public/assets/imgs/carousel1.webp";
import img33 from "@/public/assets/imgs/carousel2.webp";
import img44 from "@/public/assets/imgs/carousel3.webp";
import img55 from "@/public/assets/imgs/carousel4.webp";

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

export default function party() {
  return (
    <PageWrapper>
      <main className="Party_mian">
        <Banner
          heading="Vista Grand Celebrations"
          para="Discover a world of possibilities at Vista Grand Celebrations – your premier venue for every occasion"
          bgImg={bannerImg}
        />
        <ColorChnagingHeadThreeImage
          text="Step into the world of limitless possibilities at Vista Hospitality's Exhibition Showcase. Our marquee stands as a versatile and dynamic space, curated to elevate your exhibitions. With an expansive layout and cutting-edge facilities, our venue is designed to accentuate and spotlight your innovations, creating an immersive experience for both exhibitors and attendees."
          mainTitle="Wedding and organizing "
          mainTitleWord="Event Planning"
        />
        <section className=" position-relative">
          <div className=" container-fluid vistaCon">
            <AboutEventDetailThreeRight
              subtitle="Embracing Innovation Together."
              title1text1="Showcase Annual"
              title1text2="Exhibition"
              para=" Step into a realm of creativity and innovation at our Annual Exhibition, where ideas unfold and inspiration ignites. Join us in celebrating the power of innovation, where every exhibit tells a unique story of creativity and ingenuity."
              feature1="Innovative Showcases"
              feature2="Interactive Learning Experiences"
              img1={AED3Img1}
              img2={AED3Img2}
              btntitle="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
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
        <AboutStickySecTwo
          img1={img11}
          img2={img22}
          img3={img33}
          img4={img44}
          img5={img55}
          StickyContent={StickyContent}
        />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer />
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
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
