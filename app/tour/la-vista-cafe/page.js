import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";
import cafeimg1 from "@/public/assets/imgs/exhibition.webp";
import cafeimg2 from "@/public/assets/imgs/charity.webp";
import cafeimg3 from "@/public/assets/imgs/charity.webp";
import menulineImage from "@/public/assets/imgs/line-2.png";
import recepieImage_1 from "@/public/assets/imgs/menu-image-1.jpg";
import recepieImage_2 from "@/public/assets/imgs/recepieImage_2.jpg";
import recepieImage_3 from "@/public/assets/imgs/recepieImage_3.jpg";
import recepieImage_4 from "@/public/assets/imgs/recepieImage_4.jpg";
import recepieImage_5 from "@/public/assets/imgs/recepieImage_5.jpg";
import recepieImage_6 from "@/public/assets/imgs/recepieImage_6.jpg";
import tourWelcome_1 from "@/public/assets/imgs/cup-1.jpg";
import tourWelcome_2 from "@/public/assets/imgs/cup-2.jpg";
import tourWelcome_3 from "@/public/assets/imgs/cup-3.jpg";
import tourWelcome_4 from "@/public/assets/imgs/cup-4.jpg";
import tourWelcome_5 from "@/public/assets/imgs/line-bg.png";
import cafeImageName from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import "@/styles/style.css";
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import CafeDetails from "@/components/tourComponent/CafeDetails";
import WhatWeOffer from "@/components/Events/WhatWeOffer";
import ReservationCafe from "@/components/tourComponent/ReservationCafe";
import TourWelcome from "@/components/tourComponent/TourWelcome";
import TourMenu from "@/components/tourComponent/TourMenu";

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
const colOneRecepie_deatail = [
  {
    id: 1,
    col_1_recepieName: "Vallartas Tossed Salad Steak",
    col_1_recepiedesc: "Suspendisse ipsum fringilla",
    col_1_recepiePrice: "$6.75",
    col_1_recepieImage: recepieImage_1,
  },
  {
    id: 2,
    col_1_recepieName: "Mushroom Quesadilla Beans",
    col_1_recepiedesc: "Vestibulum tempor erat",
    col_1_recepiePrice: "$9.75",
    col_1_recepieImage: recepieImage_2,
  },
  {
    id: 3,
    col_1_recepieName: "2 Chicken and Beanchorizo",
    col_1_recepiedesc: "Mauris tempus consequat tellus.",
    col_1_recepiePrice: "$2.75",
    col_1_recepieImage: recepieImage_3,
  },
];
const colTwoRecepie_deatail = [
  {
    id: 1,
    col_2_recepieName: "Fried Rice With Vegetable",
    col_2_recepiedesc: "Suspendisse ipsum fringilla",
    col_2_recepiePrice: "$2.30",
    col_2_recepieImage: recepieImage_1,
  },
  {
    id: 2,
    col_2_recepieName: "Wild Mushroom Cream",
    col_2_recepiedesc: "Donec quam libero",
    col_2_recepiePrice: "$3.71",
    col_2_recepieImage: recepieImage_2,
  },
  {
    id: 3,
    col_2_recepieName: "Chocoholic’s Cheese Cake",
    col_2_recepiedesc: "Mauris tempus consequat tellus.",
    col_2_recepiePrice: "$9.99",
    col_2_recepieImage: recepieImage_3,
  },
];

export default function lAVistaCafe() {
  return (
    <PageWrapper>
      <main className="lAVistaCafe">
        <HeroInnerPages
          subtitle="LA VISTA CAFE"
          title1="CHIC CULINARY"
          title2="ESCAPE"
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
        <section className="charity__details--sec position-relative">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <CafeDetails
              cafeimg1={cafeimg1}
              cafeimg2={cafeimg2}
              mainTitle="Vista Charity Support and giving Hub"
              subtitle="A PREMIER EVENT DESIGN & PLANNING FIRM"
              para="Welcome to Vista Giving Hub, where compassion meets action. Explore our dedicated space designed for impactful charity events. Join us in making a difference and creating positive change in our community"
            />
          </div>
        </section>
        <TourMenu
          subtitle="CHOOSE BEST MENU"
          mainTitle="Chef Recomended Special Menu"
          menulineImage={menulineImage}
          colOneRecepie_deatail={colOneRecepie_deatail}
          colTwoRecepie_deatail={colTwoRecepie_deatail}
        />
        {/* !next section will be added by you */}
        <ReservationCafe
          cafeimg3={cafeimg3}
          subtitle="Call For Reservations"
          mainTitle="Opening Hours"
          timing_1="Monday to Thursday"
          timing_2="Saturday to Sunday"
          start_Time="08:00AM"
          end_Time="11:00PM"
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
