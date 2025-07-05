import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'BharatPulse',
  description: 'A modern political platform for a new generation of leaders.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-dvh flex-col bg-background">
          <div 
            className="absolute inset-0 z-[-1]" 
            style={{
              backgroundImage: 'linear-gradient(180deg, hsl(var(--primary)/0.05), transparent 40%, transparent 60%, hsl(var(--secondary)/0.05))'
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
