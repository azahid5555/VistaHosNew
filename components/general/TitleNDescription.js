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
              At Vista Hospitality, we take immense pride in being a
              family-owned business deeply rooted in our values. Founded on
              principles of warmth, integrity, and a commitment to excellence,
              our heritage drives every aspect of our operations. As a family,
              we extend our ethos of care and dedication to every event and
              service we offer. Our legacy inspires us to create unforgettable
              experiences, fostering a sense of belonging and hospitality that
              transcends expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
