"use client";
import FuzzyOverla from "../general/FuzzyOverlay";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "../general/VideoPlayerControls";
import VistaBtn from "../general/VistaBtn";
import VistaBtnLight from "../general/VistaBtnLight";
import ThreeDText from "../general/ThreeDText";

export default function VideoBanner(props) {
  const [isPaused, setIsPaused] = useState(false);
  const [videoDuration, setVideoduration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoduration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.pause);
      video.paused ? video.play() : video.pause();
    }
  };
  return (
    <section id="hero" className="hero_section position-relative mt-3">
      <div className="customVideoPl position-absolute">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          onPlayPause={togglePlayPause}
          size={40}
          width={3}
        />
      </div>
      <div className="hero_inner position-relative">
        <video ref={videoRef} className="w-100" loop muted autoPlay>
          <source src={props.video} />
        </video>
        <FuzzyOverla />
        <div className="video_hero_content">
          <div className="mb-3">
            <h1 className="vista_hos_title text-center">The Destination</h1>
            <ThreeDText />
          </div>
          <div className="heroBtn_con d-flex justify-content-center align-items-center gap-2 flex-wrap gap-sm-4">
            <VistaBtn text="Book Venue" link="#" />
            <VistaBtnLight text="Book Sweets" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
