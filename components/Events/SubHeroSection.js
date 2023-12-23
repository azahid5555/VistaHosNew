import HeadingTwo from "../general/HeadingTwo";

export default function SubHeroSection(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="inner__content subhero-container">
          <div className="row g-0 align-items-center justify-content-between">
            <div className="col-md-6 col-12 pb-4 pb-lg-0">
              <div className="headline__text-wrapper">
                <HeadingTwo text="" text2={props.head1} />
                <HeadingTwo text={props.head2} text2="" />
                <HeadingTwo text={props.head3} text2="" />
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="pe-md-5 subhero--description pe-lg-0">
                <p className="Vista_para_sm fw-normal lh-lg">{props.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
