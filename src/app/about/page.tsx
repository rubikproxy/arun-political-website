import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Landmark, ShieldCheck, Vote } from "lucide-react";

const timelineData = [
  {
    year: "1885",
    title: "Formation of INC",
    description: "The Indian National Congress was founded, marking the beginning of a unified, nationwide movement for independence."
  },
  {
    year: "1947",
    title: "India Gains Independence",
    description: "A historic moment as India achieves freedom, with the Congress playing a central role in the transfer of power."
  },
  {
    year: "1991",
    title: "Economic Reforms",
    description: "Initiated landmark economic reforms that opened up the Indian economy and paved the way for rapid growth."
  },
  {
    year: "2004",
    title: "Inclusive Governance",
    description: "Formed the UPA government, focusing on inclusive growth, social welfare, and landmark legislations like RTI and MGNREGA."
  },
  {
    year: "2024",
    title: "Vision for a New India",
    description: "Continuing the fight for a secular, democratic, and just India, with a focus on empowering the youth and the marginalized."
  },
];

const valuesData = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Secularism",
    description: "Upholding the diverse, multicultural fabric of India where every religion is respected equally."
  },
  {
    icon: <Vote className="h-10 w-10 text-primary" />,
    title: "Social Justice",
    description: "Fighting for the rights and dignity of every citizen, especially the poor and the marginalized."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Inclusive Growth",
    description: "Ensuring economic development that benefits all sections of society, leaving no one behind."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "National Security",
    description: "Committed to protecting India's sovereignty and integrity with a strong, modern defense."
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
          A Legacy of Service
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          For over a century, the Indian National Congress has been at the forefront of the fight for an independent, democratic, and prosperous India.
        </p>
      </section>

      <section id="history" className="mt-16">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">Our Journey Through Time</h2>
        <div className="relative mt-12">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="group relative mb-8 flex items-center">
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <p className="font-bold text-2xl text-secondary">{item.year}</p>
                  <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary border-4 border-background transition-colors group-hover:bg-primary"></div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="values" className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">What We Stand For</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {valuesData.map((value) => (
            <Card key={value.title} className="text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border/20 hover:border-primary/80 hover:shadow-primary/10 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {value.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
