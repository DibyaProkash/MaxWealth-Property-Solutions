
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Newspaper, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation'; 
import { useScrollSpy } from '@/hooks/use-scroll-spy'; 
import { cn } from '@/lib/utils'; 

const navLinksData = [
  { href: '#hero', label: 'Home', icon: Home, id: 'hero' },
  { href: '#about', label: 'About Us', icon: Users, id: 'about' },
  { href: '/insights', label: 'Insights', icon: Newspaper, id: 'insights' },
  { href: '#calculators', label: 'Tools', icon: CalculatorIcon, id: 'calculators' },
  { href: '#testimonials', label: 'Testimonials', icon: Star, id: 'testimonials' },
  { href: '#faq', label: 'FAQ', icon: HelpCircle, id: 'faq' },
  { href: '#contact', label: 'Contact', icon: MessageSquare, id: 'contact' },
];

const homepageSectionIds = navLinksData
  .filter(link => link.href.startsWith('#'))
  .map(link => link.id as string);


export default function Navbar() {
  const pathname = usePathname();
  const activeSection = useScrollSpy({ sectionIds: homepageSectionIds, rootMargin: "-40% 0px -60% 0px" });

  const getLinkHref = (href: string) => {
    if (pathname === '/' || !href.startsWith('#')) {
      return href;
    }
    return `/${href}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-primary" /> {/* Primary color for logo icon */}
          <span className="font-headline text-2xl font-bold text-primary">MaxWealth PS</span> {/* Primary color for name */}
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinksData.map((link) => {
              const isActive = 
                (link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                (!link.href.startsWith('#') && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={getLinkHref(link.href)}
                  className={cn(
                    "transition-colors hover:text-primary", // Hover to primary (green)
                    isActive ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground" // Active is primary, inactive is muted foreground
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col space-y-4 p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Briefcase className="h-7 w-7 text-primary" /> {/* Primary color */}
                    <span className="font-headline text-xl font-bold text-primary">MaxWealth PS</span> {/* Primary color */}
                  </Link>
                  {navLinksData.map((link) => {
                     const isActive = 
                        (link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                        (!link.href.startsWith('#') && pathname.startsWith(link.href));
                    return (
                      <SheetClose key={link.label} asChild>
                        <Link
                          href={getLinkHref(link.href)}
                          className={cn(
                            "flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground", // Accent for hover in sheet
                            isActive && "bg-accent text-accent-foreground font-semibold" // Accent for active in sheet
                          )}
                        >
                          <link.icon className="h-5 w-5" />
                          <span>{link.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
