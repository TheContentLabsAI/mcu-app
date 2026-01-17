"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Mastermind session in progress"
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Group photo of attendees"
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Networking and connection"
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">Inside The Room</Badge>
                <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-white">
                    Moments from the <span className="text-primary">Mastermind</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    See what it looks like when faith-driven leaders come together to grow, connect, and create.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1} variant="scale">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
