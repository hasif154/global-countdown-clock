import { useEffect, useRef } from "react";
import finalCountdownVideo from "@/assets/final_countdown.mp4";

interface FinalCountdownVideoProps {
  onVideoEnd: () => void;
}

export function FinalCountdownVideo({ onVideoEnd }: FinalCountdownVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black animate-fade-in">
      <video
        ref={videoRef}
        src={finalCountdownVideo}
        className="w-full h-full object-cover"
        onEnded={onVideoEnd}
        playsInline
        muted={false}
      />
    </div>
  );
}
