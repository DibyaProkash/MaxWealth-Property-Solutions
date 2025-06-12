import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Users, Newspaper, Star, MessageSquare, Briefcase } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#about', label: 'About Us', icon: Users },
  { href: '#content', label: 'Insights', icon: Newspaper },
  { href: '#testimonials', label: 'Testimonials', icon: Star },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">MaxWealth PS</span>
        </Link>
        
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

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                   <Briefcase className="h-7 w-7 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">MaxWealth PS</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
