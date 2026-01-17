import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-start pt-32 pb-20 md:items-center md:pt-20 md:pb-20 justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
          Orange County, CA • Exclusive 25 Seats
        </div>
        
        <ScrollReveal width="100%">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-6 text-white">
            You’re a <span className="text-primary text-glow">Faith-Driven Leader</span> Growing Your Vision. <br className="hidden md:block" />
            This Is The Room Made For You.
            </h1>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.2}>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            25 leaders. One transformational weekend. One room that unlocks the power of your story.
            </p>
        </ScrollReveal>

        {/* VSL Placeholder */}
        <ScrollReveal width="100%" delay={0.4} variant="scale">
            <div className="w-full max-w-4xl mx-auto mb-10 aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer hover:border-primary/50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,204,0,0.5)] group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[20px] md:border-l-[24px] border-l-black border-y-[12px] md:border-y-[16px] border-y-transparent ml-1 md:ml-2" />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 text-xs font-bold uppercase text-white rounded backdrop-blur-sm">
                    Watch: A Message from Eliam Fuentes
                </div>
            </div>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.6}>
            <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold uppercase bg-primary text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)]" asChild>
                <Link href="/register">
                Secure My Spot
                </Link>
            </Button>
            <p className="text-xs md:text-sm text-zinc-500 font-medium tracking-wide uppercase">
                * Application Required for Entry
            </p>
            </div>
        </ScrollReveal>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
