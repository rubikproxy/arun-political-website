import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Briefcase,
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
  HeartPulse,
  BookOpen,
  Users,
  Accessibility,
  Trophy
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { incData } from "@/lib/inc-data";

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

const achievements = [
  "Spearheaded the 'Clean Anaikattu' initiative, improving local sanitation.",
  "Successfully campaigned for the upgradation of the district primary school.",
  "Organized free health camps, benefiting over 5000 residents.",
  "Secured funding for new irrigation channels for local farmers."
]

const instaPosts = [
  { imageUrl: "https://placehold.co/400x400.png", hint: "leader interacting crowd" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "social service activity" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "inaugurating project" },
]

const principleIcons: { [key: string]: React.ReactNode } = {
  "Socialism": <Scaling className="h-10 w-10 text-primary" />,
  "Secularism": <Landmark className="h-10 w-10 text-primary" />,
  "Democracy": <Vote className="h-10 w-10 text-primary" />,
  "Nationalism": <ShieldCheck className="h-10 w-10 text-primary" />,
  "Progressivism": <TrendingUp className="h-10 w-10 text-primary" />,
};

const pillarIcons: { [key: string]: React.ReactNode } = {
  "Yuva Nyay (Youth Justice)": <GraduationCap className="h-6 w-6 text-primary" />,
  "Naari Nyay (Women Justice)": <Heart className="h-6 w-6 text-primary" />,
  "Kisaan Nyay (Farmers Justice)": <Sprout className="h-6 w-6 text-primary" />,
  "Shramik Nyay (Workers Justice)": <HardHat className="h-6 w-6 text-primary" />,
  "Hissedari Nyay (Equity Justice)": <PieChart className="h-6 w-6 text-primary" />,
};

const otherPolicyIcons: { [key: string]: React.ReactNode } = {
  "Health": <HeartPulse className="h-6 w-6 text-primary" />,
  "Education": <BookOpen className="h-6 w-6 text-primary" />,
  "Religious and Linguistic Minorities": <Users className="h-6 w-6 text-primary" />,
  "Senior Citizens, Disabilities, LGBTQIA+": <Accessibility className="h-6 w-6 text-primary" />,
  "Sports": <Trophy className="h-6 w-6 text-primary" />,
}


export default function Home() {
  const { Ideology, Principles, Policies } = incData.IndianNationalCongress;

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden min-h-[90vh] flex items-center">
        <div className="container px-4 md:px-6 z-10 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
                  A New Vision for India
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Inspired by <span className="font-bold text-secondary">Rahul Gandhi</span>, we are building a nation rooted in justice, freedom, and harmony for every citizen.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg" className="text-lg bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Link href="/contact">Join the Movement</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg bg-gradient-to-r from-secondary to-green-600 text-white shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Link href="#about-inc">Explore Our Vision</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center h-[500px] lg:h-[650px] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 [clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)]">
                  <Image
                      src="https://placehold.co/600x750.png"
                      data-ai-hint="Rahul Gandhi professional portrait"
                      layout="fill"
                      alt="Rahul Gandhi"
                      className="object-cover object-top"
                      priority
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Leader Section */}
      <section id="leader-profile" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
             <div className="flex flex-col justify-center space-y-6 lg:order-2">
                <p className="text-primary font-semibold tracking-wide uppercase">Leadership in Vellore</p>
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">Arunkumar Arangavalan</h2>
                <p className="text-2xl font-semibold text-primary/90">
                  Congress Party Leader, Vellore District, Anaikkattu Thoguthi
                </p>
                <p className="text-lg text-muted-foreground">
                  A dedicated public servant committed to the progress and welfare of Vellore. With a deep-rooted connection to the community, my mission is to foster inclusive growth, empower our youth, and ensure that every voice in Anaikkattu is heard and valued.
                </p>
                <p className="text-lg text-muted-foreground">
                  Inspired by the principles of the Indian National Congress, I believe in building a future based on justice, equality, and prosperity for all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="relative w-full h-[500px] lg:h-[600px] lg:order-1">
               <div className="absolute inset-0 [clip-path:polygon(0%_0%,_75%_0%,_100%_100%,_0%_100%)]">
                <Image
                  src="https://placehold.co/600x800.png"
                  data-ai-hint="male indian politician"
                  layout="fill"
                  alt="Arunkumar Arangavalan"
                  className="object-cover object-top shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">My Work & Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">Key accomplishments and milestones for Anaikkattu.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 transition-all hover:bg-muted hover:shadow-lg hover:-translate-y-1">
                <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-lg text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About INC Section */}
      <section id="about-inc" className="w-full py-12 md:py-24 bg-muted/50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
                Our Vision for India
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                Rooted in a legacy of service, the Indian National Congress is committed to building a just, equitable, and prosperous future for every citizen.
              </p>
            </div>
            
            <div id="objective" className="mb-20">
              <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Objective</h2>
              <Card className="mt-8 shadow-xl bg-card/80 backdrop-blur-sm border-0">
                <CardContent className="p-8 text-center text-xl text-muted-foreground relative">
                  <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
                  <p className="pt-8">"{Principles.Objective}"</p>
                  <Quote className="absolute bottom-6 right-6 h-12 w-12 text-primary/20 transform rotate-180" />
                </CardContent>
              </Card>
            </div>

            <div id="values" className="mb-20">
              <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Core Principles</h2>
              <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {Ideology.CorePrinciples.map((principle) => (
                  <Card key={principle.Name} className="text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
                    <CardHeader>
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        {principleIcons[principle.Name]}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="font-headline text-xl">{principle.Name}</CardTitle>
                      <p className="mt-2 text-muted-foreground">{principle.Description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div id="nyay-patra" className="mb-20">
              <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-primary">{Policies.Manifesto}</h2>
                <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                  Our solemn promise to the people of India, built on five pillars of justice.
                </p>
              </div>
              <div className="mt-12 max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {Policies.PillarsOfJustice.map((pillar) => (
                    <AccordionItem key={pillar.Name} value={pillar.Name} className="border-b">
                      <AccordionTrigger className="text-xl font-headline hover:no-underline py-4">
                        <div className="flex items-center gap-4">
                          {pillarIcons[pillar.Name]}
                          <span>{pillar.Name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-4 pt-4 pl-4 border-l-2 border-primary ml-5">
                          {pillar.Policies.map((policy, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground">{policy}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            
            <div id="other-policies">
              <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Comprehensive Commitments</h2>
               <div className="mt-12 max-w-4xl mx-auto">
                <Accordion type="multiple" className="w-full space-y-4">
                  {Policies.OtherPolicies.map((category) => (
                    <AccordionItem key={category.Category} value={category.Category} className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-lg px-4">
                      <AccordionTrigger className="text-xl font-headline hover:no-underline">
                        <div className="flex items-center gap-4">
                          {otherPolicyIcons[category.Category]}
                          <span>{category.Category}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-4 pt-4 pl-4 border-l-2 border-primary ml-5">
                          {category.Policies.map((policy, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground">{policy}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
         </div>
      </section>
      
      {/* Why Congress Section */}
      <section id="why-congress" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why Congress?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">
              Our core values guide our mission to build a just and prosperous India.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyCongressData.map((item) => (
              <Card key={item.title} className="text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
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

      {/* Instagram Feed */}
       <section id="instagram-feed" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold text-center text-primary">From My Instagram</h2>
          <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3">
              {instaPosts.map((post, index) => (
                  <Link href="https://www.instagram.com/" target="_blank" key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                          src={post.imageUrl}
                          data-ai-hint={post.hint}
                          alt={`Instagram post ${index + 1}`}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                       <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Instagram className="h-12 w-12 text-white" />
                      </div>
                  </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24">
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
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-card/80 backdrop-blur-sm border-0">
                      <CardContent className="p-6 text-lg font-body relative">
                        <Quote className="absolute top-4 left-4 h-16 w-16 text-primary/20" />
                        <p className="pt-12 pl-4 italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex flex-row items-center gap-4 border-t pt-6 bg-muted/50 rounded-b-lg">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
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
