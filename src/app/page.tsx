
import Image from "next/image";
import { preload } from "react-dom";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Landmark,
  ShieldCheck,
  Vote,
  Quote,
  Instagram,
  MessageCircle,
  Scaling,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { incData } from "@/lib/inc-data";

const principleIcons: { [key: string]: React.ReactNode } = {
  "Socialism": <Scaling className="h-8 w-8 text-primary" />,
  "Secularism": <Landmark className="h-8 w-8 text-primary" />,
  "Democracy": <Vote className="h-8 w-8 text-primary" />,
  "Nationalism": <ShieldCheck className="h-8 w-8 text-primary" />,
  "Progressivism": <TrendingUp className="h-8 w-8 text-primary" />,
};

export default function Home() {
  const { IndianNationalCongress, homePage } = incData;
  const { Ideology, Principles } = IndianNationalCongress;
  const { hero, leaderProfile, vision, testimonials, connect } = homePage;

  preload(leaderProfile.image, { as: "image" });

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.image}
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
              {hero.headline}
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl lg:text-2xl text-neutral-200 text-balance">
              {hero.subheading.part1}
              <span className="font-bold text-white">{hero.subheading.highlight}</span>
              {hero.subheading.part2}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button asChild size="lg" className="text-lg bg-gradient-to-r from-primary to-orange-400 text-primary-foreground shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50">
                <Link href="#about-inc">
                  {hero.buttons.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg text-white border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300">
                <Link href="/contact">{hero.buttons.secondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Profile Section */}
      <section id="leader-profile" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
              <div className="relative p-1.5 rounded-[2.5rem] bg-gradient-to-b from-primary via-white to-secondary shadow-2xl shadow-primary/40">
                <div className="relative aspect-square overflow-hidden rounded-[2.15rem]">
                  <Image
                    src={leaderProfile.image}
                    data-ai-hint={leaderProfile.imageHint}
                    alt={leaderProfile.imageAlt}
                    width={800}
                    height={800}
                    loading="lazy"
                    sizes="(max-width: 480px) 90vw, 448px"
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-primary font-bold tracking-widest uppercase">{leaderProfile.subtitle}</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-secondary">
                {leaderProfile.name}
              </h2>
              <p className="text-lg font-semibold text-primary/90">
                {leaderProfile.title}
              </p>
              <p className="text-lg text-muted-foreground max-w-xl text-balance">
                {leaderProfile.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/contact">
                    <MessageCircle />
                    {leaderProfile.buttons.contact}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={leaderProfile.instagramUrl} target="_blank">
                    <Instagram />
                    {leaderProfile.buttons.instagram}
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
              {vision.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
              {vision.subheading}
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="max-w-4xl mx-auto shadow-xl bg-card rounded-2xl overflow-hidden border-0">
                <CardContent className="relative text-center text-lg md:text-xl text-foreground p-10 md:p-16">
                    <span className="absolute top-4 left-6 font-headline text-9xl text-primary/20 select-none" aria-hidden="true">“</span>
                    <p className="relative z-10 text-balance">
                        {Principles.Objective}
                    </p>
                    <span className="absolute bottom-[-3rem] right-6 font-headline text-9xl text-primary/20 select-none" aria-hidden="true">”</span>
                </CardContent>
            </Card>
          </div>

          <div id="values" className="animate-fade-in-up mt-24" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-bold text-center text-primary mb-12">{vision.principlesHeadline}</h3>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-secondary sm:text-6xl">{testimonials.headline}</h2>
            <p className="mt-6 text-lg text-muted-foreground text-balance">{testimonials.subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.list.map((testimonial, index) => (
              <div key={index} className="flex flex-col bg-muted/30 p-8 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <Quote className="h-10 w-10 text-primary/80 mb-6" />
                <p className="text-lg text-foreground/90 flex-grow text-balance mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-foreground/10">
                  <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.avatarAlt} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg text-secondary">{testimonial.name}</p>
                    <p className="text-md text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="w-full py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl">{connect.headline}</h2>
              <p className="mt-6 text-lg text-muted-foreground text-balance">{connect.subheading}</p>
          </div>
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {connect.posts.map((post, index) => (
                    <Link href={connect.instagramUrl} target="_blank" key={index} className="group relative overflow-hidden rounded-xl shadow-md aspect-square">
                      <Image
                        src={post.imageUrl}
                        data-ai-hint={post.hint}
                        alt={post.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="h-8 w-8" />
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="mt-8 text-center">
                   <Button asChild variant="outline" size="lg">
                    <Link href={connect.instagramUrl} target="_blank">
                      <Instagram className="mr-2 h-5 w-5" />
                      {connect.buttonText}
                    </Link>
                  </Button>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
}
