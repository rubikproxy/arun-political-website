import { ContactForm } from "./contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl md:text-6xl">
            Join the Movement
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Your voice matters. Your support can bring real change. Connect with us today and be a part of building a stronger Anaikattu.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl text-primary font-bold">Contact Information</h2>
              <p className="text-muted-foreground mt-2">We're here to listen. Reach out to us through any of the channels below.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-muted-foreground">Anaikattu Thoguthi Office, Vellore District, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <a href="mailto:contact@arunkumar.inc" className="text-muted-foreground hover:text-primary transition-colors">contact@arunkumar.inc</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-muted-foreground">Mon-Fri from 9am to 5pm.</p>
                  <a href="tel:+91-000-000-0000" className="text-muted-foreground hover:text-primary transition-colors">+91-000-000-0000</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
