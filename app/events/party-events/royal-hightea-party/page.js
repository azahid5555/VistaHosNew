import CarouselInnerEvent from "@/components/Events/CarouselInnerEvent";
import FaqWithSlider from "@/components/Events/FaqWithSlider";
import HeroInnerPages from "@/components/Events/HeroInnerPages";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import TeaImg1 from "@/public/assets/imgs/vista_hospitality_Inn_teaParty_1.webp";
import TeaImg2 from "@/public/assets/imgs/vista_hospitality_Inn_teaParty_2.webp";
import TeaImg3 from "@/public/assets/imgs/vista_hospitality_Inn_teaParty_3.webp";
import TeaImg4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_8.webp";
import TeaImg5 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_3.webp";
import TeaImg6 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import TeaImg7 from "@/public/assets/imgs/aboutOne.webp";
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
import ColorChnagingHeadThreeImage from "@/components/general/ColorChnagingHeadThreeImage";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import AboutEventDetailFive from "@/components/Events/AboutEventDetailFive";
const ImgArray = [
  {
    img: TeaImg1,
  },
  {
    img: TeaImg2,
  },
  {
    img: TeaImg3,
  },
  {
    img: TeaImg4,
  },
  {
    img: TeaImg5,
  },
];
const ImgArrayTwo = [
  {
    img: TeaImg5,
  },
  {
    img: TeaImg1,
  },
  {
    img: TeaImg2,
  },
  {
    img: TeaImg3,
  },
  {
    img: TeaImg7,
  },
  {
    img: TeaImg4,
  },

  {
    img: TeaImg6,
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

export default function RoyalHighTea() {
  return (
    <PageWrapper>
      <main className="RoyalHighTea_main">
        <HeroInnerPages
          subtitle="ROYAL HIGH TEA"
          title1="Elevate Your"
          title2="Afternoons"
          para=""
        />

        <CarouselInnerEvent ImgArray={ImgArray} />
        <ColorChnagingHeadThreeImage
          text="Indulge in the timeless charm of an afternoon filled with sophistication, delectable treats, and refined conversations. At Vista Hospitality INN, we invite you to experience the epitome of elegance with our High Tea Party, where every detail is curated to provide a delightful escape into a world of tasteful indulgence."
          mainTitle="High Tea Party at"
          mainTitleWord="Vista Hospitality INN"
        />
        <section className="why__choose--section faq--section position-relative">
          <div className=" container-fluid vistaCon">
            <AboutEventDetailFive
              className="row  align-items-center justify-content-between"
              btntext1="Contact Us"
              link1="/"
              btntext2="View Menu"
              link2="/"
              img1={TeaImg1}
              img2={TeaImg2}
              img3={TeaImg3}
              img4={TeaImg4}
              img5={TeaImg5}
              subtitle="ROYAL HIGH TEA"
              mainTitle="Regal Lounge"
              feature1="Savor Every Moment"
              feature2="The Vista High Tea Experience"
              para="Embark on an afternoon of refined indulgence with the Vista High Tea Experience, a celebration of elegance, delightful flavors, and conviviality. At Vista Hospitality INN, we redefine the art of hosting a High Tea Party, curating an experience that transcends the ordinary and transforms your afternoons into moments of tasteful luxury."
            />
          </div>
        </section>
        <section className="why__choose--section bg-dark60 faq--section position-relative VistaSec_topBorder_grade">
          <div className=" container-fluid vistaCon">
            <AboutEventDetailFive
              className="row  align-items-center justify-content-between flex-row-reverse"
              btntext1="Contact Us"
              link1="/"
              btntext2="View Menu"
              link2="/"
              img1={TeaImg6}
              img2={TeaImg7}
              img3={TeaImg2}
              img4={TeaImg3}
              img5={TeaImg5}
              subtitle="ROYAL HIGH TEA"
              mainTitle="Savor Every Moment"
              feature1="The Culinary Symphony"
              feature2="Delights for the Discerning Palate"
              para="Indulge in a symphony of flavors meticulously curated by our culinary artisans. From delicate finger sandwiches with gourmet fillings to exquisitely crafted pastries and desserts, our High Tea offerings are a showcase of culinary finesse, complemented by an extensive selection of premium teas."
            />
          </div>
        </section>

        <FaqWithSlider carouselArray={ImgArrayTwo} questions={questions} />
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
