"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Profile", href: "/leader-profile" },
    { name: "Media", href: "/media" },
    { name: "Events", href: "/events" },
];

export default function Header() {
  const pathname = usePathname();

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
        
        <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname === item.href ? "text-primary font-semibold" : "text-foreground/80"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-border/60">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
                <div className="flex justify-between items-center mb-8">
                     <Link href="/" className="flex items-center space-x-2">
                        <Icons.IncLogo className="h-10 w-auto" />
                     </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                            href={item.href}
                            className={cn(
                                "px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-muted",
                                pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                      </SheetClose>
                  ))}
                </div>
                <div className="border-t border-border/40 pt-6 mt-6">
                    <SheetClose asChild>
                        <Button asChild className="w-full" size="lg">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </SheetClose>
                </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
