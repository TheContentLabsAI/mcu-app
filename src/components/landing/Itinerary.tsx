import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  // DAY 1
  {
    title: "Discover the Leader You Were Born to Be",
    groupLabel: "Day 1",
    description:
      "Step into the identity and confidence of the leader God called you to be.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/leadership.png"
          width={800} // Increased resolution since they are larger now
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" // Added subtle zoom effect
          alt="Leadership"
        />
      </div>
    ),
  },
  {
    title: "Create Lifelong Relationships",
    groupLabel: "Day 1",
    description:
      "Build genuine, lasting connections with like-minded, faith-driven leaders.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/community.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Community"
        />
      </div>
    ),
  },
  {
    title: "Build the Communication Foundation",
    groupLabel: "Day 1",
    description:
      "Lay the groundwork for powerful and effective communication.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/speaking.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Communication Foundation"
        />
      </div>
    ),
  },
  {
    title: "Learn from Million-Dollar Storytellers",
    groupLabel: "Day 1",
    description:
      "Hear directly from storytellers who have turned their stories into seven-figure success.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/storytelling.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Storytelling"
        />
      </div>
    ),
  },
  // DAY 2
  {
    title: "Craft Your Story of Impact & Income",
    groupLabel: "Day 2",
    description:
      "Shape your unique story to create real impact and income.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/strategy.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Strategy"
        />
      </div>
    ),
  },
  {
    title: "Connect Your Story to Your Offer",
    groupLabel: "Day 2",
    description:
      "Learn how to link your personal story directly to what you offer the world.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/sales.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Offer"
        />
      </div>
    ),
  },
  {
    title: "Deliver Like a Faith-Driven Leader",
    groupLabel: "Day 2",
    description:
      "Gain the skills to deliver your message with faith and confidence.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/leadership.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Faith Leadership"
        />
      </div>
    ),
  },
   {
    title: "Solidify Your Journey with Community",
    groupLabel: "Day 2",
    description:
      "Wrap up by anchoring yourself in a supportive, faith-filled community that will continue with you beyond the event.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/community.png"
          width={800}
          height={450}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          alt="Community Anchor"
        />
      </div>
    ),
  },
];

export function Itinerary() {
  return (
    <section className="py-24 bg-background border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-8 border-b border-zinc-900/50 mb-10">
            <ScrollReveal width="100%">
                <div className="text-center">
                <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">The Experience</Badge>
                <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-white">
                    What You’ll <span className="text-primary">Experience</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    Two days of intensity, connection, and breakthrough.
                </p>
                </div>
            </ScrollReveal>
        </div>

        <StickyScroll content={content} />
        
        <ScrollReveal width="100%" delay={0.6} variant="scale">
            <div className="mt-16 bg-primary text-black p-8 rounded-xl max-w-4xl mx-auto text-center shadow-[0_0_30px_rgba(255,204,0,0.2)]">
                <h3 className="font-heading text-2xl font-bold uppercase mb-4">4 Key Masteries You Will Walk Away With</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-bold uppercase tracking-tight">
                    <div>Build Story w/ Community</div>
                    <div>Deliver Like A Leader</div>
                    <div>Connect Story to Mission</div>
                    <div>Drive Sales w/ Story</div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
