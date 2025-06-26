"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const HowItWorks = ({ steps, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = steps.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = steps.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce((acc, point, i) => {
      return Math.abs(latest - point) < Math.abs(latest - breakpoints[acc])
        ? i
        : acc;
    }, 0);
    setActiveCard(closest);
  });

  const backgroundColors = ["#360033", "#1a2b3d", "#0b8793"];
  const gradients = [
    "linear-gradient(to bottom right, #360033, #1a2b3d)",
    "linear-gradient(to bottom right, #1a2b3d, #2d4a52)",
    "linear-gradient(to bottom right, #2d4a52, #0b8793)",
  ];
  const [bgGradient, setBgGradient] = useState(gradients[0]);

  useEffect(() => {
    setBgGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <div className="min-h-screen px-4 py-20 flex flex-col items-center bg-gradient-to-br from-[#360033] to-[#0b8793]">
      <h1 className="text-center max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
        How It Works
      </h1>

      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 w-full max-w-6xl"
        ref={ref}
        style={{
          background: `linear-gradient(to bottom right, ${
            backgroundColors[activeCard % backgroundColors.length]
          }, ${
            backgroundColors[(activeCard + 1) % backgroundColors.length]
          })`,
        }}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {steps.map((item, i) => (
              <div key={item.title + i} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === i ? 1 : 0.3 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-2xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === i ? 1 : 0.3 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-kg mt-10 max-w-sm text-gray-200"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        <div
          style={{ background: bgGradient }}
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
            contentClassName
          )}
        >
          {steps[activeCard].content ?? null}
        </div>
      </motion.div>

      <p className="mt-16 text-xl text-white font-semibold text-center">
        Simple. Fast. Done.
      </p>
    </div>
  );
};

export default HowItWorks;
