import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function VisionSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Start With Why */}
        <ScrollReveal width="100%">
            <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">The Mission</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-8">
                Start With <span className="text-primary italic">Why</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                This exists to create a group of the most powerful voices and stories in our generation. 
                A movement of faith-driven people amplifying their message, bringing people closer to God, 
                and building loving friendships that support each other's vision.
            </p>
            <div className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    "MCU Avengers Assemble = MCU Speakers Assemble"
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    We drive abundance by being generous with our gifts. We transform into our authentic selves, 
                    build self-worth, and become leaders who create more leaders.
                </p>
            </div>
            </div>
        </ScrollReveal>

        {/* The Vision & Story Matters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal variant="slideRight" width="100%">
                <div className="space-y-6">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary">The Vision</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                        To bring together the next generation of faith-driven leaders, entrepreneurs, and content creators. 
                        We are building a connected environment where ideas and wisdom are shared with generosity, 
                        creating abundance in finances and relationships through the power of storytelling.
                    </p>
                </div>
            </ScrollReveal>
            
             <ScrollReveal width="100%" delay={0.2} variant="fade">
                <div className="space-y-6 bg-zinc-900/80 p-8 rounded-xl border-t border-zinc-800 shadow-2xl relative">
                     <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">Why Your Story Matters</h3>
                    <p className="text-zinc-200 text-lg font-medium leading-relaxed border-l-2 border-primary pl-4">
                        You don’t need to be a public speaker, but you do need to step into the leader you were called to be.
                    </p>
                    <ul className="space-y-4 text-zinc-400 mt-4">
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> drives sales and revenue.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> builds your personal brand.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> helps you stand out in a noisy market.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> supports the vision God gave you.</span>
                        </li>
                    </ul>
                </div>
             </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
