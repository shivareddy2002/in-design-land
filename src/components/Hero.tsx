import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/main.mp4";
import heroFallback from "@/assets/factory.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  /* Cinematic slow motion */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  /* Intro → main content transition */
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 3200);
    const contentTimer = setTimeout(() => setContentReady(true), 3400);
    return () => {
      clearTimeout(introTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer — fills viewport precisely */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image */}
        {!videoLoaded && (
          <img
            src={heroFallback}
            alt="Luxury wood interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Video — perfectly centered, no distortion */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
        />

        {/* Wood-toned dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {showIntro ? (
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white/95 opacity-0 animate-fade-in-up"
            >
              Welcome to IDL
            </h1>
          ) : (
            <>
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white/90"
                style={{
                  opacity: contentReady ? 1 : 0,
                  transform: contentReady ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}
              >
                Manifest Your Dream into a Home
              </h1>

              <p
                className="text-base sm:text-lg md:text-2xl font-light text-white/70 max-w-3xl mx-auto"
                style={{
                  opacity: contentReady ? 1 : 0,
                  transform: contentReady ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
                }}
              >
                Supplying premium wood products for your home, office, and creative
                projects. Quality, sustainability, and craftsmanship in every piece.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: contentReady && !showIntro ? 1 : 0,
          transition: "opacity 1s ease-out 0.6s",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
