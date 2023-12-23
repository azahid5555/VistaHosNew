import "@/styles/style.css";
import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";

import cafe1 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_1.webp";
import cafe2 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_2.webp";
import cafe3 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_3.webp";
import cafe4 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_4.webp";
import cafe5 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_5.webp";
import cafe6 from "@/public/assets/imgs/vista_hospitality_Inn_Cafe_6.webp";

import cafe7 from "@/public/assets/imgs/cafe1.webp";
import cafe8 from "@/public/assets/imgs/cafe2.webp";

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
  {
    id: 4,
    col_1_recepieName: "Fried Rice With Vegetable",
    col_1_recepiedesc: "Suspendisse ipsum fringilla",
    col_1_recepiePrice: "$2.30",
    col_1_recepieImage: recepieImage_1,
  },
  {
    id: 5,
    col_1_recepieName: "Wild Mushroom Cream",
    col_1_recepiedesc: "Donec quam libero",
    col_1_recepiePrice: "$3.71",
    col_1_recepieImage: recepieImage_2,
  },
  {
    id: 6,
    col_1_recepieName: "Chocoholic’s Cheese Cake",
    col_1_recepiedesc: "Mauris tempus consequat tellus.",
    col_1_recepiePrice: "$9.99",
    col_1_recepieImage: recepieImage_3,
  },
];
const imgArray = [
  {
    img: cafe1,
  },
  {
    img: cafe2,
  },
  {
    img: cafe3,
  },
  {
    img: cafe4,
  },
  {
    img: cafe5,
  },
  {
    img: cafe6,
  },
];

import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";
const whyChooseUS = [
  {
    id: 1,
    icon: icon1,
    title: "Artisanal Coffee Mastery",
    para: "Who elevate each cup to perfection, ensuring a sensory journey with every sip.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Timeless Elegance",
    para: "where contemporary design, warm hues, and subtle lighting create an inviting haven of sophistication.",
  },
  {
    id: 2,
    icon: icon3,
    title: "Signature Blends",
    para: "thoughtfully curated to offer unique and memorable taste experiences that set us apart.",
  },
];

export default function lAVistaCafe() {
  return (
    <PageWrapper>
      <main className="lAVistaCafe">
        <HeroInnerPages
          subtitle="LA VISTA CAFE"
          title1="Indulge in"
          title2="Elegance"
          para="Where every sip is a journey through the world of refined flavors and sophisticated ambiance"
        />
        <TourWelcome
          tourWelcome_1={tourWelcome_1}
          tourWelcome_2={cafe7}
          tourWelcome_3={cafe8}
          tourWelcome_4={tourWelcome_4}
          tourWelcome_5={tourWelcome_5}
          mainTitle="Welcome to Vista Cafe"
          subtitle="The best of best"
          para="La Vista Cafe, where every sip is a journey through the world of refined flavors and sophisticated ambiance. Nestled within Vista Hospitality Inn, this charming cafe beckons you to experience an elevated coffee and dining experience like no other."
        />
        <section className="charity__details--sec position-relative">
          <div className="container-fluid vistaCon CulinaryExcellence-con">
            <CafeDetails
              cafeimg1={cafe1}
              cafeimg2={cafe5}
              mainTitle="Sip, Savor, and Elevate Your Culinary Journey in Style."
              subtitle="AMBIANCE OF SOPHISTICATION"
              para="At La Vista Cafe, hospitality is an art. Our attentive staff is committed to providing a seamless and enjoyable experience, ensuring that every visit is a delightful escape from the ordinary. Explore our signature blends and La Vista exclusives, each curated to offer a unique and memorable taste. Indulge in the richness of our coffee creations and discover a symphony of flavors that lingers on the palate."
            />
          </div>
        </section>
        <TourMenu
          subtitle="CHOOSE BEST MENU"
          mainTitle="Chef Recomended Special Menu"
          menulineImage={menulineImage}
          colOneRecepie_deatail={colOneRecepie_deatail}
        />
        {/* !next section will be added by you */}
        <ReservationCafe
          cafeimg3={cafe4}
          subtitle="Call For Reservations"
          mainTitle="Opening Hours"
          timing_1="Monday to Thursday"
          timing_2="Saturday to Sunday"
          start_Time="08:00AM"
          end_Time="11:00PM"
        />
        <section className="position-relative whatweofferCom bg-dark60">
          <div className=" container-fluid vistaCon">
            <WhatWeOffer
              heading="Capture the precious moments of your Annual Dinner"
              subHeading="WHY US"
              cardsArray={whyChooseUS}
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
