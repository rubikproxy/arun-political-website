import { ContactForm } from "./contact-form";

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

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
