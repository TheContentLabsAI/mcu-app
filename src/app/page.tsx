import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { VisionSection } from "@/components/landing/VisionSection";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { Pillars } from "@/components/landing/Pillars";
import { Itinerary } from "@/components/landing/Itinerary";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <VisionSection />
      <WhoIsThisFor />
      <Pillars />
      <Itinerary />
      <Testimonials />
      
      {/* Final CTA / Scarcity Footer */}
      <section className="py-24 bg-primary text-black text-center">
        <div className="container px-4 mx-auto">
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 text-black">
                The Room Is Waiting.
            </h2>
             <p className="text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto">
                Only 25 seats available for this exclusive experience.
            </p>
             <a href="/register" className="inline-block bg-black text-white px-10 py-5 text-xl font-bold uppercase tracking-wide rounded-md hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                Secure My Spot
            </a>
        </div>
      </section>
      
      <footer className="py-8 bg-zinc-950 text-center text-zinc-600 text-sm">
        <div className="container mx-auto">
            © {new Date().getFullYear()} Master Communicator University. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

