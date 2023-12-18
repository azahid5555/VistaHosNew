import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import featureImg from "@/public/assets/imgs/feature--1.png";
import detailImg1 from "@/public/assets/imgs/teamDemo.jpg";
import detailImg2 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
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
    title: "ELEGANT",
    desc: "Sophisticated spaces and stunning decor for your occasion.",
  },
  {
    id: 2,
    img: featureImg2,
    title: "VERSATILE",
    desc: "Spaces for weddings, conferences, trade shows, and more.",
  },
  {
    id: 3,
    img: featureImg1,
    title: "PERSONAL",
    desc: "Experienced team for personalized service and tailored events.",
  },
  {
    id: 4,
    img: featureImg2,
    title: "VERSATILE",
    desc: "Spaces for weddings, conferences, trade shows, and more.",
  },
  {
    id: 5,
    img: featureImg1,
    title: "PERSONAL",
    desc: "Experienced team for personalized service and tailored events.",
  },
];

const packageList_1 = [
  {
    id: 1,
    package_1: "Guided Nature Walk",
  },
  {
    id: 2,
    package_1: "Picnic Setup",
  },
  {
    id: 3,
    package_1: "Outdoor Games",
  },
];
const packageList_2 = [
  {
    id: 1,
    package_2: "Rock Climbing",
  },
  {
    id: 2,
    package_2: "Zip-lining",
  },
  {
    id: 3,
    package_2: "Catered Outdoor Lunch",
  },
];
const packageList_3 = [
  {
    id: 1,
    package_3: "Lakeside Picnic",
  },
  {
    id: 2,
    package_3: "Yoga Session",
  },
  {
    id: 3,
    package_3: "Relaxing Nature Walk",
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

export default function vistaBirthdayPark() {
  return (
    <PageWrapper>
      <main className="vistaBirthdayParty">
        <HeroInnerPages
          subtitle="VISTA BIRTHDAY PARK"
          title1="FESTIVE CELEBRATION "
          title2="VENUE"
          para=""
        />

        <TourWelcome
          tourWelcome_1={tourWelcome_1}
          tourWelcome_2={tourWelcome_2}
          tourWelcome_3={tourWelcome_3}
          tourWelcome_4={tourWelcome_4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Coffee Shop"
          subtitle="The best of best"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />

        <AboutEventDetailSix
          subtitle="Dance Grooves"
          mainTitle="Dynamic Dance Floor"
          para="Immerse in the pulsating energy of Hip Grooves on our
                      Dynamic Dance Floor. Elevate your party experience with
                      beats that make your celebration unforgettable."
          feature1="Beating"
          feature1br="Sync"
          feature2="Rhythmic"
          feature2br="Waves"
          detailImg1={detailImg1}
          detailImg2={detailImg2}
          featureImg={featureImg}
        />

        <section className="Event__feature-section position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className=" container-fluid vistaCon py-0">
            <FeaturesListsTwo featureList_2={featureList_2} title="Amenities" />
          </div>
        </section>
        <BirthdayPackage
          subtitle="Musical Serenity"
          mainTitle="Vista Music "
          mainTitleWord="Extravaganza"
          para="Immerse yourself in the rhythmic enchantment at Vista Harmony Haven, where every note resonates with magic. Join us in a musical journey curated to captivate your senses and create unforgettable memories."
          featureTitle1="Nature Explorer"
          featureTitle2="Adventure Seeker"
          featureTite3="Tranquil Retreat"
          packageList_1={packageList_1}
          packageList_2={packageList_2}
          packageList_3={packageList_3}
        />
        <section className="charity__details--sec position-relative bg-dark60 VistaSec_topBorder_grade">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <AboutEventDetailFour
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
