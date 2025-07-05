import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PolicySummarizer from "@/components/policy-summarizer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Rahul Gandhi: A Vision for a United India
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Leading with compassion, integrity, and a commitment to justice for all. Discover the vision for a stronger, more inclusive nation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#policies">
                  <Button size="lg" className="group">
                    Explore Policies
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button size="lg" variant="secondary">
                    Meet the Team
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x600.png"
              data-ai-hint="Rahul Gandhi professional"
              width={600}
              height={600}
              alt="Rahul Gandhi"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="https://placehold.co/600x600.png"
              data-ai-hint="professional portrait"
              width={600}
              height={600}
              alt="Friend's Profile"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">A Fresh Voice for Progress</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Introducing a dedicated leader committed to community development and public service. With a proven track record of driving positive change, they bring new energy and innovative ideas to the forefront of our political landscape.
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Their work focuses on empowering local communities, fostering sustainable growth, and ensuring that every voice is heard.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="policies" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Understand the Policies</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Use our AI-powered tool to get clear, concise summaries of complex political statements and policies.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-3xl pt-12">
                <PolicySummarizer />
            </div>
        </div>
      </section>
    </>
  );
}
