import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
          Join the Movement
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Your voice matters. Your support can bring real change. Connect with us today.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 space-y-8">
            <Card className="group transition-all duration-300 hover:shadow-xl hover:border-primary/80 border border-transparent bg-card/60 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                        <Handshake className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                        Become a Volunteer
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Be the change you want to see. Join our team of dedicated volunteers and make a difference in your community.
                    </p>
                    <Button asChild variant="secondary">
                        <Link href="#">Sign Up Now</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-xl hover:border-primary/80 border border-transparent bg-card/60 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                        <Heart className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                        Donate to the Cause
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Your contribution, big or small, fuels our mission for a better India. Support our cause today.
                    </p>
                     <Button asChild variant="outline">
                        <Link href="#">Donate Now</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
