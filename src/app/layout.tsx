// Remove "use client" from here to allow metadata export
import type {Metadata} from 'next';
import Script from 'next/script'; // Import Script component
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTopButton from '@/components/layout/scroll-to-top-button';
import LoadingIndicator from '@/components/layout/loading-indicator';
import Navbar from '@/components/layout/navbar'; 
import LiveChatWidget from '@/components/layout/live-chat-widget'; 
import { ChatWidgetProvider } from '@/contexts/chat-widget-context';

export const metadata: Metadata = {
  title: 'MaxWealth PS',
  description: 'Your trusted partner in financial planning for home buying.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        
        {/* Inline script to define initMap callback and ready flag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initMap() {
                window.googleMapsApiInitialized = true;
                window.dispatchEvent(new CustomEvent('google-maps-api-ready'));
              }
            `,
          }}
        />
        {/* Google Maps API Script using Next.js Script component for better handling */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeHnRLEkdqvAFtfed89oQOIgZemP8FSEM&callback=initMap&libraries=maps,marker&v=beta"
          strategy="beforeInteractive" // Load before page is interactive
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="light" 
            enableSystem={false} 
            disableTransitionOnChange
        >
          <ChatWidgetProvider>
            <LoadingIndicator>
              <Navbar />
              {children}
              <Toaster />
              <ScrollToTopButton />
              <LiveChatWidget />
            </LoadingIndicator>
          </ChatWidgetProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
