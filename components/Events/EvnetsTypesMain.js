import AnimatedCardFive from "./AnimatedCardFive";
import img1 from "@/public/assets/imgs/vista_hospitality_Inn_Wedding_1.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_2.webp";
import img4 from "@/public/assets/imgs/vista_hospitality_Inn_Public_1.webp";

export default function EvnetsTypesMain() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="mb-4">
            <AnimatedCardFive
              title="Wedding Events"
              para="Your dream wedding, made simple."
              img={img1}
              link="/wedding-event"
            />
          </div>
          <div className="mb-4">
            <AnimatedCardFive
              title="Corporate Events"
              para="Elevate your event with our preofessional touch."
              img={img2}
              link="/corporate-events"
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="fullHeight_animatedCard h-100 ">
            <div className="pb-4 h-100">
              <AnimatedCardFive
                title="Public Events"
                para="Gatherings that Transcend, Celebrations that Unite."
                img={img4}
                link="/public-events"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-8">
          <AnimatedCardFive
            title="Parties"
            para="Celebrate Life's Moments, Crafted with Perfection"
            img={img3}
            link="/party-events"
          />
        </div>
      </div>
    </>
  );
}
