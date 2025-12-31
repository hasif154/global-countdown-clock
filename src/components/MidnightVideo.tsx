import { useEffect, useRef } from "react";
import videoSrc from "@/assets/2026_new_year_animation.mp4";

interface MidnightVideoProps {
  onVideoEnd: () => void;
  soundEnabled?: boolean;
}

export function MidnightVideo({ onVideoEnd, soundEnabled = false }: MidnightVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
      videoRef.current.play().catch(console.error);
    }
  }, [soundEnabled]);

  return (
    <div className="fixed inset-0 z-50 bg-black animate-fade-in">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        onEnded={onVideoEnd}
        playsInline
        muted={!soundEnabled}
      />
    </div>
  );
}
