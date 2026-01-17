import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";

// Fanbasis URL from env
const FANBASIS_URL = process.env.NEXT_PUBLIC_FANBASIS_URL || "#";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container px-4 pt-32 pb-20 mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6 text-white">
            Access Granted
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Your details have been received. <br/>
            To secure your seat in the room, please complete your registration below.
        </p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <p className="text-white font-medium mb-6 uppercase tracking-wide">
                Final Step: Secure Your Ticket
            </p>
            <Button size="lg" className="w-full text-lg font-bold uppercase py-6 bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(255,204,0,0.4)]" asChild>
                <Link href={FANBASIS_URL}>
                    Complete Registration
                </Link>
            </Button>
            <p className="text-xs text-zinc-500 mt-4">
                You will be redirected to our secure payment portal.
            </p>
        </div>
      </div>
    </main>
  );
}
