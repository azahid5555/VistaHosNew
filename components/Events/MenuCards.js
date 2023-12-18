import Link from "next/link";

export default function MenuCards(props) {
  return (
    <Link href={props.link} className="cta-sec-a">
      <div className="cta-venubooking venu-col-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          className="absolute top-[3vw] right-[3vw] -rotate-45 svgIcon"
          data-projection-id={98}
        >
          <path
            stroke="currentColor"
            strokeWidth={2}
            d="M.87 12.314h21.757m0 0L11.314 1m11.313 11.314L11.314 23.627"
          />
        </svg>
        <div className="cta-inner-content">
          <h2 className="h2 vista_hos_title2">{props.title}</h2>
          <p className="Vista_para_sm">{props.desc}</p>
        </div>
      </div>
    </Link>
  );
}
