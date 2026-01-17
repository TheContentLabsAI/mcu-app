import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-start pt-32 pb-20 md:items-center md:pt-20 md:pb-20 justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 text-center max-w-7xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
          MCU Storytellers Mastermind • March 6 & 7 • Orange County, CA
        </div>
        
        <ScrollReveal width="100%">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight leading-tight mb-6 text-white max-w-screen-2xl mx-auto">
            You're a Faith-Driven Leader <span className="text-primary text-glow">Growing Your Vision.</span> <br className="hidden md:block" />
            This Is The Room Made For You.
            </h1>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.2}>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            20 leaders. One transformational weekend. One room that unlocks the power of your story.
            </p>
        </ScrollReveal>

        {/* MCU Logo */}
        <ScrollReveal width="100%" delay={0.4} variant="scale">
            <div className="w-full max-w-[280px] md:max-w-[380px] mx-auto mb-12 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-60" />
                <img 
                    src="/logo.png" 
                    alt="Master Communicator University" 
                    className="w-full h-auto relative z-10 drop-shadow-2xl animate-in fade-in zoom-in-50 duration-1000"
                />
            </div>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.6}>
            <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold uppercase bg-primary text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)]" asChild>
                <Link href="/register">
                Get Your Ticket Now
                </Link>
            </Button>
            <p className="text-xs md:text-sm text-zinc-500 font-medium tracking-wide uppercase">
                * Registration Required for Entry
            </p>
            </div>
        </ScrollReveal>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
