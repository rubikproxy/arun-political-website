
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sliderImages = [
  {
    src: "https://i.imgur.com/R2OOBGQ.jpeg",
    hint: "male indian politician",
    alt: "Arunkumar Arangavalan"
  },
  {
    src: "https://placehold.co/800x800.png",
    hint: "leader meeting people",
    alt: "Arunkumar Arangavalan meeting constituents"
  },
  {
    src: "https://placehold.co/800x800.png",
    hint: "speaking at event",
    alt: "Arunkumar Arangavalan speaking at an event"
  }
];

export function LeaderProfileSlider() {
  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        {sliderImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    data-ai-hint={image.hint}
                    alt={image.alt}
                    width={800}
                    height={800}
                    className="object-cover object-top w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
}
