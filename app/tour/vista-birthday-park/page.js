import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import featureImg from "@/public/assets/imgs/feature--1.png";
import detailImg1 from "@/public/assets/imgs/teamDemo.jpg";
import detailImg2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";

import bdimg1 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_1.webp";
import bdimg2 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_2.webp";
import bdimg3 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_3.webp";
import bdimg4 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_4.webp";
import bdimg5 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_5.webp";
import bdimg6 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_6.webp";

import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import tourWelcome_1 from "@/public/assets/imgs/cup-1.jpg";
import tourWelcome_2 from "@/public/assets/imgs/cup-2.jpg";
import tourWelcome_3 from "@/public/assets/imgs/cup-3.jpg";
import tourWelcome_4 from "@/public/assets/imgs/cup-4.jpg";
import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";

import featureImg1 from "@/public/assets/imgs/golden__leave.png";
import featureImg2 from "@/public/assets/imgs/golden__paint.png";
import img5 from "@/public/assets/imgs/exhibition.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailSix from "@/components/Events/AboutEventDetailSix";
import FeaturesListsTwo from "@/components/tourComponent/FeaturesListsTwo";
import ServiceFeature from "@/components/Events/ServiceFeature";
import BirthdayPackage from "@/components/tourComponent/BirthdayPackage";
import AboutEventDetailFour from "@/components/Events/AboutEventDetailFour";
import TourWelcome from "@/components/tourComponent/TourWelcome";
const featureList_2 = [
  {
    id: 1,
    img: featureImg1,
    title: "Vista Luxury Suites",
    desc: "Indulge in opulence with our spacious and well-appointed luxury suites, offering a blend of comfort and sophistication.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "Modern Conveniences",
    desc: "Enjoy the convenience of modern amenities, including high-speed Wi-Fi, flat-screen TVs, and in-room services for a seamless stay.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "La Vista Cafe",
    desc: "Savor culinary excellence at La Vista Cafe, where each dish is a celebration of flavors, and the ambiance is one of timeless elegance.",
  },
  {
    id: 4,
    img: featureImg2,
    title: "Event Planning Expertise",
    desc: "Benefit from our seasoned event planning team, ensuring meticulous coordination and flawless execution for your special occasions.",
  },
  {
    id: 5,
    img: featureImg1,
    title: "Professional Staff",
    desc: "Our dedicated staff is committed to providing attentive and personalized service, ensuring that every guest feels valued and well-cared-for.",
  },
];

const packageList_1 = [
  {
    id: 1,
    package_1: "Adaptable spaces",
  },
  {
    id: 2,
    package_1: "Playful and interactive",
  },
  {
    id: 3,
    package_1: "Options for themed parties",
  },
];
const packageList_2 = [
  {
    id: 1,
    package_2: "Collaborative planning",
  },
  {
    id: 2,
    package_2: "Flexible arrangements",
  },
  {
    id: 3,
    package_2: "Unique and memorable",
  },
];
const packageList_3 = [
  {
    id: 1,
    package_3: "Picturesque surroundings",
  },
  {
    id: 2,
    package_3: "Vibrant decor",
  },
  {
    id: 3,
    package_3: "Unforgettable memory",
  },
];
const featurelist = [
  {
    id: 1,
    feature_1: "Select Your Desired Date",
  },
  {
    id: 2,
    feature_1: "Choose a Birthday Package",
  },
  {
    id: 3,
    feature_1: "Confirm the Reservation with Secure Online Payment",
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

const imgArray = [
  {
    img: bdimg1,
  },
  {
    img: bdimg2,
  },
  {
    img: bdimg3,
  },
  {
    img: bdimg4,
  },
  {
    img: bdimg5,
  },
  {
    img: bdimg6,
  },
];

export default function vistaBirthdayPark() {
  return (
    <PageWrapper>
      <main className="vistaBirthdayParty">
        <HeroInnerPages
          subtitle="VISTA BIRTHDAY PARK"
          title1="A Joyous Haven for "
          title2="Celebrations"
          para=""
        />

        <TourWelcome
          tourWelcome_1={bdimg1}
          tourWelcome_2={bdimg2}
          tourWelcome_3={bdimg3}
          tourWelcome_4={bdimg4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Birthday Park"
          subtitle="The best of best"
          para="Vista Hospitality Inn dedicated to creating unforgettable birthday experiences. Nestled in a charming setting, this park is designed to infuse every celebration with an air of whimsy and delight."
        />

        <AboutEventDetailSix
          subtitle="Birthday Park"
          mainTitle="A Celebration Wonderland"
          para="Vista Birthday Park is more than a venue; it's a celebration wonderland. The park's charming setting and versatile spaces make it the ideal canvas for creating birthday memories that last a lifetime."
          feature1="Beating"
          feature1br="Sync"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={bdimg5}
          detailImg2={bdimg6}
          featureImg={featureImg}
        />

        <section className="Event__feature-section position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesListsTwo featureList_2={featureList_2} title="Amenities" />
          </div>
        </section>
        <BirthdayPackage
          subtitle="Whimsical Atmosphere"
          mainTitle="Vista Birthday "
          mainTitleWord="Park"
          para="Immerse yourself in a whimsical ambiance, where vibrant decor and playful touches set the stage for a birthday celebration filled with joy."
          featureTitle1="Versatility "
          featureTitle2="Tailored Themes"
          featureTite3="Lasting Memories"
          packageList_1={packageList_1}
          packageList_2={packageList_2}
          packageList_3={packageList_3}
        />
        <section className="charity__details--sec position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <AboutEventDetailFour
              video="/assets/BirthdayReel.mp4"
              className="row py-5 gap-5 flex-row-reverse"
              mainTitle="Book Your Nature inspired Celebration"
              subtitle="TIMELESS CELEBRATIONS BEGIN HERE"
              para="Ready to celebrate amidst the beauty of Vista Birthday Park? Secure your preferred date by making a reservation. Our easy online booking system ensures a seamless process, allowing you to focus on creating cherished moments."
              featurelist={featurelist}
              btntext="Contact Us"
              btnlink="/"
            />
          </div>
        </section>
        <FaqWithSlider carouselArray={imgArray} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
