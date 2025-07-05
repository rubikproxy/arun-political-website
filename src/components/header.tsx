import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="https://manifesto.inc.in/images/nextImageExportOptimizer/inc-logo-with-name-opt-1920.WEBP"
            width={120}
            height={30}
            alt="INC Logo"
            className="h-8 w-auto"
          />
          <span className="hidden font-bold sm:inline-block font-headline">BharatPulse</span>
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
