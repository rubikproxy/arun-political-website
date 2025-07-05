import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Town Hall Meeting",
    date: "October 28, 2024",
    location: "Anaikattu Community Hall, Vellore",
    description: "Join us for an open discussion about the future of our district. Your questions, our answers."
  },
  {
    title: "Youth Connect Rally",
    date: "November 15, 2024",
    location: "Vellore Institute of Technology (VIT)",
    description: "A special event focused on empowering the youth and addressing their concerns."
  },
  {
    title: "Public Grievance Camp",
    date: "December 5, 2024",
    location: "Gudiyatham Town Square",
    description: "Meet with local leaders to resolve public issues and submit petitions."
  }
];

const pastEvents = [
  { imageUrl: "https://placehold.co/600x400.png", hint: "political rally crowd" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "community service event" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "leader giving speech" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "people planting trees" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "inauguration ceremony" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "meeting with farmers" }
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section id="upcoming-events" className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
          Campaigns & Events
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Stay updated with our latest activities and join us in building a better future together.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">From Past Events</h2>
        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {pastEvents.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={event.imageUrl}
                data-ai-hint={event.hint}
                alt={`Past event ${index + 1}`}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="secondary">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
