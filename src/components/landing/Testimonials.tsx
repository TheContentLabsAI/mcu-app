import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">Success Stories</Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12 text-white">
            MCU Student <span className="text-primary">Success</span>
          </h2>
        </div>

        {/* Video Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1" />
                    </div>
                    <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-bold uppercase text-sm">Student Name {i}</p>
                        <p className="text-zinc-400 text-xs">Business Owner</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-background border-zinc-800">
                    <CardContent className="pt-6">
                        <Quote className="text-primary w-8 h-8 mb-4 opacity-50" />
                        <p className="text-zinc-300 mb-6 leading-relaxed italic">
                            "This mastermind changed the way I communicate forever. The clarity and confidence I gained in just two days was worth 10x the investment."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-800" />
                            <div>
                                <p className="text-white font-bold text-sm uppercase">Alumni Name</p>
                                <p className="text-zinc-500 text-xs">Coached by Eliam</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
             ))}
        </div>
      </div>
    </section>
  );
}
