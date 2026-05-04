import React, { useState } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroChocolates from './HeroChocolates'
import FlavorCards from './FlavorCards'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const [activeFlavor, setActiveFlavor] = useState(null);

  useGSAP(() => {
    const pairs = [
      {
        choco: document.querySelector(".caremel-choco"),
        card: document.querySelector(".caramel-card"),
      },
      {
        choco: document.querySelector(".cocoa-choco"),
        card: document.querySelector(".cocoa-card"),
      },
      {
        choco: document.querySelector(".orange-choco"),
        card: document.querySelector(".orange-card"),
      },
