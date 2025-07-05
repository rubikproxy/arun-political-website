"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { summarizePolicy } from "@/ai/flows/summarize-policy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const summarizeFormSchema = z.object({
  policyText: z.string().min(50, {
    message: "Policy text must be at least 50 characters.",
  }).max(5000, {
    message: "Policy text must not be longer than 5000 characters."
  }),
});

type SummarizeFormValues = z.infer<typeof summarizeFormSchema>;

export default function PolicySummarizer() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<SummarizeFormValues>({
    resolver: zodResolver(summarizeFormSchema),
    defaultValues: {
      policyText: "",
    },
  });

  async function onSubmit(values: SummarizeFormValues) {
    setIsLoading(true);
    setSummary("");
    try {
      const result = await summarizePolicy(values);
      setSummary(result.summary);
    } catch (error) {
      console.error("Error summarizing policy:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to summarize the policy. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>AI Policy Summarizer</CardTitle>
            <CardDescription>
              Paste a political statement or policy below to get a simplified summary.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="policyText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Policy Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the policy text here..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Summarize
            </Button>
          </CardFooter>
        </form>
      </Form>
      
      {isLoading && (
        <CardContent>
          <div className="flex items-center space-x-4">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p>Analyzing and summarizing the text...</p>
          </div>
        </CardContent>
      )}

      {summary && !isLoading && (
        <CardContent>
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc space-y-2 pl-5">
                        {summary.split('\n').filter(line => line.trim().length > 0 && (line.includes('*') || line.includes('-'))).map((item, index) => (
                            <li key={index}>{item.replace(/[-*]\s*/, '')}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
      )}
    </Card>
  );
}
