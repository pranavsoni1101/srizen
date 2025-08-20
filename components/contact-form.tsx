"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Must be a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log("Contact form submitted:", values);
    // integrate with your email handler or CRM
  }

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
                            <Textarea placeholder="How can we help?"  {...field} className="h-32 resize-none bg-white/10" />
                        {/* <Input as="textarea" placeholder="How can we help?" {...field} className="h-32 resize-none" /> */}
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <div className="text-center">
                    <Button type="submit">
                    Send Message
                    </Button>
                </div>
                </form>
            </Form>

        </CardContent>
    </Card>
  );
}
