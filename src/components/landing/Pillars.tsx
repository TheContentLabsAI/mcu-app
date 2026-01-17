import { Crown, Flag, Mic, MessageSquare, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const pillars = [
  {
    icon: Crown,
    title: "Faith",
    description: "Root everything you do in your faith and align your vision with your values."
  },
  {
    icon: Flag,
    title: "Leadership",
    description: "Step into the leader you were called to be and lead with authenticity."
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Develop the confidence and skills to share your message from any stage."
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Master the art of clear, impactful communication that moves people."
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Build deeper relationships and understand the emotions behind every interaction."
  }
];

export function Pillars() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-white">
                The MCU <span className="text-primary">Pillars</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                This Mastermind is built on five pillars that shape your growth.
            </p>
            </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {pillars.map((pillar, index) => (
            <StaggerItem key={index} className="flex flex-col items-center text-center group bg-background/50 p-6 rounded-xl border border-transparent hover:border-zinc-800 transition-all">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white tracking-wide">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
