
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BadgeCheck, DollarSign, Edit, Mail, Phone, UserCheck, Percent, Briefcase } from "lucide-react";
import AnimatedSection from '@/components/layout/animated-section';

const formSchema = z.object({
  buyingLocation: z.string().min(2, { message: "Please specify your desired buying location." }),
  helpNeeded: z.string().min(10, { message: "Please tell us a bit more about how we can help." }),
  budget: z.string().min(1, { message: "Please provide an approximate budget." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  number: z.string().min(5, { message: "Please enter a valid phone number." }), // Basic validation
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const socialMediaPlaceholders = [
  { id: 'sm1', hint: 'social media graphic' },
  { id: 'sm2', hint: 'social media post' },
  { id: 'sm3', hint: 'social media icon' },
  { id: 'sm4', hint: 'social media example' },
  { id: 'sm5', hint: 'social media design' },
];

const memberLogos = [
  { id: 'ml1', hint: 'association logo' },
  { id: 'ml2', hint: 'industry body' },
  { id: 'ml3', hint: 'certification logo' },
  { id: 'ml4', hint: 'partner logo' },
  { id: 'ml5', hint: 'accreditation seal' },
];

export default function FeesExplainedPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyingLocation: "",
      helpNeeded: "",
      budget: "",
      name: "",
      number: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Strategy Call Request:", values);
    toast({
      title: "Strategy Call Booked!",
      description: "Thank you! We've received your request and will be in touch shortly to confirm your 30-minute chat.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <AnimatedSection>
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link href="/about/our-team" passHref>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Our Team
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-50">
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <DollarSign className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Fee's Explained
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Ready to discuss finding and buying your next property with the help of an experienced buyers agent? Below is a break down of our fee structure.
            </p>
          </header>
        </AnimatedSection>

        <AnimatedSection delay="delay-100">
          <Card className="max-w-3xl mx-auto shadow-lg bg-card mb-12 md:mb-16">
            <CardContent className="p-6 md:p-10 space-y-4">
              <p className="text-muted-foreground font-body">
                We charge an initial engagement fee of <strong className="text-primary">$2,000 (plus GST)</strong> when you appoint us as your buyer’s agent. This secures our dedicated services to begin your property search and strategic planning.
              </p>
              <p className="text-muted-foreground font-body">
                Upon successful acquisition of your property, when everything is done and dusted, we charge a success fee. This is calculated as <strong className="text-primary">1.82% (plus GST)</strong> of the property purchase price, minus your initial engagement fee.
              </p>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-md">
                <p className="text-sm text-primary font-semibold font-body">
                  *Please Note: Our fee structure may vary after our initial consultation. Depending on your specific needs, property search complexity, and budget, we may mutually agree to a fixed price fee or a capped price fee, particularly if your budget exceeds $2 million. We’ll always strive to reach a fee structure that provides our clients with exceptional value and transparency.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay="delay-150">
          <Card className="max-w-4xl mx-auto shadow-xl bg-primary text-primary-foreground mb-12 md:mb-16 rounded-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-2/5 relative min-h-[300px] md:min-h-0 md:h-auto">
                <Image
                  src="https://placehold.co/400x500.png"
                  alt="Jacqueline Dwyer"
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint="professional woman portrait"
                  className="md:rounded-l-xl"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10">
                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-3">Your Next Step… Book a Call with Jac.</h2>
                <p className="font-body text-primary-foreground/80 mb-6">
                  For more details on how I can help you find, negotiate and secure your next property… Please complete the form on this page to book a free (no obligation) 30-minute chat with myself. Jac x
                </p>
                <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" onClick={() => document.getElementById('feesContactForm')?.scrollIntoView({ behavior: 'smooth' })}>
                  Book My Free Chat
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200">
          <Card className="max-w-3xl mx-auto shadow-lg bg-card mb-12 md:mb-16">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <BadgeCheck className="mr-3 h-7 w-7 text-green-500" /> Work with a Highly Qualified Buyers Agent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body mb-4">My Licenses & national accreditations:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 font-body">
                <li>QLD Real Estate Licence 4284240</li>
                <li>NSW Real Estate Licence 20228602</li>
                <li>QLD Valuers Registration Board No. 4036</li>
                <li>Certified Practicing Valuer, The Australian Property Institute 85656</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay="delay-250" id="feesContactForm">
          <Card className="max-w-3xl mx-auto shadow-xl bg-card">
            <CardHeader className="text-center">
              <div className="inline-block p-3 bg-accent/10 rounded-full mb-3">
                <Edit className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl md:text-3xl text-primary">Book Your Free 30-Minute Strategy Call Now</CardTitle>
              <CardDescription className="font-body">
                Congratulations! You’ve made a wise choice. Your property search just became a whole lot easier!
                Your next step… Drop your details here to arrange a free 30-minute phone chat. That way you can decide if we’re a good fit.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="buyingLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Where do you want to buy?*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Gold Coast, Brisbane CBD, Specific Suburb" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="helpNeeded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us how we can help you...*</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Investment property, first home, downsizing..." {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approx. Budget?*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select your approximate budget" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="<500k">&lt; $500,000</SelectItem>
                                <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                                <SelectItem value="1m-1.5m">$1,000,000 - $1,500,000</SelectItem>
                                <SelectItem value="1.5m-2m">$1,500,000 - $2,000,000</SelectItem>
                                <SelectItem value="2m+">$2,000,000 +</SelectItem>
                                <SelectItem value="discuss">Prefer to discuss</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter your name..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Number*</FormLabel>
                            <FormControl>
                            <Input type="tel" placeholder="Enter your number..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Booking..." : "Yes, Book My Chat with MaxWealth PS Now"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">*Average response time is 45 minutes. Your information is secure.</p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-300">
          <div className="mt-12 md:mt-20 text-center">
            <h3 className="font-headline text-2xl font-semibold text-primary mb-6">Here's What Our Clients Say About Us...</h3>
             {/* Placeholder for testimonials or link to testimonials page */}
            <Button variant="outline" asChild>
                <Link href="/#testimonials">View Client Testimonials</Link>
            </Button>
            
            <div className="mt-10 mb-10">
              <h4 className="font-headline text-xl text-primary mb-4">MaxWealth PS Social Media Highlights</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
                {socialMediaPlaceholders.map(placeholder => (
                  <div key={placeholder.id} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Image src={`https://placehold.co/150x150.png`} alt="Social media placeholder" width={100} height={100} data-ai-hint={placeholder.hint} className="rounded"/>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-headline text-xl text-primary mb-6">We’re Proud Members Of:</h4>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {memberLogos.map(logo => (
                    <div key={logo.id} className="opacity-70 hover:opacity-100 transition-opacity">
                         <Image src={`https://placehold.co/120x60.png`} alt="Member logo placeholder" width={120} height={60} data-ai-hint={logo.hint} style={{objectFit: 'contain'}} />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
