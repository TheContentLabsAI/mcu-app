import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const archetypes = [
  {
    title: "The Controller",
    value: "Authority & Impact",
    description: "You'll connect with the real, raw parts of your journey. Your story is your superpower that will unlock results and create lasting impact. Learn to lead better and build your team."
  },
  {
    title: "The Promoter",
    value: "Influence & Brand",
    description: "Reveal the authenticity of your story with no judgment. Experience intimacy and create joyful moments. Build your influence and personal brand with community."
  },
  {
    title: "The Analyzer",
    value: "Clarity & Structure",
    description: "Find answers to overcome self-doubt. Get structural frameworks that work. Turn your brilliance into valuable material and deliver your message with clarity."
  },
  {
    title: "The Supporter",
    value: "Connection & Meaning",
    description: "Receive support and creative connections that last a lifetime. Create a story that shines light on what matters most through community and togetherness."
  }
];

export function Archetypes() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
           <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">Identify Your Voice</Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-white">
            Which <span className="text-primary italic">Voice</span> Are You?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the value you'll unlock based on your communication style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {archetypes.map((item, index) => (
             <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 h-full">
                <CardHeader>
                    <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{item.value}</div>
                    <CardTitle className="font-heading text-2xl uppercase text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {item.description}
                    </p>
                </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
