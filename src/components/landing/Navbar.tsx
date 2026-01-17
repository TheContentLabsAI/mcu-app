import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16">
      <div className="container px-4 h-full mx-auto flex items-center justify-between">
         <Link href="/" className="flex items-center gap-2">
            {/* 
              TODO: Upload your logo to /public/logo.png
              Once uploaded, uncomment the Image component below and remove the text if desired.
            */}
            { <div className="relative w-10 h-10 md:w-12 md:h-12">
               <Image 
                 src="/logo.png" 
                 alt="MCU Logo" 
                 fill 
                 className="object-contain"
               />
            </div>}
            
            <div className="font-heading font-bold text-xl md:text-2xl tracking-tighter text-white">
                MCU <span className="text-primary text-xs md:text-sm ml-1 align-top tracking-widest font-normal">MASTERMIND</span>
            </div>
         </Link>
         <Button size="sm" className="font-bold uppercase tracking-wide bg-primary text-black hover:bg-yellow-400" asChild>
            <Link href="/register">Register Now</Link>
         </Button>
      </div>
    </header>
  );
}
