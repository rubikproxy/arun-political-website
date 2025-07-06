import type {Metadata} from 'next';
import { Poppins, Merriweather } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Icons } from '@/components/icons';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '700']
});

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: {
    default: 'Arunkumar Arangavelan | INC Youth Wing Leader, Anaikattu',
    template: `%s | Arunkumar Arangavelan`,
  },
  description: 'Official website of Arunkumar Arangavelan, the Indian National Congress Youth Wing Leader for the Anaikkattu constituency in Vellore. Connect and support the vision for a progressive future, inspired by Rahul Gandhi.',
  keywords: [
    "Arunkumar Arangavelan",
    "Indian National Congress",
    "INC",
    "Youth Wing Leader",
    "Anaikattu constituency",
    "Anaikattu",
    "Vellore",
    "Congress Party Leader",
    "Political Leader Tamil Nadu",
    "Rahul Gandhi",
  ],
  openGraph: {
    title: 'Arunkumar Arangavelan | INC Youth Wing Leader, Anaikattu',
    description: 'Official website of Arunkumar Arangavelan, INC Youth Wing Leader for the Anaikkattu constituency.',
    url: 'https://www.your-domain.com',
    siteName: 'Arunkumar Arangavelan Official Website',
    images: [
      {
        url: 'https://i.imgur.com/Y1hTTxE.jpeg',
        width: 800,
        height: 800,
        alt: 'Arunkumar Arangavelan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunkumar Arangavelan | INC Youth Wing Leader, Anaikattu',
    description: 'Official website of Arunkumar Arangavelan, INC Youth Wing Leader for the Anaikkattu constituency.',
    images: ['https://i.imgur.com/Y1hTTxE.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const noscriptStyles = `
    body { overflow: hidden; }
    .noscript-overlay {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: #1a1a1a;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      text-align: center;
      padding: 1rem;
    }
    .noscript-content {
      border: 1px solid #FF9933;
      border-radius: 1rem;
      padding: 2rem 3rem;
      background: rgba(40, 40, 40, 0.7);
      max-width: 600px;
    }
    .noscript-content h1 {
      font-family: Georgia, serif;
      font-size: 2.25rem;
      color: #FF9933;
      margin-bottom: 1.5rem;
    }
    .noscript-content p {
      font-size: 1.125rem;
      line-height: 1.75;
      margin-bottom: 2rem;
    }
    .noscript-content a {
      color: #FF9933;
      text-decoration: underline;
    }
  `;
  return (
    <html lang="en" className={`!scroll-smooth scroll-pt-20 ${poppins.variable} ${merriweather.variable}`}>
      <body className="font-body antialiased">
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noscriptStyles }} />
          <div className="noscript-overlay">
            <div className="noscript-content">
              <h1>JavaScript Required</h1>
              <p>
                This site is highly interactive and requires JavaScript to function correctly. For the best experience, please enable JavaScript in your browser.
              </p>
              <a href="https://www.enable-javascript.com/" target="_blank" rel="noopener noreferrer">
                Learn How
              </a>
            </div>
          </div>
        </noscript>
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
