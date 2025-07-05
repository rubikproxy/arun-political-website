import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Arunkumar Arangavalan | INC Leader, Vellore',
  description: 'Official website of Arunkumar Arangavalan, Congress Party Leader, Vellore District, Anaikkattu Thoguthi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth scroll-pt-20">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-dvh flex-col bg-background">
          <div 
            className="absolute inset-0 z-[-1] opacity-70" 
            style={{
              backgroundImage: 'linear-gradient(160deg, hsl(var(--primary)/0.1) 0%, hsl(var(--background)) 30%, hsl(var(--background)) 70%, hsl(var(--secondary)/0.1) 100%)'
            }}
          />
          <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Icons.hand className="w-2/3 h-2/3 text-neutral-900" />
          </div>

          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
