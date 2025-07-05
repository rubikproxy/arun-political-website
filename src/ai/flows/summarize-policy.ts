'use server';

/**
 * @fileOverview AI-powered policy summarization flow.
 *
 * - summarizePolicy - A function that summarizes a given political statement or policy.
 * - SummarizePolicyInput - The input type for the summarizePolicy function.
 * - SummarizePolicyOutput - The return type for the summarizePolicy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePolicyInputSchema = z.object({
  policyText: z
    .string()
    .describe('The political statement or policy text to summarize.'),
});
export type SummarizePolicyInput = z.infer<typeof SummarizePolicyInputSchema>;

const SummarizePolicyOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the political statement or policy in bullet points.'
    ),
});
export type SummarizePolicyOutput = z.infer<typeof SummarizePolicyOutputSchema>;

export async function summarizePolicy(input: SummarizePolicyInput): Promise<SummarizePolicyOutput> {
  return summarizePolicyFlow(input);
}

const summarizePolicyPrompt = ai.definePrompt({
  name: 'summarizePolicyPrompt',
  input: {schema: SummarizePolicyInputSchema},
  output: {schema: SummarizePolicyOutputSchema},
  prompt: `You are an expert in political science. Please summarize the following political statement or policy into easily digestible bullet points.

Policy Text: {{{policyText}}}

Summary:
`,
});

const summarizePolicyFlow = ai.defineFlow(
  {
    name: 'summarizePolicyFlow',
    inputSchema: SummarizePolicyInputSchema,
    outputSchema: SummarizePolicyOutputSchema,
  },
  async input => {
    const {output} = await summarizePolicyPrompt(input);
    return output!;
  }
);
