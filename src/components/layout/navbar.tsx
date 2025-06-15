
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Newspaper, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, BookOpen, BrainCircuit, Download, ListChecks, ChevronDown } from 'lucide-react';
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

interface NavLinkItem {
  href: string;
  label: string;
  icon: LucideIcon;
  id?: string; // For scroll spy on homepage sections
  subItems?: NavLinkItem[];
  description?: string; // For NavigationMenu content
}

const resourceSubItems: NavLinkItem[] = [
  { href: '/resources/ai-tools', label: 'AI-Powered Tools', icon: BrainCircuit, description: 'Leverage intelligent financial tools.' },
  { href: '/resources/free-guides', label: 'Free Guides & E-Books', icon: Download, description: 'Access valuable downloadable resources.' },
  { href: '/resources/calculators', label: 'Financial Calculators', icon: CalculatorIcon, description: 'Estimate payments and affordability.' },
  { href: '/resources/roadmap', label: 'Home Buying Roadmap', icon: ListChecks, description: 'Navigate your path to homeownership.' },
  { href: '/resources/faq', label: 'FAQ', icon: HelpCircle, description: 'Find answers to common questions.' },
];

const navLinksData: NavLinkItem[] = [
  { href: '#hero', label: 'Home', icon: Home, id: 'hero' },
  { href: '#about', label: 'About Us', icon: Users, id: 'about' },
  { href: '/insights', label: 'Insights', icon: Newspaper, id: 'insightsPage' },
  {
    href: '/resources',
    label: 'Resources',
    icon: BookOpen,
    id: 'resourcesPage', 
    subItems: resourceSubItems
  },
  { href: '#testimonials', label: 'Testimonials', icon: Star, id: 'testimonials' },
  { href: '#contact', label: 'Contact', icon: MessageSquare, id: 'contact' },
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
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-primary-foreground" />
          <span className="font-headline text-2xl font-bold text-primary-foreground">MaxWealth PS</span>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinksData.map((link) => {
                const isResourcesLink = link.label === 'Resources';
                const isActive =
                  (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                  (!link.href.startsWith('#') && (isResourcesLink ? pathname.startsWith(link.href) : pathname === link.href));

                if (link.subItems) { // This is the "Resources" item
                  return (
                    <NavigationMenuItem key={link.label}>
                      <Link href={link.href} passHref legacyBehavior={false} asChild>
                        <NavigationMenuTrigger
                          className={cn(navigationMenuTriggerStyle(),
                            "bg-transparent text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                            isMounted && isActive && "text-primary-foreground font-semibold bg-primary-foreground/10"
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
                              className={isMounted && pathname.startsWith(subItem.href) ? "bg-primary-foreground/10 text-primary-foreground" : ""}
                            >
                              {subItem.description || ""}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else { // For simple links (no subItems)
                  return (
                    <NavigationMenuItem key={link.label}>
                      <Link href={getLinkHref(link.href)} passHref legacyBehavior={false} asChild>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(),
                             "bg-transparent text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                             isMounted && isActive ? "text-primary-foreground font-semibold bg-primary-foreground/10" : "text-primary-foreground/70 hover:text-primary-foreground"
                          )}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:ring-primary-foreground"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-primary text-primary-foreground">
                <div className="flex flex-col space-y-1 p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Briefcase className="h-7 w-7 text-primary-foreground" />
                    <span className="font-headline text-xl font-bold text-primary-foreground">MaxWealth PS</span>
                  </Link>
                  {navLinksData.map((link) => {
                     const isResourcesLink = link.label === 'Resources';
                     const isActive =
                        (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                        (!link.href.startsWith('#') && (isResourcesLink ? pathname.startsWith(link.href) : pathname === link.href));

                    if (link.subItems) {
                      return (
                        <React.Fragment key={link.label}>
                           <SheetClose asChild>
                            <Link
                                href={link.href} // Main Resources link
                                className={cn(
                                "flex items-center space-x-2 rounded-md p-2 font-semibold transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                                isMounted && isActive && "bg-primary-foreground/10 text-primary-foreground"
                                )}
                            >
                                <link.icon className="h-5 w-5" />
                                <span>{link.label}</span>
                                <ChevronDown className="h-4 w-4 ml-auto opacity-70" />
                            </Link>
                           </SheetClose>
                          <div className="flex flex-col space-y-1 pl-6">
                            {link.subItems.map(subItem => {
                              const isSubItemActive = isMounted && pathname.startsWith(subItem.href);
                              return (
                                <SheetClose key={subItem.label} asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "flex items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                                      isSubItemActive ? "bg-primary-foreground/10 text-primary-foreground font-medium" : "text-primary-foreground/80"
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
                            "flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                            isMounted && isActive ? "bg-primary-foreground/10 text-primary-foreground font-semibold" : "text-primary-foreground/80"
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
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          ref={ref} 
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground",
            className
          )}
          {...props} 
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-primary-foreground/70">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
