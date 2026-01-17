import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";

export function Itinerary() {
  return (
    <section className="py-24 bg-background border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 text-xs px-3 py-1 uppercase tracking-widest">The Schedule</Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-white">
            What You’ll <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Two days of intensity, connection, and breakthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Day 1 */}
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-2xl text-black">1</div>
                    <div>
                        <h3 className="font-heading text-2xl font-bold uppercase text-white">Day One</h3>
                        <p className="text-zinc-400">Identity & Foundation</p>
                    </div>
                </div>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Discover the Leader You Were Born to Be</h4>
                            <p className="text-zinc-400 text-sm mt-1">Step into the identity and confidence of the leader God called you to be.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Create Lifelong Relationships</h4>
                            <p className="text-zinc-400 text-sm mt-1">Build genuine, lasting connections with like-minded, faith-driven leaders.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Build the Communication Foundation</h4>
                            <p className="text-zinc-400 text-sm mt-1">Lay the groundwork for powerful and effective communication.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Learn from Million-Dollar Storytellers</h4>
                            <p className="text-zinc-400 text-sm mt-1">Hear directly from storytellers who have turned their stories into seven-figure success.</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center font-heading font-bold text-2xl text-black">2</div>
                    <div>
                        <h3 className="font-heading text-2xl font-bold uppercase text-white">Day Two</h3>
                        <p className="text-zinc-400">Execution, Offer & Community</p>
                    </div>
                </div>
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Craft Your Story of Impact & Income</h4>
                            <p className="text-zinc-400 text-sm mt-1">Shape your unique story to create real impact and generate revenue.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Connect Your Story to Your Offer</h4>
                            <p className="text-zinc-400 text-sm mt-1">Link your personal story directly to what you offer the world.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Deliver Like a Faith-Driven Leader</h4>
                            <p className="text-zinc-400 text-sm mt-1">Gain the skills to deliver your message with faith and confidence.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Check className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Solidify Your Journey</h4>
                            <p className="text-zinc-400 text-sm mt-1">Anchor yourself in a supportive community that continues beyond the event.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="mt-16 bg-primary text-black p-8 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold uppercase mb-4">4 Key Masteries You Will Walk Away With</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-bold uppercase tracking-tight">
                <div>Build Story w/ Community</div>
                <div>Deliver Like A Leader</div>
                <div>Connect Story to Mission</div>
                <div>Drive Sales w/ Story</div>
            </div>
        </div>
      </div>
    </section>
  );
}
