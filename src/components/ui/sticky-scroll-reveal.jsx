"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  // Custom background colors that blend with your HowItWorks gradient (reversed)
  const backgroundColors = [
    "#360033", // Starting color (dark purple)
    "#1a2b3d", // Darker middle shade (dark blue-gray)
    "#0b8793", // Ending color (teal)
  ];

  // Updated gradients to match your color scheme (reversed)
  const linearGradients = [
    "linear-gradient(to bottom right, #360033, #1a2b3d)", // dark purple to dark blue-gray
    "linear-gradient(to bottom right, #1a2b3d, #2d4a52)", // dark blue-gray to darker teal
    "linear-gradient(to bottom right, #2d4a52, #0b8793)", // darker teal to teal
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
      style={{
        background: `linear-gradient(to bottom right, ${backgroundColors[activeCard % backgroundColors.length]}, ${backgroundColors[(activeCard + 1) % backgroundColors.length]})`
      }}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="text-2xl font-bold text-white">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="text-kg mt-10 max-w-sm text-gray-200">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};