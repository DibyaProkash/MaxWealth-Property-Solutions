
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, Users, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, BookOpen, BrainCircuit, Download, ListChecks, ChevronDown, ArrowLeft, TrendingUp, NewspaperIcon, Building, Workflow, Search as SearchIconLucide } from 'lucide-react';
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
import { usePathname, useRouter } from 'next/navigation';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge'; // Added Badge import

interface NavLinkItem {
  href: string;
  label: string;
  icon: LucideIcon;
  id?: string;
  subItems?: NavLinkItem[];
  description?: string;
}

// Data for About Us sub-menu
const aboutUsSubItems: NavLinkItem[] = [
  { href: '/about/our-company', label: 'Our Company', icon: Building, description: 'Learn about our mission, vision, and values.' },
  { href: '/about/our-team', label: 'Our Team', icon: Users, description: 'Meet the professionals behind MaxWealth PS.' },
  { href: '/about/our-services', label: 'Our Services', icon: MessageSquare, description: 'Explore the services we offer.' }, // Changed icon to MessageSquare for variety
  { href: '/about/our-process', label: 'Our Process', icon: Workflow, description: 'Discover how we help you succeed.' },
];

// Data for Resources sub-menu
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
    href: '/about', // Main link for "About Us" itself
    label: 'About Us',
    icon: Building,
    id: 'aboutPage', // ID for highlighting based on /about/*
    subItems: aboutUsSubItems,
    description: "Learn more about our company, team, and services."
  },
  { href: '/media', label: 'Media', icon: NewspaperIcon, id: 'mediaPage' },
  {
    href: '/resources', // Main link for "Resources" itself
    label: 'Resources',
    icon: BookOpen,
    id: 'resourcesPage', // ID for highlighting based on /resources/*
    subItems: localResourceSubItems,
    description: "Access tools, guides, and FAQs."
  },
  { href: '#testimonials', label: 'Testimonials', icon: Star, id: 'testimonials' },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

const homepageSectionIds = navLinksData
  .filter(link => link.id && link.href.startsWith('#'))
  .map(link => link.id as string);


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeSection = useScrollSpy({ sectionIds: homepageSectionIds, rootMargin: "-40% 0px -60% 0px" });
  const [isMounted, setIsMounted] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearchPopoverOpen, setIsSearchPopoverOpen] = React.useState(false);


  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const getLinkHref = (href: string) => {
    if (pathname === '/' || !href.startsWith('#')) {
      return href;
    }
    return `/${href}`;
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchPopoverOpen(false);
      setSearchQuery('');
    }
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchSubmit();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white/40 backdrop-blur-lg shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-7 w-7 text-foreground" />
          <span className="font-headline text-2xl font-bold text-foreground">MaxWealth PS</span>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinksData.map((link) => {
                const isCurrentPageRoot = link.id && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/')));
                const isActive =
                  (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                  (!link.href.startsWith('#') && isMounted && isCurrentPageRoot);

                if (link.subItems) {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger
                        className={cn(navigationMenuTriggerStyle(),
                          "bg-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/10 focus:bg-foreground/10 focus:text-foreground",
                          isActive && "text-foreground font-semibold bg-foreground/10"
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          <ListItem
                            key={`${link.label}-overview`}
                            title={`Explore ${link.label}`}
                            href={link.href} // Main link for the section overview
                            icon={link.icon}
                            className={isMounted && pathname === link.href ? "bg-accent/10 text-accent" : ""}
                          >
                            {link.description || `Visit the main ${link.label} page.`}
                          </ListItem>
                          {link.subItems.map((subItem) => (
                             <ListItem
                              key={subItem.label}
                              title={subItem.label}
                              href={subItem.href}
                              icon={subItem.icon}
                              className={isMounted && pathname === subItem.href ? "bg-accent/10 text-accent" : ""}
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

          <Popover open={isSearchPopoverOpen} onOpenChange={setIsSearchPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-foreground/10 hover:text-foreground focus-visible:ring-foreground"
              >
                <SearchIconLucide className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Search Site</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter keywords to search articles, pages, and more.
                  </p>
                </div>
                <Input
                  id="search-navbar"
                  placeholder="e.g. Mortgage rates..."
                  className="col-span-2 h-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                />
                <Button onClick={handleSearchSubmit} size="sm" className="w-full">
                  Search
                </Button>
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
                     const isCurrentPageRoot = link.id && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/')));
                     const isActive =
                        (link.id && link.href.startsWith('#') && activeSection === link.id && pathname === '/') ||
                        (!link.href.startsWith('#') && isMounted && isCurrentPageRoot);

                    if (link.subItems) {
                      return (
                        <React.Fragment key={link.label}>
                           <SheetClose asChild>
                            <Link
                                href={link.href} // Main link for the section overview
                                className={cn(
                                "flex items-center justify-between space-x-2 rounded-md p-2 font-semibold transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                                )}
                            >
                              <span className="flex items-center space-x-2">
                                <link.icon className="h-5 w-5" />
                                <span>{link.label}</span>
                              </span>
                            </Link>
                           </SheetClose>
                          <div className="flex flex-col space-y-1 pl-6 border-l border-sidebar-border/50 ml-2">
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
                                    {subItem.label === 'AI-Powered Tools' && (
                                      <Badge variant="outline" className="ml-auto text-[10px] px-1 py-0 text-destructive border-destructive/50 bg-transparent">BETA</Badge>
                                    )}
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5" />}
            <div className="text-sm font-medium leading-none">{title}</div>
            {title === 'AI-Powered Tools' && (
              <Badge variant="outline" className="ml-1.5 text-[10px] px-1 py-0 text-destructive border-destructive/50">BETA</Badge>
            )}
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

