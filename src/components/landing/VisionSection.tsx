import { Badge } from "@/components/ui/badge";

export function VisionSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Start With Why */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">The Movement</Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-8">
            Start With <span className="text-primary italic">Why</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            This exists to create a group of the most powerful voices and stories in our generation. 
            To create a platform that amplifies messages, a movement founded on faith-driven people 
            bringing them closer to God, and loving friendships supporting each other's vision.
          </p>
          <div className="p-6 border border-zinc-800 bg-zinc-900/50 rounded-lg">
            <p className="font-heading text-lg md:text-xl font-bold uppercase text-white">
                "MCU Avengers Assemble = MCU Speakers Assemble"
            </p>
            <p className="text-zinc-400 mt-2">
                We drive abundance of wealth by being generous with our gifts. We transform into our authentic selves, 
                build self-worth, and create leaders who create more leaders.
            </p>
          </div>
        </div>

        {/* The Vision & Story Matters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary">The Vision</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                    To bring together the next generation of up-and-coming faith-driven leaders, entrepreneurs, and content creators 
                    into a connected environment where ideas and wisdom can be shared with generosity. All of this is done while 
                    creating abundance in finances and relationships through the power of storytelling.
                </p>
            </div>
            
             <div className="space-y-6 bg-zinc-900 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">Why Your Story Matters</h3>
                <p className="text-zinc-300 leading-relaxed">
                    You don’t need to be a public speaker, but you do need to step into the leader you were called to be.
                </p>
                <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Stories drive sales and revenue.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Stories create influential personal brands.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Stories help you compete and stay ahead of AI.
                    </li>
                </ul>
                <p className="text-white font-medium italic">
                    "This is how you fulfill the vision God gave you."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
