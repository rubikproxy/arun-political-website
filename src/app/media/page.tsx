import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Newspaper, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const videos = [
    { videoId: "dQw4w9WgXcQ", title: "Keynote Speech at Vellore Leaders Summit", description: "Discussing the roadmap for urban development and youth employment." },
    { videoId: "jNQXAC9IVRw", title: "Bharat Jodo Yatra - A Journey of Unity", description: "Highlights from the historic march for a united India." },
];

const articles = [
    { title: "New Development Projects Announced for Anaikattu", source: "The Hindu", date: "Oct 15, 2024", url: "#" },
    { title: "INC Leader Calls for Better Farmer Support", source: "Times of India", date: "Oct 10, 2024", url: "#" },
    { title: "A Vision for Education in Vellore", source: "Dinamalar", date: "Sep 28, 2024", url: "#" },
]

const galleryImages = [
  { imageUrl: "https://placehold.co/600x400.png", hint: "leader with children" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "political event stage" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "speaking at podium" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "crowd at rally" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "meeting with villagers" },
  { imageUrl: "https://placehold.co/600x400.png", hint: "flag hoisting ceremony" }
];

export default function MediaPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <section className="text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl">
                    Media & Gallery
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                    Watch our speeches, read our press coverage, and see highlights from our journey.
                </p>
            </section>

            <section id="videos" className="mt-16">
                <h2 className="font-headline text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3"><Youtube /> Latest Speeches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map(video => (
                        <Card key={video.videoId} className="shadow-xl">
                             <CardHeader>
                                <div className="aspect-video overflow-hidden rounded-t-lg">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="font-headline text-xl">{video.title}</CardTitle>
                                <CardDescription className="mt-2">{video.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

             <section id="press" className="mt-20">
                <h2 className="font-headline text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3"><Newspaper/> In The News</h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {articles.map(article => (
                        <Card key={article.title} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="font-bold">{article.title}</p>
                                    <p className="text-sm text-muted-foreground">{article.source} - {article.date}</p>
                                </div>
                                <Button asChild variant="outline"><Link href={article.url}>Read More</Link></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section id="gallery" className="mt-20">
                <h2 className="font-headline text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3"><Camera/> Photo Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={image.imageUrl}
                                data-ai-hint={image.hint}
                                alt={`Gallery image ${index + 1}`}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
