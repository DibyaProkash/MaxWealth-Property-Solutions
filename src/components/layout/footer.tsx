
import Image from 'next/image';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground"> 
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo/logo.png" alt="MaxWealth PS Logo" width={32} height={32} />
              <span className="font-headline text-xl font-bold text-primary-foreground">MaxWealth Property Services</span> 
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner in financial planning for home buying.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3 text-primary-foreground">Quick Links</h3> 
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#content" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Insights</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3 text-primary-foreground">Connect With Us</h3> 
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Facebook size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Linkedin size={24} /></a>
              <a href="#" aria-label="YouTube" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Youtube size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-primary-foreground/70 pt-8 border-t border-primary-foreground/20">
          <p>&copy; {currentYear} MaxWealth Property Services. All rights reserved.</p>
          <p className="mt-1">Designed by Dibya Prokash Sarkar.</p>
        </div>
      </div>
    </footer>
  );
}
