"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";



export function ApplicationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    vision: "",
    archetype: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
      // Basic validation
      if (step === 1) {
          if (!formData.first_name || !formData.last_name || !formData.email) return; 
      }
      setStep(step + 1);
  }

  // Use local API proxy to avoid CORS
  const API_ENDPOINT = "/api/submit-application";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to local API route
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "mcu_mastermind" }),
      });

      if (!response.ok) {
          throw new Error("Submission failed");
      }

      // Navigate to success/payment
      router.push("/success");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong with the submission. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-6">
        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-zinc-800"}`} />
        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-zinc-800"}`} />
        <div className={`h-2 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-zinc-800"}`} />
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-heading font-bold text-white uppercase">Step 1: Contact Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="John"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="bg-black/50 border-zinc-700 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="bg-black/50 border-zinc-700 focus:border-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black/50 border-zinc-700 focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-black/50 border-zinc-700 focus:border-primary"
            />
          </div>
          
          <Button type="button" onClick={handleNext} className="w-full bg-white text-black hover:bg-zinc-200 mt-4 font-bold uppercase">
            Next Step <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-heading font-bold text-white uppercase">Step 2: Your Vision</h3>
          <div className="space-y-2">
            <Label htmlFor="vision">What is the vision God has placed on your heart?</Label>
            <Textarea
              id="vision"
              name="vision"
              placeholder="Tell us about your mission, who you serve, and where you want to go..."
              value={formData.vision}
              onChange={handleChange}
              required
              className="min-h-[150px] bg-black/50 border-zinc-700 focus:border-primary"
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="archetype">Which Archetype resonates with you most?</Label>
            <select
              id="archetype"
              name="archetype"
              value={formData.archetype}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-zinc-700 bg-black/50 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
                <option value="" disabled>Select an archetype...</option>
                <option value="Controller">The Controller (Authority)</option>
                <option value="Promoter">The Promoter (Influence)</option>
                <option value="Analyzer">The Analyzer (Clarity)</option>
                <option value="Supporter">The Supporter (Connection)</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
             <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3 border-zinc-700 text-white hover:bg-zinc-800">
                Back
            </Button>
             <Button type="submit" disabled={loading} className="w-2/3 bg-primary text-black hover:bg-primary/90 font-bold uppercase">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Submit Application"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
