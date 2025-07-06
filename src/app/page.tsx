
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  "Yuva Nyay (Youth Justice)": <GraduationCap className="h-6 w-6" />,
  "Naari Nyay (Women Justice)": <Heart className="h-6 w-6" />,
  "Kisaan Nyay (Farmers Justice)": <Sprout className="h-6 w-6" />,
  "Shramik Nyay (Workers Justice)": <HardHat className="h-6 w-6" />,
  "Hissedari Nyay (Equity Justice)": <PieChart className="h-6 w-6" />,
};

export default function Home() {
  const { Ideology, Principles, Policies } = incData.IndianNationalCongress;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://manifesto.inc.in/images/nextImageExportOptimizer/inc-leaders-header-opt-1920.WEBP"
            alt="INC Leaders"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container px-4 md:px-6 text-center space-y-8">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter" style={{textShadow: '2px 2px 10px rgba(0,0,0,0.5)'}}>
            A New Dawn for India
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-neutral-200">
            Led by <span className="font-bold text-white">Rahul Gandhi</span>, the Indian National Congress is forging a path towards a future defined by justice, equality, and prosperity for all.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="text-lg bg-gradient-to-r from-primary to-orange-400 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300">
              <Link href="#about-inc">
                Discover Our Vision
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leader Profile Section */}
      <section id="leader-profile" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <Image
                src="https://placehold.co/600x800.png"
                data-ai-hint="male indian politician"
                alt="Arunkumar Arangavalan"
                width={600}
                height={800}
                className="relative object-cover object-top rounded-3xl shadow-2xl w-full h-auto"
                style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }}
              />
            </div>
            <div className="space-y-6">
              <p className="text-primary font-bold tracking-widest uppercase">Your Voice in Vellore</p>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-secondary">
                Arunkumar Arangavalan
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-primary/90">
                Congress Leader, Vellore, Anaikkattu Thoguthi
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
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
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-6xl">
              Our Vision for a Just India
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Rooted in a legacy of service, the Indian National Congress is committed to building an equitable and prosperous future for every citizen.
            </p>
          </div>

          <Card className="mb-20 shadow-xl bg-background border-border/20 rounded-2xl overflow-hidden">
            <CardContent className="text-center text-xl md:text-2xl text-foreground relative p-10 md:p-16">
              <Quote className="absolute top-6 left-8 h-16 w-16 text-primary/10" />
              <p className="italic">"{Principles.Objective}"</p>
              <Quote className="absolute bottom-6 right-8 h-16 w-16 text-primary/10 transform rotate-180" />
            </CardContent>
          </Card>

          <div id="values" className="mb-20">
            <h3 className="font-headline text-3xl font-bold text-center text-primary mb-12">Founding Principles</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {Ideology.CorePrinciples.map((principle) => (
                <div key={principle.Name} className="text-center p-6 transition-all duration-300 bg-background/50 border border-border/10 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                    {principleIcons[principle.Name]}
                  </div>
                  <h4 className="font-headline text-xl text-foreground font-bold">{principle.Name}</h4>
                  <p className="mt-3 text-muted-foreground text-sm">{principle.Description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nyay Patra Section */}
      <section id="nyay-patra" className="w-full py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl">{Policies.Manifesto}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Our solemn promise to the people of India, built on five pillars of justice.
            </p>
          </div>
          <Tabs defaultValue={Policies.PillarsOfJustice[0].Name} className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto bg-muted/50 rounded-xl p-2">
              {Policies.PillarsOfJustice.map((pillar) => (
                <TabsTrigger key={pillar.Name} value={pillar.Name} className="py-4 text-sm font-semibold flex-col gap-2 h-full rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                  {pillarIcons[pillar.Name]}
                  <span>{pillar.Name.split('(')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {Policies.PillarsOfJustice.map((pillar) => (
              <TabsContent key={pillar.Name} value={pillar.Name} className="mt-8">
                <Card className="bg-muted/20 border-border/20 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                      {pillarIcons[pillar.Name]}
                      <span>{pillar.Name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {pillar.Policies.map((policy, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
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
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">My Work for Anaikkattu</h2>
            <p className="mt-6 text-lg text-muted-foreground">Key accomplishments and community milestones.</p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-background shadow-lg transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 border border-border/10">
                <div className="flex-shrink-0 mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <CheckCircle className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary mb-12">
                Voices of Support
              </h2>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card border-border/20 rounded-2xl shadow-lg overflow-hidden">
                    <CardContent className="p-6 text-lg font-body relative">
                      <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/10" />
                      <p className="pt-8 pl-4 italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardHeader className="flex flex-row items-center gap-4 border-t border-border/20 pt-4 bg-muted/50">
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
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-headline text-4xl font-bold text-primary mb-12">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="h-8 w-8 mb-2" />
                      <p className="text-xs text-center">View on Instagram</p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 mt-2 p-6 bg-muted/40 rounded-2xl text-center">
                    <h3 className="font-headline text-secondary text-xl">Follow Our Journey</h3>
                    <p className="text-muted-foreground mt-2 mb-4 text-sm">Stay updated with the latest news and events.</p>
                     <Button asChild variant="outline">
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
