import { Navbar } from "@/components/landing/Navbar";
import { RegistrationForm } from "@/components/register/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container px-4 pt-32 pb-20 mx-auto max-w-3xl">
        <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-white">
                Registration
            </h1>
            <p className="text-muted-foreground text-lg">
                Secure your spot in the room.
            </p>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-10 shadow-2xl">
            <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
