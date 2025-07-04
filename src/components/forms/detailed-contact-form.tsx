
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { buyerTypesData } from "@/lib/data";
import ReCAPTCHA from "react-google-recaptcha";

const detailedContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  purchaseLocation: z.string().min(2, { message: "Please specify your desired purchase location." }),
  buyerType: z.string().min(1, { message: "Please select which best describes you." }),
  propertySearchDetails: z.string().min(10, { message: "Details must be at least 10 characters." })
    .max(500, { message: "Details cannot exceed 500 characters." }),
});

export default function DetailedContactForm() {
  const { toast } = useToast();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const form = useForm<z.infer<typeof detailedContactFormSchema>>({
    resolver: zodResolver(detailedContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      purchaseLocation: "",
      buyerType: "",
      propertySearchDetails: "",
    },
  });

  async function onSubmit(values: z.infer<typeof detailedContactFormSchema>) {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log("Detailed Contact Form Submitted:", values, "// In a real app, this data would be processed and emailed to info@maxwealthps.com");
    toast({
      title: "Consultation Request Sent!",
      description: "Thank you! Your request has been received and would typically be directed to info@maxwealthps.com.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">First Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} disabled={form.formState.isSubmitting} className="bg-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} disabled={form.formState.isSubmitting} className="bg-input" />
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
              <FormLabel className="text-sm text-muted-foreground">Email*</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email address" {...field} disabled={form.formState.isSubmitting} className="bg-input"/>
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
              <FormLabel className="text-sm text-muted-foreground">Phone*</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter phone number" {...field} disabled={form.formState.isSubmitting} className="bg-input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purchaseLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">Where are you looking to purchase?*</FormLabel>
              <FormControl>
                 <Input placeholder="e.g., Sydney, Gold Coast, Specific Suburb" {...field} className="bg-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="buyerType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">Which best describes you?*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} disabled={form.formState.isSubmitting}>
                <FormControl>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {buyerTypesData.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertySearchDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">Tell us about your property search (timeline, budget & location preferences)*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="E.g., Timeline: 3-6 months, Budget: approx $800k, Location: family-friendly suburb with good schools..."
                  {...field}
                  rows={4}
                  disabled={form.formState.isSubmitting}
                  className="bg-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center py-2">
            {siteKey ? (
              <ReCAPTCHA sitekey={siteKey} onChange={() => {}} />
            ) : (
              <p className="text-destructive text-xs">reCAPTCHA Site Key not configured.</p>
            )}
        </div>
        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md py-6 text-lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get In Touch"
          )}
        </Button>
      </form>
    </Form>
  );
}
