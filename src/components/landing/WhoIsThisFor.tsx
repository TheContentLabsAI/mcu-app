import { Check, X } from "lucide-react";

export function WhoIsThisFor() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* WHO IT IS FOR */}
        <div className="mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12 text-center text-white">
                Who This Is <span className="text-primary">For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="flex gap-4 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
                    <Check className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-zinc-300">Faith-driven leaders (entrepreneurs, content creators, speakers) looking to collaborate, build teams, and create a winning mindset.</p>
                </div>
                <div className="flex gap-4 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
                    <Check className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-zinc-300">Those looking for clarity & confidence in communication with structure and practical tools, ready to step out of their comfort zone.</p>
                </div>
                <div className="flex gap-4 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
                    <Check className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-zinc-300">People who want to belong in a room of authenticity and legends, building genuine community.</p>
                </div>
                <div className="flex gap-4 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
                    <Check className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-zinc-300">Those looking to drive sales and grow their personal brand using their unique story as the key authority builder.</p>
                </div>
            </div>
            <div className="text-center mt-8">
                 <p className="text-lg text-white font-medium italic">
                    "You operate out of faith with an optimistic mindset believing that all things are possible."
                </p>
            </div>
        </div>

        {/* WHO IT IS NOT FOR */}
        <div className="max-w-4xl mx-auto bg-red-950/10 border border-red-900/30 rounded-2xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase mb-8 text-center text-white">
                This Event Is <span className="text-red-500">NOT</span> For You If...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You want a passive conference to sit, listen, and leave unchanged.</p>
                </div>
                 <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You’re not open to faith being part of the conversation.</p>
                </div>
                 <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You’re unwilling to look honestly at your story and leadership.</p>
                </div>
                 <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You want shortcuts or scripts instead of real work.</p>
                </div>
                 <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You prefer staying comfortable over stepping into responsibility.</p>
                </div>
                 <div className="flex gap-3 items-start">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-zinc-400 text-sm">You’re only here to consume, not to give value.</p>
                </div>
            </div>
            
            <div className="mt-10 text-center space-y-4">
                <p className="text-white font-bold uppercase tracking-wide">This is NOT a motivational weekend.</p>
                <p className="text-zinc-300">
                    This is a <strong className="text-white">participation-based, faith-centered, growth-driven experience</strong> for leaders ready to use their voice.
                </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}
