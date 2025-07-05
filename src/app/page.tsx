import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  HeartPulse,
  BookOpen,
  Users,
  Accessibility,
  Trophy,
  ArrowRight
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
]

const instaPosts = [
  { imageUrl: "https://placehold.co/400x400.png", hint: "leader interacting crowd" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "social service activity" },
  { imageUrl: "https://placehold.co/400x400.png", hint: "inaugurating project" },
]

const principleIcons: { [key: string]: React.ReactNode } = {
  "Socialism": <Scaling className="h-8 w-8 text-primary" />,
  "Secularism": <Landmark className="h-8 w-8 text-primary" />,
  "Democracy": <Vote className="h-8 w-8 text-primary" />,
  "Nationalism": <ShieldCheck className="h-8 w-8 text-primary" />,
  "Progressivism": <TrendingUp className="h-8 w-8 text-primary" />,
};

const pillarIcons: { [key: string]: React.ReactNode } = {
  "Yuva Nyay (Youth Justice)": <GraduationCap className="h-6 w-6 mr-3" />,
  "Naari Nyay (Women Justice)": <Heart className="h-6 w-6 mr-3" />,
  "Kisaan Nyay (Farmers Justice)": <Sprout className="h-6 w-6 mr-3" />,
  "Shramik Nyay (Workers Justice)": <HardHat className="h-6 w-6 mr-3" />,
  "Hissedari Nyay (Equity Justice)": <PieChart className="h-6 w-6 mr-3" />,
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0"></div>
        <div className="container px-4 md:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter">
                <span className="animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
                  Vision for a Just India
                </span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
                Led by the inspiring vision of <span className="font-bold text-secondary">Rahul Gandhi</span>, we are committed to forging a future of justice, equality, and prosperity for every Indian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group text-lg bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Link href="#about-inc">
                    Explore Our Vision
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-[400px] lg:h-[600px]">
              <div className="absolute w-full h-full bg-secondary/20 rounded-full blur-3xl -translate-x-10"></div>
              <div className="absolute w-full h-full bg-primary/20 rounded-full blur-3xl translate-x-10"></div>
              <Image
                src="https://placehold.co/600x750.png"
                data-ai-hint="Rahul Gandhi professional portrait"
                alt="Rahul Gandhi"
                width={500}
                height={700}
                className="object-contain object-center drop-shadow-2xl z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Local Leader Section */}
      <section id="leader-profile" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-primary font-semibold tracking-wide uppercase">Your Leader in Vellore</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-secondary">
                Arunkumar Arangavalan
              </h2>
              <p className="text-2xl font-semibold text-primary/90">
                Congress Party Leader, Vellore District, Anaikkattu Thoguthi
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                A dedicated public servant committed to the progress and welfare of Vellore. With a deep-rooted connection to the community, my mission is to foster inclusive growth, empower our youth, and ensure that every voice in Anaikkattu is heard and valued.
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
            <div className="lg:col-span-5 relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60"></div>
              <Image
                src="https://placehold.co/600x800.png"
                data-ai-hint="male indian politician"
                alt="Arunkumar Arangavalan"
                layout="fill"
                className="object-cover object-top rounded-3xl shadow-2xl [clip-path:polygon(0_0,_100%_10%,_100%_100%,_0_90%)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About INC Section */}
      <section id="about-inc" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
              Our Vision for India
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Rooted in a legacy of service, the Indian National Congress is committed to building a just, equitable, and prosperous future for every citizen.
            </p>
          </div>

          <Card className="mb-20 shadow-xl bg-card/80 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-center text-primary">Our Objective</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-xl text-muted-foreground relative px-8 pb-8">
              <Quote className="absolute top-0 left-6 h-12 w-12 text-primary/20" />
              <p className="pt-8">"{Principles.Objective}"</p>
              <Quote className="absolute bottom-0 right-6 h-12 w-12 text-primary/20 transform rotate-180" />
            </CardContent>
          </Card>

          <div id="values" className="mb-20">
            <h2 className="font-headline text-3xl font-bold text-center text-primary mb-12">Our Core Principles</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {Ideology.CorePrinciples.map((principle) => (
                <Card key={principle.Name} className="text-center p-6 transition-all duration-300 bg-card/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {principleIcons[principle.Name]}
                  </div>
                  <CardTitle className="font-headline text-xl">{principle.Name}</CardTitle>
                  <p className="mt-2 text-muted-foreground text-sm">{principle.Description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div id="nyay-patra">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary">{Policies.Manifesto}</h2>
              <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                Our solemn promise to the people of India, built on five pillars of justice.
              </p>
            </div>
            <Tabs defaultValue={Policies.PillarsOfJustice[0].Name} className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
                {Policies.PillarsOfJustice.map((pillar) => (
                  <TabsTrigger key={pillar.Name} value={pillar.Name} className="py-3 text-base flex-col h-full">
                    {pillarIcons[pillar.Name]}
                    <span>{pillar.Name.split('(')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {Policies.PillarsOfJustice.map((pillar) => (
                <TabsContent key={pillar.Name} value={pillar.Name}>
                  <Card className="mt-6 border-primary/20">
                    <CardHeader>
                       <CardTitle className="font-headline text-2xl text-primary">{pillar.Name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {pillar.Policies.map((policy, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-base text-muted-foreground">{policy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">My Work for Anaikkattu</h2>
            <p className="mt-4 text-lg text-muted-foreground">Key accomplishments and milestones.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {achievements.map((item, index) => (
              <Card key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 transition-all hover:bg-muted hover:shadow-lg hover:-translate-y-1">
                <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-lg text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center text-secondary mb-12">
            Voices of Support
          </h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-card/80 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
                      <CardContent className="p-6 text-lg font-body relative flex-grow">
                        <Quote className="absolute top-4 left-4 h-16 w-16 text-primary/10" />
                        <p className="pt-12 pl-4 italic text-muted-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex flex-row items-center gap-4 border-t pt-6 bg-muted/50">
                        <Avatar className="h-12 w-12">
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
            <CarouselPrevious className="left-[-50px]"/>
            <CarouselNext className="right-[-50px]"/>
          </Carousel>
        </div>
      </section>
      
      {/* Instagram Feed */}
      <section id="instagram-feed" className="w-full py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold text-center text-primary mb-12">Connect on Instagram</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {instaPosts.map((post, index) => (
                  <Link href="https://www.instagram.com/" target="_blank" key={index} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <Image
                          src={post.imageUrl}
                          data-ai-hint={post.hint}
                          alt={`Instagram post ${index + 1}`}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Instagram className="h-12 w-12 mb-4" />
                          <p>View on Instagram</p>
                      </div>
                  </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
