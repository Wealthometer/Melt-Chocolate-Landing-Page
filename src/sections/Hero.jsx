import React, { useState } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroChocolates from './HeroChocolates'
import FlavorCards from './FlavorCards'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const [activeFlavor, setActiveFlavor] = useState(null);

