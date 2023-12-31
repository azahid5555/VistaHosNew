import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import BannerTitleScroll from "@/components/Events/BannerTitleScroll";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import MenuTypes from "@/components/Events/MenuTypes";
import PdfMenuSec from "@/components/Events/PdfMenuSec";
import FaqWithSlider from "@/components/Events/FaqWithSlider";

import img1 from "@/public/assets/imgs/homeAbout.webp";
import img2 from "@/public/assets/imgs/carousel1.webp";
import img3 from "@/public/assets/imgs/carousel2.webp";
import img4 from "@/public/assets/imgs/carousel3.webp";
import img5 from "@/public/assets/imgs/carousel4.webp";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";

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

export default function Menu() {
  return (
    <PageWrapper>
      <main className="menu_page">
        <BannerTitleScroll title1="MENU AT" title2="THE VISTA" />
        <section className=" position-relative homeAboutSec">
          <div className="container-fluid vistaCon position-relative z-2">
            <HomeAboutSec text="We know that food brings people together. That's why we've created menus with a variety of offerings to elevate your event experience. Our culinary team takes great care to prepare each dish to perfection and tailor it to meet the diverse tastes and dietary needs of your guests." />
          </div>
        </section>
        <section className=" position-relative ">
          <div className="container-fluid vistaCon pt-0 position-relative z-2">
            <MenuTypes />
          </div>
        </section>
        <section className=" position-relative">
          <div className="container-fluid vistaCon pt-0 mt-0 position-relative z-2">
            <PdfMenuSec />
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
