import { useRef, useEffect, useState } from "react";
import countdownBgVideo from "@/assets/countdown_background.mp4";

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const handleEnableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowPrompt(false);
    }
  };

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        src={countdownBgVideo}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        autoPlay
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Sound enable prompt */}
      {showPrompt && (
        <button
          onClick={handleEnableSound}
          className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm hover:bg-white/30 transition-all animate-pulse"
        >
          🔊 Tap to enable sound
        </button>
      )}
    </div>
  );
}
