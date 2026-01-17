import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { VisionSection } from "@/components/landing/VisionSection";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { Pillars } from "@/components/landing/Pillars";
import { Itinerary } from "@/components/landing/Itinerary";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { Offer } from "@/components/landing/Offer";
import { Gallery } from "@/components/landing/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <VisionSection />
      <ProblemSolution />
      <WhoIsThisFor />
      <Gallery />
      <Pillars />
      <Itinerary />
      <Testimonials />
      <Offer />
      {/* <section className="py-24 bg-primary text-black text-center"> ... removed old CTA ... </section> */}
      
      <footer className="py-8 bg-zinc-950 text-center text-zinc-600 text-sm">
        <div className="container mx-auto">
            © {new Date().getFullYear()} Master Communicator University. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

