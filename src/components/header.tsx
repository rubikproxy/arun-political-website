"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.IncLogo className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="font-bold font-headline text-primary">Arunkumar Arangavelan</span>
            <span className="text-xs text-muted-foreground">Youth Wing Leader, Anaikattu</span>
          </div>
        </Link>
        
        <Button asChild>
          <Link href="/contact">Join The INC</Link>
        </Button>

      </div>
    </header>
  );
}
