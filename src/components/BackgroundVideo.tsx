import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import countdownBgVideo from "@/assets/countdown_background.mp4";

export interface BackgroundVideoRef {
  unmute: () => void;
  mute: () => void;
}

export const BackgroundVideo = forwardRef<BackgroundVideoRef>((_props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    unmute: () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    },
    mute: () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
      }
    },
  }));

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        src={countdownBgVideo}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
});

BackgroundVideo.displayName = "BackgroundVideo";
