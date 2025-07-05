import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Landmark, ShieldCheck, Vote, Quote } from "lucide-react";


const whyCongressData = [
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Upholding Secularism",
    description: "Championing a diverse and inclusive India for all faiths and communities."
  },
  {
    icon: <Vote className="h-8 w-8 text-primary" />,
    title: "Justice for All (NYAY)",
    description: "Fighting for social, economic, and political justice for every Indian citizen."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Empowering Youth",
    description: "Creating opportunities and ensuring a bright future for the next generation."
  },
]

const testimonials = [
  {
    name: "Priya S.",
    location: "Vellore",
    quote: "The Congress party has always stood for the unity and integrity of our nation. We need their experience to guide us.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "indian woman"
  },
  {
    name: "Amit Kumar",
    location: "Anaikattu",
    quote: "Arunkumar ji's work in our thoguthi is commendable. He is always accessible and works tirelessly for our welfare.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "indian man"
  },
  {
    name: "Fatima B.",
    location: "Gudiyatham",
    quote: "Rahul Gandhi's vision for an inclusive India gives me hope for a better, more harmonious future for my children.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "indian woman professional"
  }
];


export default function Home() {
  return (
    <>
      <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container px-4 md:px-6 z-10 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
                  A New Dawn for India
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Under the leadership of <span className="font-bold text-secondary">Rahul Gandhi</span>, we pledge to build a stronger, fairer, and more united nation for every citizen.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="/contact">Join the Movement</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/about">Our Vision</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
                <div className="relative p-1 bg-gradient-to-tr from-primary to-secondary rounded-full">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full blur-md opacity-50 animate-pulse"></div>
                  <Image
                    src="https://placehold.co/600x600.png"
                    data-ai-hint="Rahul Gandhi professional"
                    width={600}
                    height={600}
                    alt="Rahul Gandhi"
                    className="relative mx-auto aspect-square overflow-hidden rounded-full object-cover shadow-2xl sm:w-full max-w-md"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="local-leader" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative p-1 bg-gradient-to-tr from-secondary to-primary rounded-full">
              <div className="absolute -inset-1 bg-gradient-to-tr from-secondary to-primary rounded-full blur-md opacity-50 animate-pulse"></div>
              <Image
                src="https://placehold.co/600x600.png"
                data-ai-hint="male indian politician formal"
                width={600}
                height={600}
                alt="Arunkumar Arangavalan"
                className="relative mx-auto aspect-square overflow-hidden rounded-full object-cover shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-primary font-semibold tracking-wide">LEADERSHIP IN VELLORE</p>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Arunkumar Arangavalan</h2>
                <p className="text-xl font-medium text-muted-foreground">Congress Party Leader, Anaikkattu Thoguthi</p>
                <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
                  Bringing dedicated leadership and a fresh vision to serve the people of Vellore. My commitment is to our community's development and well-being.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                  <Button asChild variant="outline">
                    <Link href="/leader-profile">
                      Learn More About My Work
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="why-congress" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why Congress?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">
              Our core values guide our mission to build a just and prosperous India.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyCongressData.map((item) => (
              <Card key={item.title} className="text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border/20 hover:border-primary/80 hover:shadow-primary/10 hover:shadow-xl hover:-translate-y-1">
                 <CardHeader className="items-center">
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center text-secondary mb-12">
            Voices of Support
          </h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-card/80 border-t-4 border-primary/50">
                      <CardContent className="p-6 text-lg font-body relative">
                        <Quote className="absolute top-4 left-4 h-10 w-10 text-primary/20" />
                        <p className="pt-8 pl-4">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex flex-row items-center gap-4 border-t pt-6">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
