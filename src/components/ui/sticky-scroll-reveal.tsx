"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    groupLabel?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Extract unique group labels
  const groupLabels = Array.from(new Set(content.map((item) => item.groupLabel).filter(Boolean)));
  // Determine current active group based on the active card
  const currentGroup = content[activeCard]?.groupLabel;

  const handleScrollToGroup = (label: string) => {
    // Find the first item with this group label
    const index = content.findIndex(item => item.groupLabel === label);
    if (index !== -1) {
        const element = document.getElementById(`card-${index}`);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center relative rounded-xl p-4 lg:p-10 gap-10 max-w-7xl mx-auto" ref={ref}>
      {/* Left Sticky Sidebar Navigation (30%) */}
      <div className="hidden lg:flex flex-col gap-10 w-1/3 sticky top-72 h-fit pl-4">
        {groupLabels.length > 0 && groupLabels.map((label) => (
             <div 
                key={label as string}
                onClick={() => handleScrollToGroup(label as string)}
                className="group cursor-pointer"
             >
                <div className={cn(
                    "text-xl font-bold font-heading uppercase tracking-widest transition-colors duration-500 ease-out",
                    currentGroup === label ? "text-primary" : "text-zinc-600 group-hover:text-zinc-400"
                )}>
                    {label}
                </div>
             </div>
        ))}
      </div>

      {/* Right Content Area (70%) */}
      <div className="w-full lg:w-2/3 flex flex-col gap-32 pb-40">
          {content.map((item, index) => (
            <motion.div 
                key={item.title + index} 
                id={`card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // "Apple-esque" ease curve
                className="flex flex-col gap-8"
            >
               {/* Mobile Group Label */}
               {item.groupLabel && (
                   <div className="lg:hidden mb-4 text-primary font-bold uppercase tracking-widest text-xs sticky top-24 bg-background/95 backdrop-blur py-2 z-10 w-fit pr-4">
                       {item.groupLabel}
                   </div>
               )}

               {/* Image Card */}
               <div className="w-full aspect-video md:aspect-[16/9] relative overflow-hidden rounded-lg shadow-2xl bg-zinc-900/50">
                    {/* Render content (image) directly here */}
                    {item.content}
               </div>

               {/* Text Content */}
               <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 tracking-tight leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light tracking-wide">
                        {item.description}
                    </p>
               </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};
