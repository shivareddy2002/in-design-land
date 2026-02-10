// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-wood-interior.jpg";

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with subtle zoom animation */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[scaleInSoft_1.5s_ease-out_forwards]"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
//       </div>

//       {/* Content with staggered animations */}
//       <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-primary-foreground">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]">
//             {/* Discover the Beauty of Wood */}
//             Manifesting Your Vision into Timeless Spaces
//           </h1>
          
//           <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 opacity-0 animate-fade-up [animation-delay:500ms] [animation-fill-mode:forwards]">
//             Supplying premium wood products for your home, office, and creative projects. 
//             Quality, sustainability, and craftsmanship in every piece.
//           </p>

//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-up [animation-delay:700ms] [animation-fill-mode:forwards]">
//             <Button
//               size="lg"
//               variant="secondary"
//               className="px-8 py-6 text-lg font-semibold btn-premium"
//               onClick={() => scrollToSection("#products")}
//             >
//               View Catalog
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="px-8 py-6 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-premium"
//               onClick={() => scrollToSection("#about")}
//             >
//               Learn More
//             </Button>
//           </div> */}
//         </div>
//       </div>

//       {/* Scroll Indicator with fade animation 
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up [animation-delay:1000ms] [animation-fill-mode:forwards]">
//         <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//       */}
//     </section>
//   );
// };

// export default Hero;
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/main.mp4";
import heroFallback from "@/assets/factory.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showIntro, setShowIntro] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  /* 🎞 Cinematic slow motion */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  /* 👋 Intro timing (LONGER & CLEAR) */
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200); // increased time
    return () => clearTimeout(timer);
  }, []);

  /* 🎬 Fade-to-black loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => setFadeOut(false), 1200);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  /* 🎥 Luxury parallax (DESKTOP ONLY) */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 5;
      const y = (e.clientY / innerHeight - 0.5) * 5;

      containerRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 🚀 Fallback image */}
        {!videoLoaded && (
          <img
            src={heroFallback}
            alt="Luxury wood interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* 🎥 Video */}
        <div
          ref={containerRef}
          className="absolute inset-0 transition-transform duration-[2500ms] ease-out"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
          />
        </div>

        {/* 🌙 Adaptive overlay for readability */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/55" />

        {/* 🎬 Fade to black */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-[1200ms] ${
            fadeOut ? "opacity-50" : "opacity-0"
          }`}
        />
      </div>

      {/* 🧾 Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {showIntro ? (
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white/95 backdrop-blur-[2px] px-4 py-2 rounded-md opacity-0 animate-fade-up scale-95 [animation-fill-mode:forwards]">
              Welcome to IDL
            </h1>
          ) : (
<>
  <h1
    className="
      text-3xl sm:text-4xl md:text-6xl
      font-bold leading-tight
      text-white/60
      px-2
      opacity-0 animate-fade-up
      [animation-delay:300ms]
      [animation-fill-mode:forwards]
    "
  >
    Manifest Your Dream into a Home
  </h1>

  <p
    className="
      text-base sm:text-lg md:text-2xl
      font-light
      text-white/45
      max-w-3xl mx-auto
      px-2
      opacity-0 animate-fade-up
      [animation-delay:500ms]
      [animation-fill-mode:forwards]
    "
  >
    Supplying premium wood products for your home, office, and creative
    projects. Quality, sustainability, and craftsmanship in every piece.
  </p>
</>

          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
