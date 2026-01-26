"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle } from "lucide-react";

export function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when typing
    if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // Use local API proxy to avoid CORS
  const API_ENDPOINT = "/api/register";

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation (min 10 chars, mostly digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
        newErrors.phone = "Please enter a complete phone number (10+ digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

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

      // Redirect to Whop checkout
      window.location.href = "https://whop.com/checkout/5GdNz417F87qLHD4m5-Jmbo-Q7eO-OCN4-7N04BzqtZ6qr/";
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
            {errors.email && (
                <p className="text-red-400 text-xs flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                </p>
            )}
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
            {errors.phone && (
                <p className="text-red-400 text-xs flex items-center mt-1">
                     <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                </p>
            )}
          </div>
          
           <Button type="submit" disabled={loading} className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase py-6 text-lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Secure My Spot"}
            </Button>
        </div>
    </form>
  );
}
