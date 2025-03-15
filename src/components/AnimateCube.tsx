"use client";

import { Box } from "@chakra-ui/react";
import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
const AnimateCube = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <Box className="container" w={{ base: "50px", md: "80px" }}>
      <Box className="cube" ref={ref} w={{ base: "50px", md: "80px" }}>
        <Box className="side front" />
        <Box className="side left" />
        <Box className="side right" />
        <Box className="side top" />
        <Box className="side bottom" />
        <Box className="side back" />
      </Box>
      <StyleSheet />
    </Box>
  );
};

export default AnimateCube;
/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
            
        .container {
            perspective: 900px;
            width: 100px;
            height: 100px;
        }

        .cube {
            width: 100px;
            height: 100px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.4;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: var(--hue-1-transparent);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: var(--hue-2-transparent);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: var(--hue-3-transparent);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: var(--hue-4-transparent);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: var(--hue-5-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
  );
}
