
// Remove "use client" from here to allow metadata export
import type {Metadata} from 'next';
// import Script from 'next/script'; // Removed Script component for Google Maps
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTopButton from '@/components/layout/scroll-to-top-button';
import LoadingIndicator from '@/components/layout/loading-indicator';
import Navbar from '@/components/layout/navbar'; 
import LiveChatWidget from '@/components/layout/live-chat-widget'; 
import { ChatWidgetProvider } from '@/contexts/chat-widget-context';

export const metadata: Metadata = {
  title: 'MaxWealth Property Services',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        
        {/* Removed Google Maps API Script and inline initMap script */}
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
