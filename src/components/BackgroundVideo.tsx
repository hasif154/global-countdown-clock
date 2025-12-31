import { useRef, useEffect, useImperativeHandle, forwardRef, useCallback } from "react";
import countdownBgVideo from "@/assets/countdown_background.mp4";

export interface BackgroundVideoRef {
  unmute: () => void;
  mute: () => void;
}

export const BackgroundVideo = forwardRef<BackgroundVideoRef>((_props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMutedRef = useRef(true);
  const fadeIntervalRef = useRef<number | null>(null);

  const fadeAudio = useCallback((targetVolume: number, duration: number, onComplete?: () => void) => {
    const video = videoRef.current;
    if (!video) return;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    const startVolume = video.volume;
    const volumeDiff = targetVolume - startVolume;
    const steps = 20;
    const stepDuration = duration / steps;
    let currentStep = 0;

    fadeIntervalRef.current = window.setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      video.volume = startVolume + volumeDiff * progress;

      if (currentStep >= steps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        video.volume = targetVolume;
        onComplete?.();
      }
    }, stepDuration);
  }, []);

  useImperativeHandle(ref, () => ({
    unmute: () => {
      if (videoRef.current) {
        isMutedRef.current = false;
        videoRef.current.muted = false;
        videoRef.current.volume = 0;
        fadeAudio(1, 300);
      }
    },
    mute: () => {
      if (videoRef.current) {
        isMutedRef.current = true;
        fadeAudio(0, 300, () => {
          if (videoRef.current) {
            videoRef.current.muted = true;
          }
        });
      }
    },
  }));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(console.error);

    const handleTimeUpdate = () => {
      if (isMutedRef.current || !video.duration) return;
      
      const timeRemaining = video.duration - video.currentTime;
      
      // Fade out during last 0.5 seconds
      if (timeRemaining <= 0.5 && video.volume > 0) {
        const fadeProgress = timeRemaining / 0.5;
        video.volume = Math.max(0, fadeProgress);
      }
    };

    const handleSeeked = () => {
      // When video loops back to start, fade audio back in
      if (!isMutedRef.current && video.currentTime < 0.5) {
        video.volume = 0;
        fadeAudio(1, 500);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeked", handleSeeked);
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, [fadeAudio]);

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
