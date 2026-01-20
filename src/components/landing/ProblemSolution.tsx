import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                        We give you structure, clarity, and confidence.
                    </p>
                </div>
            </StaggerItem>

            <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    2. Powerful Stories, No Structure
                </h3>
                <p className="text-zinc-400 mb-4">
                    Your stories ramble. They don't land emotionally. They don't drive action or revenue. The story is there. The structure is not.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                        Frameworks that build authority and drive revenue.
                    </p>
                </div>
            </StaggerItem>

            <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    3. Growing alone leads to doubt and burnout
                </h3>
                <p className="text-zinc-400 mb-4">
                    Isolation is the most expensive cost in your business. You cannot scale your income or impact without a tribe of heavy hitters. You need a room where high-level ambition and unshakeable faith coexist to help you break through your revenue ceiling.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                        A high-trust community room.
                    </p>
                </div>
            </StaggerItem>
            
             <StaggerItem className="bg-background border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-4">
                    4. Drowned out by noise and AI content
                </h3>
                <p className="text-zinc-400 mb-4">
                    Generic brands fade away. People trust stories. Authenticity differentiates you.
                </p>
                <div className="bg-primary/10 p-4 rounded border border-primary/20">
                    <span className="text-primary font-bold uppercase text-sm">The Solution:</span>
                    <p className="text-white text-sm mt-1">
                         Authentic emotional connection. No one can replicate your humanity.
                    </p>
                </div>
            </StaggerItem>
        </StaggerContainer>


      </div>
    </section>
  );
}
