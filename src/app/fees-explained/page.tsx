
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
import { ArrowLeft, BadgeCheck, DollarSign, Mail, Phone, UserCheck, Percent, Briefcase, Info, Loader2 } from "lucide-react";
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import { memberLogos } from '@/lib/data';
import FeeStructureSection from '@/components/sections/fee-structure-section';


const formSchema = z.object({
  buyingLocation: z.string().min(2, { message: "Please specify your desired buying location." }),
  helpNeeded: z.string().min(10, { message: "Please tell us a bit more about how we can help." }),
  budget: z.string().min(1, { message: "Please provide an approximate budget." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  number: z.string().min(5, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Strategy Call Request:", values, "// In a real app, this data would be processed and emailed to info@maxwealthps.com");
    toast({
      title: "Strategy Call Booked!",
      description: "Thank you! Your request has been received and would typically be directed to info@maxwealthps.com.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-8 md:py-16">
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

          <AnimatedSection delay="delay-150" id="feesContactFormContainer">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
                <div className="md:col-span-2 space-y-8">
                  <div className="text-center md:text-left">
                    <Image
                      src="https://placehold.co/200x200.png"
                      alt="Jacqueline Dwyer"
                      width={160}
                      height={160}
                      className="rounded-full mx-auto md:mx-0 mb-6 shadow-lg"
                      data-ai-hint="professional woman portrait"
                    />
                    <h2 className="font-headline text-2xl text-primary mb-3">Your Next Step…</h2>
                    <p className="font-body text-muted-foreground mb-4">
                      For more details on how I can help you find, negotiate and secure your next property… Please complete the form on this page to book a free (no obligation) <strong className="text-primary">30-minute chat with myself. Jac x</strong>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-xl text-primary mb-3 flex items-center">
                      <BadgeCheck className="mr-2 h-6 w-6 text-green-500" /> Work with a Highly Qualified Buyers Agent
                    </h3>
                    <p className="text-muted-foreground font-body mb-2">My Licenses & national accreditations:</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {[
                        'QLD Real Estate Licence 4284240',
                        'NSW Real Estate Licence 20228602',
                        'QLD Valuers Registration Board No. 4036',
                        'Certified Practicing Valuer, The Australian Property Institute 85656'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Info className="mr-2 h-4 w-4 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <Card className="shadow-xl bg-card overflow-hidden rounded-lg">
                    <CardHeader className="text-center bg-primary text-primary-foreground p-6 md:p-8">
                      <h2 className="font-headline text-2xl md:text-3xl font-bold">Book Your Free 30-Minute Strategy Call Now...</h2>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 bg-muted/20">
                      <p className="text-muted-foreground text-center mb-2 font-body">
                        Congratulations! You’ve made a wise choice. Your property search just became a whole lot easier!
                      </p>
                      <p className="text-muted-foreground text-center mb-6 font-body">
                        <strong className="text-primary">Your next step…</strong> Drop your details here to arrange a free 30-minute phone chat. That way you can decide if we’re a good fit.
                      </p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="buyingLocation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary">Where do you want to buy?*</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Gold Coast, Brisbane CBD, Specific Suburb" {...field} className="bg-background" />
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
                                <FormLabel className="text-primary">Tell us how we can help you...*</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="e.g., Investment property, first home, downsizing..." {...field} rows={3} className="bg-background" />
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
                                <FormLabel className="text-primary">Approx. Budget?*</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background">
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
                                    <FormLabel className="text-primary">Name*</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Enter your name..." {...field} className="bg-background" />
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
                                    <FormLabel className="text-primary">Number*</FormLabel>
                                    <FormControl>
                                    <Input type="tel" placeholder="Enter your number..." {...field} className="bg-background" />
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
                                <FormLabel className="text-primary">Email*</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Enter your email..." {...field} className="bg-background" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="text-sm text-muted-foreground p-3 border rounded-md bg-background flex items-center justify-between">
                            <span>I'm not a robot</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="3" fill="white">reCAPTCHA</text>
                            </svg>
                          </div>
                          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? ( <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking... </>) : "Yes, Book My Chat with MaxWealth PS Now"}
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">*Average response time is 45 minutes. Your information is secure.</p>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <FeeStructureSection />

          <AnimatedSection delay="delay-300">
            <div className="mt-12 md:mt-20 text-center">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-6">Here's What Our Clients Say About Us...</h3>
              <Button variant="outline" asChild>
                  <Link href="/#testimonials">View Client Testimonials</Link>
              </Button>
            </div>

            <div className="mt-12 md:mt-16">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
                <h4 className="font-headline text-xl text-primary flex-shrink-0 md:mb-0">
                  We’re Proud Members Of:
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-4">
                  {memberLogos.map(logo => (
                      <div key={logo.id} className="opacity-80 hover:opacity-100 transition-opacity">
                          <Image src={`https://placehold.co/120x50.png`} alt="Member logo placeholder" width={120} height={50} data-ai-hint={logo.hint} style={{objectFit: 'contain'}} />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
