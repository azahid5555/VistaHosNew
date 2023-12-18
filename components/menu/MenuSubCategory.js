export default function MenuSubCategory(props) {
  return (
    <div>
      {props.menuArray.map((item, i) => (
        <div key={i} className="row my-5 justify-content-between">
          <div className="col-8">
            <p className=" Vista_para_l text-white font-link fs-5">
              {item.title}
            </p>
            <p className=" Vista_para_sm ">{item.desc}</p>
          </div>
          <div className="col-3 text-end">
            <span className=" font-link fs-6 menuPrice text-white position-relative">
              {item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
