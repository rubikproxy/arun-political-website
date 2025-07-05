import Link from "next/link";
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Icons.IncLogo className="h-12 w-auto" />
            </Link>
            <p className="text-center text-muted-foreground md:text-left max-w-xs">
              For a progressive, secular, and united India.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-bold font-headline">Quick Links</h4>
            <div className="flex gap-4">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-accent">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-accent">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-accent">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Youtube" className="p-2 rounded-full hover:bg-accent">
              <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
           <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Arunkumar Arangavalan. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
