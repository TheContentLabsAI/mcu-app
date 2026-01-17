"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const TESTIMONIAL_VIDEOS = [
  {
    name: "Alexis Morgan",
    role: "Lending & Private Equity",
    // Cloudinary Trick: Just change .mp4 to .jpg to get the thumbnail automatically!
    thumbnail: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768625997/Alexis_dl0g6f.jpg", 
    videoUrl: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768625997/Alexis_dl0g6f.mp4"
  },
  {
    name: "Javi Guillen",
    role: "Roofing Entrepreneur",
    thumbnail: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768626457/Javi_nuhv1d.jpg",
    videoUrl: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768626457/Javi_nuhv1d.mp4"
  },
  {
    name: "Emmanuel Fabian-Hernandez",
    role: "Content Creator",
    thumbnail: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768678233/Emmaneul_Test_vhsv34.jpg",
    videoUrl: "https://res.cloudinary.com/dwklqvlag/video/upload/v1768678233/Emmaneul_Test_vhsv34.mp4" 
  }
];

const TEXT_TESTIMONIALS = [
  {
    name: "Adriana Garcia",
    quote: "The value one gets for the course is amazing! I joined expecting to improve my communication skills, and not only did it help me with that, but it also helped me by providing confidence and understanding. Thankfully, after going through the course and attending most of the zoom calls, I’ve been able to communicate more effectively with intention with my family members and in business matters."
  },
  {
    name: "Sherese Pow",
    quote: "Communication felt overwhelming. I wanted to be confident but fear often took over. Because my confidence it at HIGH, I am making bigger moves—especially financially. I am showing up differently and it's opening doors. This experience with MCU didn't just improve how I communicate; it changed how I see myself. I am confident, focused, and fearless."
  },
  {
    name: "Andrew Gutierrez",
    quote: "Before starting MCU, I often found myself rambling and struggling to clearly communicate my message—whether to individuals or larger groups. My delivery felt dry and unengaging. After going through MCU, I’m now able to convey my message clearly and effectively in a way that truly connects with the audience."
  },
  {
    name: "Anna Lum",
    quote: "Before MCU, I had some communication tools, but there’s been a lot of affirmation and additional tools that Eliam has brought to my awareness. I always know that there’s room for improvement and Eliam has been great in filling in my gaps! As a public speaker, I used to lack structure and direction in what I’m saying."
  },

  {
    name: "Alejandra Diaz",
    quote: "MCU has grounded me in the power of communication – such that it can alter the trajectory of life, and I hold this dearly. We dove into the power of intention, being clear on what I seek to cause and create before even opening my mouth. Reaffirmed the powerful instrument that my voice is, I am excited to take it out into stages across the world."
  },
  {
    name: "Lolita Fernando",
    quote: "Eliam's workshops always hit home. Every session leaves me feeling renewed, more grounded, and clearer than before. He has a unique way of making each topic feel personal by connecting it to real-life experiences, and that raw honesty is what makes his workshops so powerful and memorable."
  }
];

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">Success Stories</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12 text-white">
                MCU Student <span className="text-primary">Success</span>
            </h2>
            </div>
        </ScrollReveal>

        {/* Video Placeholders Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TESTIMONIAL_VIDEOS.map((video, i) => (
                <StaggerItem 
                    key={i} 
                    onClick={() => setActiveVideo(video.videoUrl)}
                    className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all"
                >
                    {/* Thumbnail Image */}
                    <img 
                        src={video.thumbnail} 
                        alt={video.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,204,0,0.4)]">
                        <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1" />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-bold uppercase text-sm">{video.name}</p>
                        <p className="text-zinc-400 text-xs">{video.role}</p>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>

        {/* Review Cards */}
        <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
             {TEXT_TESTIMONIALS.map((testimonial, i) => (
                <StaggerItem key={i} className="break-inside-avoid">
                    <Card className="bg-zinc-900/50 border-zinc-800 h-full hover:border-primary/30 transition-colors">
                        <CardContent className="pt-6">
                            <Quote className="text-primary w-8 h-8 mb-4 opacity-50" />
                            <p className="text-zinc-300 mb-6 leading-relaxed italic text-sm">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                                    <span className="text-primary font-bold text-xs">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm uppercase">{testimonial.name}</p>
                                    <p className="text-zinc-500 text-xs">MCU Alumni</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </StaggerItem>
             ))}
        </StaggerContainer>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            {/* Close Button or Click Outside */}
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
            
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-300">
                <button 
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <video 
                    src={activeVideo} 
                    className="w-full h-full object-contain"
                    controls 
                    autoPlay 
                    playsInline
                />
            </div>
        </div>
      )}
    </section>
  );
}
