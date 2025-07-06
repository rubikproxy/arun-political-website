import Link from "next/link";
import { Twitter, Facebook, Instagram, Youtube, MoveRight } from 'lucide-react';
import { Icons } from "./icons";
import { Button } from "./ui/button";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Leader", href: "/leader-profile" },
    { name: "Media Gallery", href: "/media" },
    { name: "Events", href: "/events" },
  ];

  return (
    <footer className="bg-muted/30 border-t-4 border-primary/50">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Icons.IncFooterLogo className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              A commitment to progress, unity, and a stronger India for all.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Link href="#" aria-label="Twitter" className="p-2 rounded-full bg-background/50 hover:bg-accent group transition-all duration-300">
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Facebook" className="p-2 rounded-full bg-background/50 hover:bg-accent group transition-all duration-300">
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded-full bg-background/50 hover:bg-accent group transition-all duration-300">
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Youtube" className="p-2 rounded-full bg-background/50 hover:bg-accent group transition-all duration-300">
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                     <MoveRight className="h-4 w-4 text-primary/50 group-hover:translate-x-1 transition-transform duration-300"/>
                     <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="font-headline text-lg font-bold text-secondary mb-4">Get In Touch</h3>
             <address className="not-italic text-muted-foreground space-y-3">
               <p>Anaikattu Thoguthi Office, Vellore District, Tamil Nadu</p>
               <p><a href="mailto:contact@arunkumar.inc" className="hover:text-primary">contact@arunkumar.inc</a></p>
             </address>
          </div>

          {/* Column 4: Join Us */}
          <div>
            <h3 className="font-headline text-lg font-bold text-secondary mb-4">Join The Movement</h3>
            <p className="text-muted-foreground mb-4">
              Be a part of the change. Your voice and support are crucial.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
           <p>
            &copy; {new Date().getFullYear()} Arunkumar Arangavalan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}