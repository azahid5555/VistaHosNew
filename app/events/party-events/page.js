import "@/styles/style.css";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import PartiesImg1 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_1.webp";
import PartiesImg2 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_2.webp";
import PartiesImg3 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_3.webp";
import PartiesImg4 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_4.webp";
import PartiesImg5 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_5.webp";
import PartiesImg6 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_6.webp";

// import birthdayVideo from "@/public/assets/BirthdayReel.mp4";

import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import Banner from "@/components/general/Banner";
import AboutEventDetailThreeRight from "@/components/Events/AboutEventDetailThree";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import PartyDetails from "@/components/Events/PartyDetails";
import AboutStickySecTwo from "@/components/Events/AboutStickySecTwo";

const ImgArray = [
  {
    img: PartiesImg1,
  },
  {
    img: PartiesImg2,
  },
  {
    img: PartiesImg3,
  },
  {
    img: PartiesImg4,
  },
  {
    img: PartiesImg5,
  },
  {
    img: PartiesImg6,
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
    headText2: "Diverse Venue Selection",
    para: "Elevate your celebrations with a range of unique and versatile venues tailored to suit any party theme or size. From intimate gatherings to grand soirées, Vista Hospitality provides the perfect setting for every occasion.",
  },
  {
    headText1: "",
    headText2: "Culinary Excellence",
    para: "Indulge your senses with our culinary expertise. Our chefs craft menus that go beyond mere meals, creating a gastronomic journey that enhances the overall party experience. ",
  },
  {
    headText1: "",
    headText2: "Customized Themes and Decor",
    para: "Infuse your party with personality. Whether it's a themed birthday celebration or a sophisticated engagement party, we offer customizable themes and decor to create an atmosphere that reflects your individuality and makes your event truly memorable.",
  },
];

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";
const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Versatile Venue Selection",
    para: "Explore a canvas of possibilities with our diverse and adaptable venues. ",
  },
  {
    id: 2,
    icon: icon2,
    title: "Culinary Excellence",
    para: "Indulge in a culinary journey curated for perfection.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Personalized Service",
    para: "From planning to execution, we ensure that every detail reflects your individual style, ",
  },
];
export default function party() {
  return (
    <PageWrapper>
      <main className="Party_mian">
        <Banner
          heading="Vista Grand Celebrations"
          para="Craft unforgettable moments in our settings curated for sophistication and style, suitable for a diverse range of events."
          bgImg={PartiesImg3}
        />
        <ColorChnagingHeadThreeImage
          text="Welcome to Vista Grand Celebrations, where sophistication meets versatility, transforming your vision into extraordinary events with distinction. Our marquee, a canvas for limitless possibilities, echoes with elegance, setting the stage for unforgettable celebrations."
          mainTitle="Crafting Extraordinary Moments with"
          mainTitleWord="Elegance and Excellence"
        />
        <section className=" position-relative">
          <div className=" container-fluid vistaCon">
            <AboutEventDetailThreeRight
              subtitle="Elevate Every Celebration to an Unmatched Experience"
              title1text1="Meticulously crafted to surpass "
              title1text2="your expectations"
              para="Welcome to Vista Hospitality, where every celebration is transformed into an exceptional experience. Explore our diverse venues, culinary delights, and personalized service, ensuring your parties are not just events but extraordinary moments that linger in the hearts of your guests."
              feature1="Diverse Venue Selection"
              feature2="Personalized Service"
              img1={PartiesImg1}
              img2={PartiesImg2}
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
          carouselArray={ImgArray}
          StickyContent={StickyContent}
          video="public/assets/BirthdayReel.mp4"
        />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Crafting Moments, Elevating Experiences"
              subHeading="DISTINCTIVE FEATURES OF VISTA HOSPITALITY INN"
              cardsArray={whyChooseUS}
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
