import MenuCards from "./MenuCards";

export default function MenuTypes() {
  return (
    <section className="cta-sec">
      <div className="container cta-con pt-3 pb-3">
        <div className="row ">
          <div className="col-12 col-md-6 ">
            <MenuCards
              title="Classic Menu"
              desc="Impress your colleagues and clients with our sophisticated corporate menu packages, designed to elevate any business event."
              link="/"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <MenuCards
              title="Milestone Packages Menu"
              desc="Celebrate lifes big moments with a variety of delicious and customizable options for any occasion."
              link="/"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <MenuCards
              title="Business Packages Menu"
              desc="Impress your colleagues and clients with our sophisticated corporate menu packages, designed to elevate any business event."
              link="/"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <MenuCards
              title="Milestone Packages Menu"
              desc="Celebrate life's big moments with a variety of delicious and customizable options for any occasion."
              link="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
