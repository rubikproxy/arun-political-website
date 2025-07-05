import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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

export default function LeaderProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1">
           <div className="relative p-1 bg-gradient-to-tr from-primary to-secondary rounded-xl">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-xl blur-lg opacity-40 animate-pulse"></div>
            <Image
              src="https://placehold.co/600x800.png"
              data-ai-hint="male indian politician"
              width={600}
              height={800}
              alt="Arunkumar Arangavalan"
              className="relative rounded-xl object-cover shadow-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
            Arunkumar Arangavalan
          </h1>
          <p className="text-2xl font-semibold text-primary">
            Congress Party Leader, Vellore District, Anaikkattu Thoguthi
          </p>
          <p className="text-lg text-muted-foreground">
            A dedicated public servant committed to the progress and welfare of Vellore. With a deep-rooted connection to the community, my mission is to foster inclusive growth, empower our youth, and ensure that every voice in Anaikkattu is heard and valued.
          </p>
          <p className="text-lg text-muted-foreground">
            Inspired by the principles of the Indian National Congress, I believe in building a future based on justice, equality, and prosperity for all.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#" target="_blank">
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="achievements" className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">My Work & Vision</h2>
        <Card className="mt-12 shadow-xl bg-card/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Key Accomplishments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-background/50 transition-all hover:bg-muted/80 hover:border-primary/50">
                  <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="instagram-feed" className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center text-primary">From My Instagram</h2>
        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3">
            {instaPosts.map((post, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
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
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
