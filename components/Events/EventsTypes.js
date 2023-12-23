import AnimatedCardFive from "./AnimatedCardFive";
import img1 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_1.webp";
import img2 from "@/public/assets/imgs/corporateEventBg.webp";
import img3 from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import img4 from "@/public/assets/imgs/vista_hospitality_Inn_corporate_2.webp";
import img5 from "@/public/assets/imgs/exhibition.webp";

export default function EventsTypes() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-12 col-md-8">
          <div className="mb-4">
            <AnimatedCardFive
              title="Corporate Dinner"
              para="Elevate Your Corporate Moments: Where Exquisite Dining Meets Professional Brilliance."
              img={img1}
              link="/corporate-events/corporate-dinner-events"
            />
          </div>
          <div className="mb-4 mb-md-0">
            <AnimatedCardFive
              title="Annual Dinner"
              para="Celebrating Success, Uniting for Tomorrow: Your Annual Dinner, A Night of Excellence."
              img={img2}
              link="/corporate-events/annual-dinner"
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="fullHeight_animatedCard h-100">
            <AnimatedCardFive
              title="Annual Meetings"
              para="Where Vision Meets Progress, Excellence Guides Every Agenda."
              img={img3}
              link="/corporate-events/annual-meetings"
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <AnimatedCardFive
            title="Charity Events"
            para="Inspiring Hope, Creating Impact, One Heartfelt Gesture at a Time."
            img={img4}
            link="/corporate-events/charity-events"
          />
        </div>
        <div className="col-12 col-md-6">
          <AnimatedCardFive
            title="Exibition"
            para="Where Innovation Meets Inspiration in Every Showcase."
            img={img5}
            link="/corporate-events/exibition"
          />
        </div>
      </div>
    </>
  );
}
