import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { incData } from "@/lib/inc-data";
import {
  Scaling,
  Landmark,
  Vote,
  Shield,
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
  CheckCircle,
  Quote
} from "lucide-react";

const principleIcons: { [key: string]: React.ReactNode } = {
  "Socialism": <Scaling className="h-10 w-10 text-primary" />,
  "Secularism": <Landmark className="h-10 w-10 text-primary" />,
  "Democracy": <Vote className="h-10 w-10 text-primary" />,
  "Nationalism": <Shield className="h-10 w-10 text-primary" />,
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

export default function AboutPage() {
  const { Ideology, Principles, Policies } = incData.IndianNationalCongress;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
          Our Vision for India
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Rooted in a legacy of service, the Indian National Congress is committed to building a just, equitable, and prosperous future for every citizen.
        </p>
      </section>

      <section id="objective" className="mt-16">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Objective</h2>
        <Card className="mt-8 shadow-xl bg-card/60 backdrop-blur-sm border-t-4 border-primary/50">
          <CardContent className="p-8 text-center text-lg text-muted-foreground relative">
            <Quote className="absolute top-4 left-4 h-10 w-10 text-primary/20" />
            <p className="pt-8">"{Principles.Objective}"</p>
          </CardContent>
        </Card>
      </section>

      <section id="values" className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Core Principles</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Ideology.CorePrinciples.map((principle) => (
            <Card key={principle.Name} className="text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border/20 hover:border-primary/80 hover:shadow-primary/10 hover:shadow-xl hover:-translate-y-1">
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
      </section>

      <section id="nyay-patra" className="mt-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">{Policies.Manifesto}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Our solemn promise to the people of India, built on five pillars of justice.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Policies.PillarsOfJustice.map((pillar) => (
              <AccordionItem key={pillar.Name} value={pillar.Name}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    {pillarIcons[pillar.Name]}
                    <span>{pillar.Name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-4 pl-4">
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
      </section>
      
      <section id="other-policies" className="mt-20">
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
                  <ul className="space-y-4 pt-4 pl-4">
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
      </section>
    </div>
  )
}
