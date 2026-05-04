import React from 'react'
import Caramel from '../assets/images/crispy-caramel.png'
import Cocoa from '../assets/images/dark-cocoa.png'
import Orange from '../assets/images/orange-zest-milk.png'
import Almond from '../assets/images/almond-crunch.png'
import Stamp from '../assets/images/stamp.png'
import CaramelOpen from '../assets/images/crispy-caramel-1.png'
import CocoaOpen from '../assets/images/dark-cocoa-1.png'
import OrangeOpen from '../assets/images/orange-zest-milk-1.png'
import AlmondOpen from '../assets/images/almond-crunch-1.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HeroChocolates = ({ activeFlavor }) => {

  useGSAP(() => { 

    gsap.from('.caremel-choco', {
      y: "60%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.cocoa-choco', {
      y: "40%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.orange-choco', {
      y: "40%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.almond-choco', {
      y: "60%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    // Stamp
    gsap.from('.stamp', {
      scale: 2,
      opacity: 0,
      duration: 0.4,
      delay: 1,
      ease: "power3.out",
    });

    // Heading
    SplitText.create("h1", {
      type: "chars",
      onSplit(self) {
        gsap.from(self.chars, {
          scale: 1.3,
