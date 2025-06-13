
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Newspaper, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, LogIn, LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/contexts/auth-context';
import { Skeleton } from '../ui/skeleton';
import { usePathname } from 'next/navigation'; // Added
import { useScrollSpy } from '@/hooks/use-scroll-spy'; // Added
import { cn } from '@/lib/utils'; // Added

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
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const activeSection = useScrollSpy({ sectionIds: homepageSectionIds, rootMargin: "-40% 0px -60% 0px" });

  const AuthButtons = () => {
    if (loading) {
      return <Skeleton className="h-9 w-20" />;
    }
    if (user) {
      return (
        <Button onClick={logout} variant="outline" size="sm">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      );
    }
    return (
      <Button variant="default" size="sm" asChild>
        <Link href="/login">
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Link>
      </Button>
    );
  };

  const MobileAuthLinks = () => {
    if (loading) {
      return <Skeleton className="h-10 w-full" />;
    }
    if (user) {
      return (
        <SheetClose asChild>
          <Button
            onClick={logout}
            className="w-full flex items-center justify-start space-x-2 rounded-md p-2 transition-colors hover:bg-destructive hover:text-destructive-foreground"
            variant="ghost"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </SheetClose>
      );
    }
    return (
      <SheetClose asChild>
        <Link
          href="/login"
          className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <LogIn className="h-5 w-5" />
          <span>Login</span>
        </Link>
      </SheetClose>
    );
  }

  const getLinkHref = (href: string) => {
    if (pathname === '/' || !href.startsWith('#')) {
      return href;
    }
    // If on a subpage and link is a hash, prefix with / to go to homepage section
    return `/${href}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">MaxWealth PS</span>
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
                    "transition-colors hover:text-primary",
                    isActive && "text-primary font-semibold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <AuthButtons />
          </div>
          
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
                    <Briefcase className="h-7 w-7 text-primary" />
                    <span className="font-headline text-xl font-bold text-primary">MaxWealth PS</span>
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
                            "flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                            isActive && "bg-accent text-accent-foreground font-semibold"
                          )}
                        >
                          <link.icon className="h-5 w-5" />
                          <span>{link.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                  <div className="pt-4 border-t border-border/40">
                    <MobileAuthLinks />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
