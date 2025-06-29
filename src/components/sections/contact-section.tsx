
"use client";

import Image from 'next/image'; // Added Image import
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
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Homepage Contact Form Submitted:", values, "// In a real app, this data would be processed and emailed to info@maxwealthps.com");
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. Your message has been noted and would typically be directed to info@maxwealthps.com.",
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
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
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
                          <Input placeholder="John Doe" {...field} disabled={form.formState.isSubmitting} />
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
                          <Input type="email" placeholder="you@example.com" {...field} disabled={form.formState.isSubmitting} />
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
                          <Input placeholder="Inquiry about mortgages" {...field} disabled={form.formState.isSubmitting} />
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
                          <Textarea placeholder="Tell us more about your needs..." {...field} rows={5} disabled={form.formState.isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-xs text-muted-foreground">
                    reCAPTCHA placeholder: This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg transition-shadow bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? ( <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> ) : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <p className="text-muted-foreground">Brisbane, Australia</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-accent" />
                  <a href="tel:+61432341008" className="text-muted-foreground hover:text-primary transition-colors">+61432341008</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <a href="mailto:info@maxwealthps.com" className="text-muted-foreground hover:text-primary transition-colors">info@maxwealthps.com</a>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md aspect-video">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9426.127535344827!2d153.02308776305853!3d-27.466444148579136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f65704ffab%3A0x8e6de954790d7e7c!2sWoolworths%20Metro%20Spring%20Hill!5e0!3m2!1sen!2sca!4v1751235219947!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map of Office Location"
                  ></iframe>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-1">Our head office location in Brisbane.</p>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-headline text-lg font-semibold text-primary mb-2">Business Hours</h4>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM (By Appointment)</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
