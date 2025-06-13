
"use client";

import Image from 'next/image';
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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters."}),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch & Visit Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or ready to start your journey to homeownership? Contact us today! We're conveniently located to serve you better. Drop by for a consultation or get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Card 1: Send Us a Message */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about mortgages" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us more about your needs..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-xs text-muted-foreground">
                    reCAPTCHA placeholder: This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg transition-shadow" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Card 2: Contact Information + Map */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-accent" />
                <p className="text-muted-foreground allow-interaction">123 Finance Avenue, Suite 400, Prosperity City, FS 54321</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accent" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors allow-interaction">(123) 456-7890</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:info@maxwealthps.com" className="text-muted-foreground hover:text-primary transition-colors allow-interaction">info@maxwealthps.com</a>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md aspect-video">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="Map showing office location"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                  data-ai-hint="city map"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Card 3: Business Hours */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM (By Appointment)</p>
              <p><strong>Sunday:</strong> Closed</p>
            </CardContent>
          </Card>

          {/* Card 4: Getting to Our Office */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Getting to Our Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-primary mb-1">Accessibility & Parking</h4>
                <p>Our office is easily accessible by public transport and has ample parking available. We are located in the heart of the financial district, near major landmarks.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Appointments</h4>
                <p>We recommend booking an appointment in advance to ensure our advisors can dedicate ample time to your needs.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
