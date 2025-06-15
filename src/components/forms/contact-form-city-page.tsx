
"use client";

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
import { Loader2 } from "lucide-react";

interface ContactFormCityPageProps {
  cityName: string;
}

const formSchemaCityPage = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number (at least 7 digits)." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

export default function ContactFormCityPage({ cityName }: ContactFormCityPageProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaCityPage>>({
    resolver: zodResolver(formSchemaCityPage),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in properties in ${cityName}. Please tell me more.`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaCityPage>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("City Page Form Submitted:", values);
    toast({
      title: "Inquiry Sent!",
      description: `Thank you for your interest in ${cityName}. We'll be in touch shortly.`,
      variant: "default",
    });
    form.reset({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in properties in ${cityName}. Please tell me more.`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Full Name*</FormLabel>
              <FormControl>
                <Input placeholder="Your Full Name" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
              <FormLabel className="text-sm">Email Address*</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your Phone Number" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
              <FormLabel className="text-sm">Your Message / Inquiry*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Tell us more about your interest in ${cityName}...`}
                  {...field}
                  rows={3}
                  disabled={form.formState.isSubmitting}
                  className="bg-background/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            `Send Inquiry`
          )}
        </Button>
      </form>
    </Form>
  );
}
