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
                    You cannot build this in isolation. There is no room where faith and ambition coexist. You need a safe space to be authentic.
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
                    4. Drowned out by noise and sameness
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

        <div className="mt-16 text-center border-t border-zinc-800 pt-10">
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">The Throughline</h3>
            <p className="text-xl text-zinc-300">
                You’re not lacking potential. <br/>
                You’re lacking <span className="text-primary font-bold">clarity, structure, community, and confidence.</span>
            </p>
            <div className="mt-8">
                <Link href="/register">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black uppercase font-bold tracking-wider">
                        Get Your Ticket Now
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
