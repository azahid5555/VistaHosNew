import tourMarquee from "@/public/assets/imgs/vista_hospitality_Inn_2.webp";
import tourSweets from "@/public/assets/imgs/aboutTwo.webp";
import tourCafe from "@/public/assets/imgs/aboutOne.webp";
import tourAvaLawn from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_1.webp";
import tourBDpark from "@/public/assets/imgs/vista_hospitality_Inn_tour_BDPark.webp";
import tourEngPark from "@/public/assets/imgs/blogDemo4.webp";
import tourpoolSide from "@/public/assets/imgs/vista_hospitality_Inn_Tour_Poolside.webp";
import AnimatedCardFive from "../Events/AnimatedCardFive";

export default function EventsTypesTwo() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="mb-4">
            <AnimatedCardFive
              title="Vista Marquee"
              para="A space that transforms to accommodate a spectrum of events."
              img={tourMarquee}
              link="/tour/vista-marquee"
            />
          </div>
          <div className="mb-4 mb-md-0">
            <AnimatedCardFive
              title="Vista Luxury Suites"
              para="Where every stay is a seamless blend of comfort and lavish hospitality."
              img={tourSweets}
              link="/tour/vista-luxury-suits"
            />
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4">
          <div className="fullHeight_animatedCard h-100">
            <AnimatedCardFive
              title="La Vista Cafe"
              para="Where every cup is a journey through the world of exquisite flavors."
              img={tourCafe}
              link="/tour/la-vista-cafe"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 mb-4">
          <div className="fullHeight_animatedCard h-100">
            <AnimatedCardFive
              title="Vista Ava Lawn"
              para="A venue tailored for grand celebrations amidst lush greenery and open skies."
              img={tourAvaLawn}
              link="/tour/vista-ava-lawn"
            />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          <div className="mb-4">
            <AnimatedCardFive
              title="Vista Birthday Park"
              para="Designed to make every celebration a memorable and festive occasion."
              img={tourBDpark}
              link="/tour/vista-birthday-park"
            />
          </div>
          <div className="mb-4">
            <AnimatedCardFive
              title="Vista Engagement Park"
              para="Where love blossoms in a picturesque setting tailored for romance."
              img={tourEngPark}
              link="/tour/vista-engagment-park"
            />
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-8 col-12">
          <div className="">
            <AnimatedCardFive
              title="Vista Lawn Pool"
              para="A haven of tranquility and leisure amidst elegant surroundings."
              img={tourpoolSide}
              link="/tour/vista-lawn-pool-side"
            />
          </div>
        </div>
      </div>
    </>
  );
}
