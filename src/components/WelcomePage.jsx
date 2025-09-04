// components/WelcomePage.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Background from "./Background";
import AstraLogo from "../assets/Logo.png";
import ScrollVelocity from './ScrollVelocity.jsx';

export default function WelcomePage({ onProceed }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".welcome-title",
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        ".welcome-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".tagline",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        ".welcome-btn",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        ".scroll-text",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );

  }, []);

  // Looping logo animation (scroll left to right)
  useEffect(() => {
    gsap.to(".loop-logo", {
      xPercent: -100,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Pulse effect for button (radar-like)
  useEffect(() => {
    gsap.to(".welcome-btn", {
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);
  
  

  return (
    <div
      ref={containerRef}
      className="containerRef relative w-full h-screen  flex flex-col items-center justify-center text-center px-6 min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <Background />

      {/* Top-left Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <img
          src={AstraLogo} 
          alt="ASTRA Logo"
          className="w-50 drop-shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="welcome-title mb-7 text-6xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent ">

          <button
      className="
        relative cursor-pointer uppercase tracking-[0.7rem]
        font-bold text-[3rem] px-12 py-4
        border-y border-transparent
        transition-all duration-200 ease-in-out
      "
      style={{
        // variables replaced directly
        color: "rgb(46, 213, 115)",
        backgroundImage: `
          radial-gradient(circle, rgba(46,213,116,0.36) 0%, rgba(0,0,0,0) 95%),
          linear-gradient(rgba(46,213,116,0.073) 1px, transparent 1px),
          linear-gradient(to right, rgba(46,213,116,0.073) 1px, transparent 1px)
        `,
        backgroundSize: "cover, 15px 15px, 15px 15px",
        backgroundPosition: "center center, center center, center center",
        borderImage: `radial-gradient(circle, rgb(46,213,115) 0%, rgba(0,0,0,0) 100%) 1`,
        filter: "hue-rotate(0deg)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundSize = "cover, 10px 10px, 10px 10px";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundSize = "cover, 15px 15px, 15px 15px";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.filter = "hue-rotate(250deg)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.filter = "hue-rotate(0deg)";
      }}
    >
      Welcome to ASTRA
    </button>

      </h1>

{/* Description */}
<p className="welcome-desc mt-4 text-xl max-w-3xl text-gray-200 tracking-wide leading-relaxed">
  <span className="text-blue-400 font-semibold">ASTRĀ</span> — an automated{" "}
  <span className="text-yellow-400">SIGINT</span> engine designed to
  detect, analyze, and classify signals in real-time, enabling{" "}
  <span className="text-green-400">faster threat recognition</span> for
  modern defence environments.
</p>

{/* Extra Tagline */}
<p className="tagline mt-4 text-base text-gray-400 italic tracking-wider">
  ⚡ "Empowering <span className="text-red-400">Defence Intelligence</span>  
  with <span className="text-blue-300">Automation</span> &{" "}
  <span className="text-yellow-300">Precision</span>" ⚡
</p>


      {/* Proceed Button */}
      <button 
  onClick={onProceed}
  className=" welcome-btn
    mt-10
    relative group cursor-pointer
    px-0 py-0 bg-transparent border-0 
    uppercase tracking-[3px] font-sans text-[2em] 
    text-transparent 
    [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]
  "
>
  <span className="actual-text">&nbsp;Login&nbsp;</span>

  <span
    aria-hidden="true"
    className="
      absolute inset-0 w-0 overflow-hidden
      text-[#37FF8B] 
      border-r-[6px] border-[#37FF8B] 
      transition-all duration-500 ease-in-out
      group-hover:w-full
      [-webkit-text-stroke:1px_#37FF8B]
      drop-shadow-[0_0_23px_#37FF8B]
    "
  >
    &nbsp;Login&nbsp;
  </span>
</button>

      {/* Looping Logos at Bottom */}
      {/* <div className="absolute bottom-4 w-full overflow-hidden">
        <div className="flex gap-12 loop-logo whitespace-nowrap">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                src={AstraLogo}
                alt="Loop Logo"
                className="w-16 h-16 opacity-70 hover:opacity-100 transition"
              />
            ))}
        </div>
      </div> */}
      {/* Logo Loop */}
{/* <div className="relative  bottom-6 w-full overflow-hidden flex justify-center">
  <div className="relative pt-20 w-[90%] flex items-center overflow-hidden whitespace-nowrap">
    

    <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-l from-transparent  z-10"></div>
    

    <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-r from-transparent  z-10"></div>


    <div className="flex  animate-marquee">
      <img src="" alt="forbes" className="h-6 mx-6" />
      <img src="" alt="adweek" className="h-6 mx-6" />
      <img src="" alt="pmi" className="h-6 mx-6" />
      <img src="" alt="wf" className="h-6 mx-6" />
      <img src=""alt="adweek2" className="h-6 mx-6" />
      <img src="" alt="rd" className="h-6 mx-6" />
      <img src="" alt="pmi2" className="h-6 mx-6" />
      <img src="" alt="webby" className="h-6 mx-6" />
    </div>

    <div className="flex animate-marquee">
      <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="forbes" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="adweek" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="pmi" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="wf" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="adweek2" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="rd" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="pmi2" className="h-6 mx-6" />
      <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="webby" className="h-6 mx-6" />
    </div>

  </div>
</div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}
      </style> */}
      <ScrollVelocity
      
  texts={["DEFENCE", "ASTRĀ", "SECURITY", "INTELLIGENCE"]}
  velocity={400}
  numCopies={8}
  className="scroll-text text-[#37FF8B] mt-10"
/>

    </div>
  );
}
