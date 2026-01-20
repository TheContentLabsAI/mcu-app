import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { User2, Users, Mic, BookOpen, Lightbulb, Target, Heart, Anchor } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const day1Items = [
  {
    icon: User2,
    category: "Identity", 
    title: "Discover the Leader You Were Born to Be",
    description: "Step into the identity and confidence of the leader God called you to be."
  },
  {
    icon: Users,
    category: "Community",
    title: "Create Lifelong Relationships",
    description: "Build genuine, lasting connections with like-minded, faith-driven leaders."
  },
  {
    icon: Mic,
    category: "Communication Foundation",
    title: "Build the Communication Foundation",
    description: "Lay the groundwork for powerful and effective communication."
  },
  {
    icon: BookOpen,
    category: "Storytelling",
    title: "Learn from Million-Dollar Storytellers",
    description: "Hear directly from storytellers who have turned their stories into seven-figure success."
  }
];

const day2Items = [
  {
    icon: Lightbulb,
    category: "Impact & Influence",
    title: "Craft Your Story of Impact & Influence",
    description: "Shape your unique story to create real impact and influence."
  },
  {
    icon: Target,
    category: "Offer",
    title: "Connect Your Story to Your Offer",
    description: "Learn how to link your personal story directly to what you offer the world."
  },
  {
    icon: Heart,
    category: "Faith Leadership",
    title: "Deliver Like a Faith-Driven Leader",
    description: "Gain the skills to deliver your message with faith and confidence."
  },
  {
    icon: Anchor,
    category: "Community Anchor",
    title: "Solidify Your Journey with Community",
    description: "Wrap up by anchoring yourself in a supportive, faith-filled community that will continue with you beyond the event."
  }
];

export function Itinerary() {
  return (
    <section className="py-24 bg-background border-t border-zinc-900 relative overflow-hidden">
       {/* Ambient background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
            <ScrollReveal width="100%">
                <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">The Experience</Badge>
                <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-white">
                    What You’ll <span className="text-primary">Experience</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Two days of intensity, connection, and breakthrough.
                </p>
            </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {/* Day 1 Card */}
            <ScrollReveal width="100%" variant="slideRight">
                <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                    
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                         <div>
                            <h3 className="text-3xl font-bold text-white uppercase font-heading">Day 1</h3>
                            <p className="text-primary font-bold tracking-wide mt-1">March 20</p>
                         </div>
                         <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                             <span className="text-xl font-bold text-zinc-500">01</span>
                         </div>
                    </div>

                    <div className="space-y-0">
                        <StaggerContainer staggerDelay={0.15}>
                            {day1Items.map((item, index) => (
                                <StaggerItem key={index} className="flex gap-6 group/item py-8 border-b border-zinc-800/50 first:pt-0 last:border-0 last:pb-0">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-all duration-300 shadow-sm">
                                            <item.icon className="w-6 h-6 text-zinc-400 group-hover/item:text-primary transition-colors" />
                                        </div>
                                    </div>
                                    <div className="pt-1.5">
                                    <h4 className="text-xl font-bold text-white mb-3 leading-tight group-hover/item:text-primary transition-colors duration-300">{item.title}</h4>
                                    <p className="text-zinc-200 text-base leading-relaxed opacity-90">
                                        {item.description}
                                    </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </ScrollReveal>

            {/* Day 2 Card */}
             <ScrollReveal width="100%" delay={0.2} variant="slideLeft">
                 <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                    
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                         <div>
                            <h3 className="text-3xl font-bold text-white uppercase font-heading">Day 2</h3>
                            <p className="text-primary font-bold tracking-wide mt-1">March 21</p>
                         </div>
                         <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                             <span className="text-xl font-bold text-zinc-500">02</span>
                         </div>
                    </div>

                    <div className="space-y-0">
                        <StaggerContainer staggerDelay={0.15}>
                            {day2Items.map((item, index) => (
                                <StaggerItem key={index} className="flex gap-6 group/item py-8 border-b border-zinc-800/50 first:pt-0 last:border-0 last:pb-0">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-all duration-300 shadow-sm">
                                            <item.icon className="w-6 h-6 text-zinc-400 group-hover/item:text-primary transition-colors" />
                                        </div>
                                    </div>
                                    <div className="pt-1.5">
                                    <h4 className="text-xl font-bold text-white mb-3 leading-tight group-hover/item:text-primary transition-colors duration-300">{item.title}</h4>
                                    <p className="text-zinc-200 text-base leading-relaxed opacity-90">
                                        {item.description}
                                    </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </ScrollReveal>
        </div>
        
        <ScrollReveal width="100%" delay={0.4} variant="scale">
            <div className="mt-24">
                <div className="text-center mb-12">
                     <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase text-white mb-4">
                        4 Key Masteries <span className="text-primary">You Will Walk Away With</span>
                     </h3>
                     <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300 group/card text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:bg-primary/20 transition-colors">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-lg mb-2">Build Story w/ Community</h4>
                    </div>

                    <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300 group/card text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:bg-primary/20 transition-colors">
                            <Mic className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-lg mb-2">Deliver Like A Leader</h4>
                    </div>

                    <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300 group/card text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:bg-primary/20 transition-colors">
                            <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-lg mb-2">Connect Story to Mission</h4>
                    </div>

                    <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300 group/card text-center">
                         <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:bg-primary/20 transition-colors">
                            <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-lg mb-2">Drive Sales w/ Story</h4>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center">
                 <Link href="/register">
                    <Button size="lg" className="h-16 px-10 text-xl font-bold uppercase bg-primary text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                        Get Your Ticket Now
                    </Button>
                </Link>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
