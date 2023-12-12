import HeadingTwo from "./HeadingTwo";

export default function TitleNDescription() {
  return (
    <section className="whatwedo-sec position-relative">
      <div className="container-fluid vistaCon position-relative z-2 mt-0 pt-5">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4">
            <HeadingTwo text="Family Owned and Rooted." />
          </div>
          <div className="col-12 col-md-6">
            <p className=" Vista_para_sm">
              This place is more than just a venue, its a hub of social activity
              that sits at the center of the Long Beach community, where people
              from all walks of life can come together to celebrate, network,
              and make memories that last a lifetime. Our 40+ years of expertise
              and local roots make us the premier event venue for all your So
              Cal events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
