import playBtn from "@/public/assets/icons/play.svg";
import pauseBtn from "@/public/assets/icons/pause.svg";
import Image from "next/image";
import { useState } from "react";
export default function VideoPlayerControls(props) {
  const [isPausedbtn, setIsPausedbtn] = useState(false);
  const center = props.size / 2;
  const radius = center - props.width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - props.progress);
  return (
    <div className="position-relative d-flex justify-content-center align-items-center">
      <svg
        width={props.size}
        height={props.size}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          className=" opacity-25"
          cx={center}
          cy={center}
          r={radius}
          fill="#ffffff"
          stroke="transparent"
          strokeWidth={props.width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={props.width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="position-absolute">
        <button
          className="group pointer-event d-flex justify-content-center align-items-center bg-transparent p-0 border-0"
          onClick={props.onPlayPause}
        >
          <div
            className="playPauseBtnWrapper d-flex justify-content-center align-items-center"
            onClick={() => setIsPausedbtn(!isPausedbtn)}
          >
            {isPausedbtn ? (
              <Image src={playBtn} alt="playbtn" />
            ) : (
              <Image src={pauseBtn} alt="pausebtn" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
