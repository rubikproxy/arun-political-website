import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.IncLogo className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="font-bold font-headline text-primary">Arunkumar Arangavalan</span>
            <span className="text-xs text-muted-foreground">Youth Wing Leader, Anaikattu</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">Join the INC</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-8">
                <Button asChild className="w-full mt-4">
                  <Link href="/contact">Join the INC</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
