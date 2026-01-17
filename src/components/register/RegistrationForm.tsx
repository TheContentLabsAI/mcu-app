"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Use local API proxy to avoid CORS
  const API_ENDPOINT = "/api/register";

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
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-heading font-bold text-white uppercase">Your Details</h3>
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
          
           <Button type="submit" disabled={loading} className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase py-6 text-lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Secure My Spot"}
            </Button>
        </div>
    </form>
  );
}
