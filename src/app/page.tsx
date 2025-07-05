import Image from "next/image";
import { Button } from "@/components/ui/button";
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
    </>
  );
}
