
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Newspaper, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, LogIn, UserPlus, LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/contexts/auth-context';
import { Skeleton } from '../ui/skeleton';

const navLinks = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#about', label: 'About Us', icon: Users },
  { href: '/insights', label: 'Insights', icon: Newspaper }, // Updated href
  { href: '#calculators', label: 'Tools', icon: CalculatorIcon },
  { href: '#testimonials', label: 'Testimonials', icon: Star },
  { href: '#faq', label: 'FAQ', icon: HelpCircle },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];

export default function Navbar() {
  const { user, loading, logout } = useAuth();

  const AuthButtons = () => {
    if (loading) {
      return (
        <>
          <Skeleton className="h-9 w-20" />
        </>
      );
    }
    if (user) {
      return (
        <Button onClick={logout} variant="outline" size="sm">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      );
    }
    return (
      <>
        <Button variant="default" size="sm" asChild>
          <Link href="/login">
            <LogIn className="mr-2 h-4 w-4" /> Login
          </Link>
        </Button>
      </>
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
      <>
        <SheetClose asChild>
          <Link
            href="/login"
            className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <LogIn className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </SheetClose>
      </>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">MaxWealth PS</span>
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
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
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <link.icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
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
