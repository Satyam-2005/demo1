// components/ScrollVelocity.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVelocity({
  texts = [],
  velocity = 100,
  numCopies = 6,
  className = "",
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle = {},
  scrollerStyle = {},
}) {
  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scroller = scrollerRef.current;

    // Clone spans for infinite effect
    const totalCopies = numCopies;
    const textContent = scroller.innerHTML;
    for (let i = 0; i < totalCopies - 1; i++) {
      scroller.innerHTML += textContent;
    }

    let direction = 1;

    const tl = gsap.to(scroller, {
      xPercent: -100,
      duration: velocity,
      ease: "linear",
      repeat: -1,
    });

    // Reverse direction on scroll up/down
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        direction = self.direction === 1 ? 1 : -1;
        tl.timeScale(direction);
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [velocity, numCopies]);

  return (
    <section
      ref={wrapperRef}
      className={`${parallaxClassName} relative overflow-hidden`}
      style={parallaxStyle}
    >
      <div
        ref={scrollerRef}
        className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
        style={scrollerStyle}
      >
        {texts.map((text, index) => (
          <span key={index} className={`mx-4 ${className}`}>
            {text}&nbsp;
          </span>
        ))}
      </div>
    </section>
  );
}
