import AnimatedCardFive from "./AnimatedCardFive";
import img1 from "@/public/assets/imgs/corporate_event.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/charity.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";

export default function EventsTypes() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-8">
          <div className="mb-4">
            <AnimatedCardFive
              title="Corporate Dinner"
              para="Your dream wedding, made simple."
              img={img1}
              link="/"
            />
          </div>
          <div className="mt-4">
            <AnimatedCardFive
              title="Annual Dinner"
              para="Your dream wedding, made simple."
              img={img2}
              link="/"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="fullHeight_animatedCard h-100">
            <AnimatedCardFive
              title="Annual Meetings"
              para="Your dream wedding, made simple."
              img={img3}
              link="/"
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <AnimatedCardFive
            title="Charity"
            para="Your dream wedding, made simple."
            img={img4}
            link="/"
          />
        </div>
        <div className="col-12 col-md-6">
          <AnimatedCardFive
            title="Exibition"
            para="Your dream wedding, made simple."
            img={img5}
            link="/"
          />
        </div>
      </div>
    </>
  );
}
