"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

import { useForm as useFormSpree } from "@formspree/react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Must be a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  // react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Formspree hook
  const [state, handleSubmitFormspree] = useFormSpree("xgvlzkrn");

  // Our submit handler just calls Formspree
  const onSubmit = (values: ContactFormValues) => {
    handleSubmitFormspree(values);
    form.reset(); // optional: reset form after submission
  };

  return (
    <Card className="dark bg-secondary mt-8 max-w-xl mx-auto text-white/80">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6 px-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" className="bg-white/10" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" className="bg-white/10" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How can we help?" className="h-32 resize-none bg-white/10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {state.succeeded && (
              <p className="text-green-500 text-center">Thank you! Your message has been sent.</p>
            )}
            {state.errors && (
              <p className="text-red-500 text-center">Oops! There was an error submitting your message.</p>
            )}

            <div className="text-center">
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
