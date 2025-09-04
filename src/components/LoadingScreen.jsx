// components/LoadingScreen.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      overlayRef.current,
      {
        opacity: 1,
        scaleX: 0.7,
        scaleY: 0.2,
        y: "80%",
        borderRadius: "200px",
      },
      {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        y: "0%",
        borderRadius: "0px",
        duration: 2,
        ease: "expo.out",
      }
    )
      .from(
        ".loading-logo",
        {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1.2"
      )
      .from(
        ".loading-text span",
        {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0520] text-white"
    >
      {/* Logo */}
      <div className="loading-logo mb-6">
        <div className="w-20 h-20 border-4 border-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Loading Text */}
      <h1 className="loading-text flex gap-2 text-3xl font-bold uppercase tracking-widest">
        {"ASTRA".split("").map((char, i) => (
          <span key={i} className="text-green-400 drop-shadow-[0_0_10px_#37FF8B]">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
