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
