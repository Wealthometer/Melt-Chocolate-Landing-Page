import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // set initial state individually
    cardsRef.current.forEach((card, i) => {
      gsap.set(card, {
        y: "180%",
        rotate: i % 2 === 0 ? -10 : 10, // alternate rotation
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(cardsRef.current, {
      y: 0,
      rotate: 0,
      duration: 2,
      stagger: 1,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="inner-container pt-30 pb-40">
      <div className="grid grid-cols-12 gap-20">
        {/* LEFT CONTENT */}
        <div className="col-span-7 h-full flex flex-col justify-between">
          <h2 className="max-w-175 leading-20">
            What goes into every bar of{" "}
            <span className="text-orange">MELT</span>
          </h2>
          <div className="max-w-115 leading-6 font-medium">
            Every bar is a result of careful sourcing, precise timing, and
            countless taste tests — all to make sure each bite feels intentional.
          </div>
        </div>

        {/* RIGHT CARDS */}
