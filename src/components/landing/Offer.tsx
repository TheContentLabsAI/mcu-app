import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Users, Utensils, BookOpen, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Offer() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-6 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">
            The Invitation
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 text-white">
            Unlock Your <span className="text-primary text-glow">Access</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            This isn't just an event. It's the beginning of your new story. 
          </p>
        </div>

        <ScrollReveal width="100%" variant="scale">
          <div className="max-w-md mx-auto bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative group hover:border-primary/30 transition-all duration-500">
            {/* Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 p-8 text-center relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary shadow-[0_0_20px_rgba(255,204,0,0.6)]" />
               <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">General Admission</h3>
               <div className="flex items-baseline justify-center gap-1 my-4">
                  <span className="text-sm font-medium text-zinc-500 align-top mt-1">$</span>
                  <span className="text-6xl font-bold text-white tracking-tighter">497</span>
                  <span className="text-sm font-medium text-zinc-500">/seat</span>
               </div>
               <div className="flex flex-col gap-2 w-full max-w-[200px] mt-2 mx-auto">
                 <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-red-400">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span>14 Spots Left</span>
                    </div>
                    <span className="text-zinc-500">Selling Fast</span>
                 </div>
                 <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[30%] shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-shimmer" />
                 </div>
               </div>
            </div>

            {/* Inclusions */}
            <div className="p-8 space-y-6">
                <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-zinc-300">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <Calendar className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-white block">2 Full Days</span>
                            <span className="text-sm text-zinc-500">March 20 & 21 • Immersive Event</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-zinc-300">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-white block">Connection Mixer</span>
                            <span className="text-sm text-zinc-500">Exclusive breakfast & networking</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-zinc-300">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <Utensils className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-white block">All-Inclusive Meals</span>
                            <span className="text-sm text-zinc-500">Catered lunches (Day 1 & 2)</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-zinc-300">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <BookOpen className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-white block">MCU Materials</span>
                            <span className="text-sm text-zinc-500">Notebook, workbook & resources</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-4 text-zinc-300">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <Mic className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-white block">Live Coaching</span>
                            <span className="text-sm text-zinc-500">Direct feedback from Eliam</span>
                        </div>
                    </li>
                </ul>

                <p className="text-center font-bold text-xl text-white mb-4 mt-8">
                    The Room Is Waiting For You
                </p>
                <Button size="lg" className="w-full h-14 text-lg font-bold uppercase bg-primary text-black hover:bg-yellow-400 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)]" asChild>
                    <Link href="/register">
                    Get Your Ticket Now
                    </Link>
                </Button>
                <p className="text-center text-xs text-zinc-600 mt-4">
                    * Registration required. No walk-ins.
                </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
