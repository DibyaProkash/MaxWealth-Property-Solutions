
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Home, Users, Star, MessageSquare, Briefcase, CalculatorIcon, HelpCircle, BookOpen, BrainCircuit, Download, ListChecks, ChevronDown, ArrowLeft, TrendingUp, NewspaperIcon, Building, Workflow, Search as SearchIconLucide, ConciergeBell } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge'; 
import { aboutUsSubItems } from '@/lib/data';

interface NavLinkItem {
  href: string;
  label: string;
  icon: LucideIcon;
  id?: string;
  subItems?: NavLinkItem[];
  description?: string;
}

const navLinksData: NavLinkItem[] = [
  { href: '#hero', label: 'Home', icon: Home, id: 'hero' },
  {
    href: '/about', 
    label: 'About Us',
    icon: Building,
    id: 'aboutPage', 
    subItems: aboutUsSubItems,
    description: "Learn more about our company and team."
  },
  { href: '/process-and-services', label: 'Process & Services', icon: ConciergeBell, id: 'processServicesPage' },
  { href: '/media', label: 'Media', icon: NewspaperIcon, id: 'mediaPage' },
  { href: '/testimonials', label: 'Testimonials', icon: Star, id: 'testimonialsPage' },
  { href: '/faq', label: 'FAQ', icon: HelpCircle, id: 'faqPage' },
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
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white/40 backdrop-blur-lg shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo/logo.png" alt="MaxWealth PS Logo" width={40} height={40} />
          <span className="font-headline text-lg font-bold text-primary hidden sm:inline-block">MaxWealth Property Services</span>
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
                        <ul className="grid w-[300px] gap-3 p-4">
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
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-1 p-4">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                      <Image src="/logo/logo.png" alt="MaxWealth PS Logo" width={40} height={40} />
                      <span className="font-headline text-lg font-bold text-sidebar-primary">MaxWealth Property Services</span>
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
