
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Landmark,
  ShieldCheck,
  Vote,
  Quote,
  CheckCircle,
  Instagram,
  MessageCircle,
  Scaling,
  TrendingUp,
  GraduationCap,
  Heart,
  Sprout,
  HardHat,
  PieChart,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { incData } from "@/lib/inc-data";

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

const achievements = [
  "Spearheaded the 'Clean Anaikattu' initiative, improving local sanitation.",
  "Successfully campaigned for the upgradation of the district primary school.",
  "Organized free health camps, benefiting over 5000 residents.",
  "Secured funding for new irrigation channels for local farmers."
];

const instaPosts = [
  { imageUrl: "https://placehold.co/400x400.png", hint: "leader interacting crowd" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "social service activity" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "inaugurating project" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "public rally speech" },
];

const principleIcons: { [key: string]: React.ReactNode } = {
  "Socialism": <Scaling className="h-8 w-8 text-primary" />,
  "Secularism": <Landmark className="h-8 w-8 text-primary" />,
  "Democracy": <Vote className="h-8 w-8 text-primary" />,
  "Nationalism": <ShieldCheck className="h-8 w-8 text-primary" />,
  "Progressivism": <TrendingUp className="h-8 w-8 text-primary" />,
};

const pillarIcons: { [key: string]: React.ReactNode } = {
  "Yuva Nyay (Youth Justice)": <GraduationCap className="h-6 w-6 text-primary" />,
  "Naari Nyay (Women Justice)": <Heart className="h-6 w-6 text-primary" />,
  "Kisaan Nyay (Farmers Justice)": <Sprout className="h-6 w-6 text-primary" />,
  "Shramik Nyay (Workers Justice)": <HardHat className="h-6 w-6 text-primary" />,
  "Hissedari Nyay (Equity Justice)": <PieChart className="h-6 w-6 text-primary" />,
};

export default function Home() {
  const { Ideology, Principles, Policies } = incData.IndianNationalCongress;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://manifesto.inc.in/images/nextImageExportOptimizer/inc-leaders-header-opt-1920.WEBP"
            alt="INC Leaders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50"></div>
        </div>
        <div className="relative z-10 container px-4 md:px-6 text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-3xl">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-primary via-white to-secondary inline-block text-transparent bg-clip-text" style={{textShadow: '0 2px 20px rgba(0,0,0,0.3)'}}>
              A New Vision for India
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl lg:text-2xl text-neutral-200 text-balance">
              Under the leadership of <span className="font-bold text-white">Rahul Gandhi</span>, the Indian National Congress champions a future of justice, equality, and prosperity for all.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button asChild size="lg" className="text-lg bg-gradient-to-r from-primary to-orange-400 text-primary-foreground shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50">
                <Link href="#about-inc">
                  Explore Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg text-white border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300">
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Profile Section */}
      <section id="leader-profile" className="w-full py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at top left, hsl(var(--primary)/0.5), transparent 40%), radial-gradient(circle at bottom right, hsl(var(--secondary)/0.5), transparent 40%)' }}></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-2.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-glow"></div>
              <Image
                src="https://placehold.co/800x800.png"
                data-ai-hint="male indian politician"
                alt="Arunkumar Arangavalan"
                width={800}
                height={800}
                className="relative object-cover object-top rounded-full shadow-2xl w-full max-w-md mx-auto aspect-square"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-primary font-bold tracking-widest uppercase">Your Voice in Vellore</p>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-secondary">
                Arunkumar Arangavalan
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-primary/90">
                Congress Leader, Vellore, Anaikkattu Thoguthi
              </p>
              <p className="text-lg text-muted-foreground max-w-xl text-balance">
                A dedicated public servant committed to the progress of Vellore. My mission is to foster inclusive growth, empower our youth, and ensure every voice in Anaikkattu is heard and valued.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="https://www.instagram.com/" target="_blank">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="about-inc" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-6xl">
              Our Vision for a Just India
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
              Rooted in a legacy of service, the Indian National Congress is committed to building an equitable and prosperous future for every citizen.
            </p>
          </div>

          <Card className="mb-20 shadow-xl glass-effect border-0 rounded-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="text-center text-xl md:text-2xl text-foreground relative p-10 md:p-16">
              <Quote className="absolute top-6 left-8 h-16 w-16 text-primary/20" />
              <p className="italic text-balance">"{Principles.Objective}"</p>
              <Quote className="absolute bottom-6 right-8 h-16 w-16 text-primary/20 transform rotate-180" />
            </CardContent>
          </Card>

          <div id="values" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-bold text-center text-primary mb-12">Founding Principles</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {Ideology.CorePrinciples.map((principle, i) => (
                <div key={principle.Name} className="text-center p-6 transition-all duration-300 glass-effect border-0 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                    {principleIcons[principle.Name]}
                  </div>
                  <h4 className="font-headline text-xl text-foreground font-bold">{principle.Name}</h4>
                  <p className="mt-3 text-muted-foreground text-sm text-balance">{principle.Description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nyay Patra Section */}
      <section id="nyay-patra" className="w-full py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl">{Policies.Manifesto}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              Our solemn promise to the people of India, built on five pillars of justice.
            </p>
          </div>
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {Policies.PillarsOfJustice.map((pillar, index) => (
                <AccordionItem key={pillar.Name} value={`item-${index}`} className="glass-effect border-0 rounded-xl shadow-lg overflow-hidden">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      {pillarIcons[pillar.Name]}
                      <span className="font-headline text-xl text-foreground">{pillar.Name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                     <ul className="space-y-4 pt-4 border-t border-white/10">
                      {pillar.Policies.map((policy, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-base text-muted-foreground text-balance">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">My Work for Anaikkattu</h2>
            <p className="mt-6 text-lg text-muted-foreground text-balance">Key accomplishments and community milestones.</p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 rounded-2xl glass-effect border-0 shadow-lg transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex-shrink-0 mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <CheckCircle className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-lg text-foreground text-balance">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary mb-12">
                Voices of Support
              </h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="glass-effect border-0 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                           <CardContent className="p-6 text-lg font-body relative flex-grow">
                             <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/20" />
                             <p className="pt-8 pl-4 italic text-muted-foreground text-balance">"{testimonial.quote}"</p>
                           </CardContent>
                           <CardHeader className="flex flex-row items-center gap-4 border-t border-white/10 pt-4 bg-white/5">
                             <Avatar className="h-14 w-14 border-2 border-primary">
                               <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                               <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div>
                               <p className="font-bold text-lg text-secondary">{testimonial.name}</p>
                               <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                             </div>
                           </CardHeader>
                         </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-50px]" />
                <CarouselNext className="right-[-50px]" />
              </Carousel>
            </div>
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-headline text-4xl font-bold text-primary mb-12">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                {instaPosts.map((post, index) => (
                  <Link href="https://www.instagram.com/" target="_blank" key={index} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <Image
                      src={post.imageUrl}
                      data-ai-hint={post.hint}
                      alt={`Instagram post ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="h-8 w-8 mb-2" />
                      <p className="text-xs text-center">View on Instagram</p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 mt-2 p-6 glass-effect border-0 rounded-2xl text-center">
                    <h3 className="font-headline text-secondary text-xl">Follow Our Journey</h3>
                    <p className="text-muted-foreground mt-2 mb-4 text-sm text-balance">Stay updated with the latest news and events.</p>
                     <Button asChild variant="outline" className="bg-transparent hover:bg-white/10">
                      <Link href="https://www.instagram.com/" target="_blank">
                        <Instagram className="mr-2 h-5 w-5" />
                        @Arunkumar_INC
                      </Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
