"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  width?: "fit-content" | "100%";
  variant?: "fade" | "slideUp" | "slideRight" | "scale";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  width = "fit-content",
  variant = "slideUp",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    }
  };

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={controls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface TextHighlightProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function TextHighlight({ children, className, delay = 0.5 }: TextHighlightProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <span ref={ref} className={cn("relative inline-block", className)}>
            <motion.span
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8, delay, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-[30%] bg-primary/30 -z-10"
            />
            {children}
        </span>
    );
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: { children: React.ReactNode; className?: string; staggerDelay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: staggerDelay } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );    
}

export function StaggerItem({ children, className, variant="slideUp" }: { children: React.ReactNode; className?: string, variant?: "slideUp" | "fade" }) {
    const variants = {
        slideUp: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }
    }
    return (
        <motion.div variants={variants[variant]} className={className}>
            {children}
        </motion.div>
    )
}
