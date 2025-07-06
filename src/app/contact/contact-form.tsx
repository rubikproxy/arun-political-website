"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

type FormSubmissionState = {
  message: string;
  success: boolean | null;
  isSubmitting: boolean;
};

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    message: "",
    success: null,
    isSubmitting: false,
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setSubmissionState({ message: "", success: null, isSubmitting: true });

    try {
      const response = await fetch("https://formspree.io/f/xblyezna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionState({
          message: "Thank you for your message! We will get back to you soon.",
          success: true,
          isSubmitting: false,
        });
        form.reset();
      } else {
        const result = await response.json();
        const errorMessage = result.errors?.map((e: any) => e.message).join(", ") || "Something went wrong. Please try again.";
        setSubmissionState({ message: errorMessage, success: false, isSubmitting: false });
      }
    } catch (error) {
      setSubmissionState({
        message: "Something went wrong. Please try again later.",
        success: false,
        isSubmitting: false,
      });
    }
  }

  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Get in Touch</CardTitle>
        <CardDescription>
          Have a question or want to get involved? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} autoComplete="name" />
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
                    <Input type="email" placeholder="your.email@example.com" {...field} autoComplete="email" />
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
                    <Textarea
                      placeholder="Tell us how we can help"
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {submissionState.message && (
              <Alert variant={submissionState.success === true ? "default" : "destructive"}>
                {submissionState.success === true ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                <AlertTitle>{submissionState.success === true ? "Success" : "Error"}</AlertTitle>
                <AlertDescription>{submissionState.message}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" disabled={submissionState.isSubmitting} className="w-full" size="lg">
              {submissionState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}