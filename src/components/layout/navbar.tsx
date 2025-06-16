
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, BookOpen, BrainCircuit, Download, ListChecks, ChevronDown, ArrowLeft, TrendingUp, NewspaperIcon, Building, Workflow, Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { resourceSubItems } from '@/lib/data'; 
import { aboutUsSubItems } from '@/lib/data'; 
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';

interface NavLinkItem {
  href: string;
  label: string;
  icon: LucideIcon;
  id?: string;
  subItems?: NavLinkItem[];
  description?: string;
}

// Keep resourceSubItems defined here or move to data.ts as preferred
const localResourceSubItems: NavLinkItem[] = [
  { href: '/resources/ai-tools', label: 'AI-Powered Tools', icon: BrainCircuit, description: 'Leverage intelligent financial tools.' },
  { href: '/resources/free-guides', label: 'Free Guides & E-Books', icon: Download, description: 'Access valuable downloadable resources.' },
  { href: '/resources/calculators', label: 'Financial Calculators', icon: CalculatorIcon, description: 'Estimate payments and affordability.' },
  { href: '/resources/roadmap', label: 'Home Buying Roadmap', icon: ListChecks, description: 'Navigate your path to homeownership.' },
  { href: '/resources/faq', label: 'FAQ', icon: HelpCircle, description: 'Find answers to common questions.' },
];

const navLinksData: NavLinkItem[] = [
  { href: '#hero', label: 'Home', icon: Home, id: 'hero' },
  {
    href: '/about',
    label: 'About Us',
    icon: Building, 
    id: 'aboutPage', 
    subItems: aboutUsSubItems 
  },
  { href: '/media', label: 'Media', icon: NewspaperIcon, id: 'mediaPage' },
  {
    href: '/resources',
    label: 'Resources',
    icon: BookOpen,
    id: 'resourcesPage',
    subItems: localResourceSubItems 
  },
  { href: '#testimonials', label: 'Testimonials', icon: Star, id: 'testimonials' },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

const homepageSectionIds = navLinksData
  .filter(link => link.id && link.href.startsWith('#'))
  .map(link => link.id as string);


export default function Navbar() {
  const pathname = usePathname();
  const activeSection = useScrollSpy({ sectionIds: homepageSectionIds, rootMargin: "-40% 0px -60% 0px" });
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const getLinkHref = (href: string) => {
    if (pathname === '/' || !href.startsWith('#')) {
      return href;
    }
    return `/${href}`;
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-lg shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-foreground" />
          <span className="font-headline text-2xl font-bold text-foreground">MaxWealth PS</span>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinksData.map((link) => {
                const isCurrentPageRoot = link.id && (pathname === link.href || pathname.startsWith(link.href + '/'));
                const isActive =
                  (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                  (!link.href.startsWith('#') && isMounted && isCurrentPageRoot);

                if (link.subItems) {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <Link href={link.href} passHref legacyBehavior={false} asChild>
                        <NavigationMenuTrigger
                          className={cn(navigationMenuTriggerStyle(),
                            "bg-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/10 focus:bg-foreground/10 focus:text-foreground",
                            isActive && "text-foreground font-semibold bg-foreground/10"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {link.subItems.map((subItem) => (
                             <ListItem
                              key={subItem.label}
                              title={subItem.label}
                              href={subItem.href}
                              icon={subItem.icon}
                              className={isMounted && pathname === subItem.href ? "bg-accent/10 text-accent-foreground" : ""}
                            >
                              {subItem.description || ""}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuLink asChild>
                         <Link
                          href={getLinkHref(link.href)}
                           className={cn(navigationMenuTriggerStyle(),
                             "bg-transparent",
                             isMounted && isActive ? "text-foreground font-semibold bg-foreground/10" : "text-foreground/70 hover:text-foreground hover:bg-foreground/10 focus:bg-foreground/10 focus:text-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-foreground/10 hover:text-foreground focus-visible:ring-foreground"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Search Site</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter keywords to search the website.
                  </p>
                </div>
                <Input
                  id="search-navbar"
                  placeholder="e.g. Mortgage rates..."
                  className="col-span-2 h-8"
                />
              </div>
            </PopoverContent>
          </Popover>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-foreground/10 hover:text-foreground focus-visible:ring-foreground"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-sidebar text-sidebar-foreground">
                <div className="flex flex-col space-y-1 p-4">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                      <Briefcase className="h-7 w-7 text-sidebar-foreground" />
                      <span className="font-headline text-xl font-bold text-sidebar-foreground">MaxWealth PS</span>
                    </Link>
                  </SheetClose>
                  {navLinksData.map((link) => {
                     const isCurrentPageRoot = link.id && (pathname === link.href || pathname.startsWith(link.href + '/'));
                     const isActive =
                        (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                        (!link.href.startsWith('#') && isMounted && isCurrentPageRoot);

                    if (link.subItems) {
                      return (
                        <React.Fragment key={link.label}>
                           <SheetClose asChild>
                            <Link
                                href={link.href}
                                className={cn(
                                "flex items-center justify-between space-x-2 rounded-md p-2 font-semibold transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                                )}
                            >
                              <span className="flex items-center space-x-2">
                                <link.icon className="h-5 w-5" />
                                <span>{link.label}</span>
                              </span>
                                <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>
                           </SheetClose>
                          <div className="flex flex-col space-y-1 pl-6">
                            {link.subItems.map(subItem => {
                              const isSubItemActive = isMounted && pathname === subItem.href;
                              return (
                                <SheetClose key={subItem.label} asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "flex items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                      isSubItemActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground/80"
                                    )}
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.label}</span>
                                  </Link>
                                </SheetClose>
                              );
                            })}
                          </div>
                        </React.Fragment>
                      );
                    }

                    return (
                      <SheetClose key={link.label} asChild>
                        <Link
                          href={getLinkHref(link.href)}
                          className={cn(
                            "flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold" : "text-sidebar-foreground/80"
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string, icon?: LucideIcon }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '/'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground",
            className 
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
    
