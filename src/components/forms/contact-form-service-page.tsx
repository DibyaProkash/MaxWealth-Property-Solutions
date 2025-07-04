
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
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormServicePageProps {
  serviceName: string;
}

const buyerTypes = [
  { value: "first_home_buyer", label: "First Home Buyer" },
  { value: "investor", label: "Investor" },
  { value: "upsizing", label: "Upsizing" },
  { value: "downsizing", label: "Downsizing" },
  { value: "relocating", label: "Relocating" },
  { value: "other", label: "Other" },
];

const formSchemaServicePage = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  purchaseLocation: z.string().min(2, { message: "Please specify your desired purchase location." }),
  buyerType: z.string().min(1, { message: "Please select which best describes you." }),
  propertySearchDetails: z.string().min(10, { message: "Details must be at least 10 characters." })
    .max(500, { message: "Details cannot exceed 500 characters." }),
});

export default function ContactFormServicePage({ serviceName }: ContactFormServicePageProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaServicePage>>({
    resolver: zodResolver(formSchemaServicePage),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      purchaseLocation: "",
      buyerType: "",
      propertySearchDetails: `I'm interested in your ${serviceName} services. My timeline is... My budget is approx...`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaServicePage>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Service Page Form Submitted:", values, "// In a real app, this data would be processed and emailed to info@maxwealthps.com");
    toast({
      title: "Consultation Request Sent!",
      description: `Thank you! Your request regarding our ${serviceName} services has been noted and would typically be directed to info@maxwealthps.com.`,
      variant: "default",
    });
    form.reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      purchaseLocation: "",
      buyerType: "",
      propertySearchDetails: `I'm interested in your ${serviceName} services. My timeline is... My budget is approx...`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">First Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Your First Name" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
                <FormLabel className="text-sm">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Last Name" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
              <FormLabel className="text-sm">Email*</FormLabel>
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
              <FormLabel className="text-sm">Phone*</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your Phone Number" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
              <FormLabel className="text-sm">Where are you looking to purchase?*</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Sydney, Melbourne Northern Suburbs" {...field} disabled={form.formState.isSubmitting} className="bg-background/70"/>
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
              <FormLabel className="text-sm">Which best describes you?*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} disabled={form.formState.isSubmitting}>
                <FormControl>
                  <SelectTrigger className="bg-background/70">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {buyerTypes.map(type => (
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
              <FormLabel className="text-sm">Tell us about your property search (timeline, budget & location preferences)*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="E.g., Looking to buy in 6 months, budget up to $800k, prefer suburbs with good schools..."
                  {...field}
                  rows={4}
                  disabled={form.formState.isSubmitting}
                  className="bg-background/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-xs text-muted-foreground">
            We find our clients the ideal property on average within 30 to 60 days of engagement.
        </div>
        <div className="flex justify-center py-2">
            <ReCAPTCHA
            sitekey="6LefOXcrAAAAAALMrYKSf9_u-rMSSTbqP3makSPG"
            onChange={() => {}}
            />
        </div>
        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            `Request Free Consultation`
          )}
        </Button>
      </form>
    </Form>
  );
}
