import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.hand className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-primary">BharatPulse</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#home" className="transition-colors hover:text-primary">Home</Link>
          <Link href="#about" className="transition-colors hover:text-primary">About</Link>
        </nav>
        <div className="flex items-center gap-4">
            <Button>Get Involved</Button>
        </div>
      </div>
    </header>
  );
}
