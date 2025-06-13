
import { Briefcase, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">MaxWealth PS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in financial planning for home buying.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#content" className="hover:text-primary transition-colors">Insights</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3 text-primary">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/40">
          <p>&copy; {currentYear} MaxWealth PS. All rights reserved.</p>
          <p className="mt-1">Designed by Dibya Prokash Sarkar.</p>
        </div>
      </div>
    </footer>
  );
}
