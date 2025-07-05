import { ContactForm } from "./contact-form";

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

      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
