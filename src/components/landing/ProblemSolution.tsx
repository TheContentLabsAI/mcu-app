import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-white">
                The 4 Core <span className="text-primary">Problems</span> We Save You From
            </h2>
            <p className="text-xl text-muted-foreground">
                We know what's holding you back. We designed this room to solve it.
            </p>
            </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6">
            <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    1. You feel called, but you can’t articulate it.
                </h3>
                <p className="text-zinc-400 mb-4">
                    Most faith-driven leaders feel the calling but struggle to communicate who they are and why it matters. 
                    They have the vision, but not the language.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                        We help you uncover, structure, and deliver your story with clarity, confidence, and conviction.
                    </p>
                </div>
            </StaggerItem>

            <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    2. Powerful Stories, No Structure
                </h3>
                <p className="text-zinc-400 mb-4">
                    Your stories ramble, don't land emotionally, and don't drive action or sales. The story is there—the structure is not.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                        We teach you how to turn raw life experience into a clear, compelling framework that builds authority and revenue.
                    </p>
                </div>
            </StaggerItem>

            <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    3. Growing alone leads to doubt and burnout
                </h3>
                <p className="text-zinc-400 mb-4">
                    There’s no room where faith and ambition coexist, and no safe space to be authentic.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                        A high-trust, faith-centered room where you build your story <em>together</em>.
                    </p>
                </div>
            </StaggerItem>
            
             <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    4. Your message gets drowned out
                </h3>
                <p className="text-zinc-400 mb-4">
                    In a flooded world, generic brands fade away. People trust stories. Stories create connection. Connection drives action.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                         Authentic storytelling creates emotional connection and differentiation that no AI can replicate.
                    </p>
                </div>
            </StaggerItem>
        </StaggerContainer>

        <div className="mt-16 text-center border-t border-zinc-800 pt-10">
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">The Throughline</h3>
            <p className="text-xl text-zinc-300">
                You’re not lacking potential. <br/>
                You’re lacking <span className="text-primary font-bold">clarity, structure, community, and confidence.</span>
            </p>
        </div>
      </div>
    </section>
  );
}
