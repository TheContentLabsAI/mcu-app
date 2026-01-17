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
                <ul className="text-left space-y-4 mb-6 text-zinc-300">
                    <li className="flex gap-3"><span className="text-primary">•</span> Create a group of the most powerful voices and stories in our generation.</li>
                    <li className="flex gap-3"><span className="text-primary">•</span> Build a platform that amplifies faith-driven messages.</li>
                    <li className="flex gap-3"><span className="text-primary">•</span> Bring people closer to God, create loving friendships, and support each other's vision.</li>
                    <li className="flex gap-3"><span className="text-primary">•</span> Drive abundance through generosity with gifts.</li>
                    <li className="flex gap-3"><span className="text-primary">•</span> Transform into authentic selves, build self-worth, and create belonging.</li>
                    <li className="flex gap-3"><span className="text-primary">•</span> Build leaders who create more leaders.</li>
                </ul>

            </div>
        </ScrollReveal>

        {/* The Vision & Story Matters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
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
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">Why Your Story Matters</h3>
                    
                    {/* Unmissable Objection Handling */}
                    <div className="bg-primary/10 border-l-4 border-primary p-4 my-2">
                        <p className="text-white text-lg md:text-xl font-bold leading-tight">
                            You don’t need to be a public speaker, but you do need to step into the leader you were called to be.
                        </p>
                    </div>

                    <ul className="space-y-4 text-zinc-400 mt-6">
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> drives sales and revenue.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> builds your influential personal brand.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> helps you stand out in a world full of AI content.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <span className="text-primary text-xl mt-[-2px]">•</span> <span><strong>Your story</strong> helps you fulfill the vision God gave you.</span>
                        </li>
                    </ul>
                </div>
             </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
