import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-black/40 border border-white/5 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)] hover:bg-black/50 transition-all duration-500 group cursor-default animate-in fade-in slide-in-from-top-8 duration-1000 delay-100">
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">Selling Fast</span>
              <span className="w-0.5 h-3 bg-white/10 mx-1"></span>
              <span className="text-white drop-shadow-md">11 Seats Left</span>
            </span>
        </div>
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
          MCU Storytellers Mastermind • March 20 & 21 • Orange County, CA
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

        {/* VSL Video */}
        <ScrollReveal width="100%" delay={0.4} variant="scale">
            <div className="w-full max-w-[900px] mx-auto mb-12 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-2xl opacity-60" />
                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(255,204,0,0.2)] backdrop-blur-sm bg-black/20">
                    <video 
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-auto"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%23000' width='16' height='9'/%3E%3C/svg%3E"
                    >
                        <source src="https://res.cloudinary.com/dwklqvlag/video/upload/v1769409342/Vsl_Full_xkszcj.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
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
