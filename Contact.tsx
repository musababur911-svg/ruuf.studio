"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Studio from "./sections/Studio";
import Process from "./sections/Process";
import Objects from "./sections/Objects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navigation from "./components/Navigation";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Prefers reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  }, []);

  return (
    <main className="relative">
      {/* Global scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-charcoal z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navigation />
      <Hero />
      <Work />
      <Studio />
      <Process />
      <Objects />
      <Contact />
      <Footer />
    </main>
  );
}
