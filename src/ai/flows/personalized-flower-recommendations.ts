// This file uses server-side code.
'use server';

/**
 * @fileOverview Provides personalized flower recommendations based on a generated list of popular flowers.
 *
 * - getPersonalizedFlowerRecommendations - A function that returns personalized flower recommendations.
 * - PersonalizedFlowerRecommendationsInput - The input type for the getPersonalizedFlowerRecommendations function.
 * - PersonalizedFlowerRecommendationsOutput - The return type for the getPersonalizedFlowerRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFlowerRecommendationsInputSchema = z.object({
  popularFlowers: z.array(z.string()).describe('A list of popular flowers.'),
});
export type PersonalizedFlowerRecommendationsInput = z.infer<typeof PersonalizedFlowerRecommendationsInputSchema>;

const PersonalizedFlowerRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of personalized flower recommendations.'),
});
export type PersonalizedFlowerRecommendationsOutput = z.infer<typeof PersonalizedFlowerRecommendationsOutputSchema>;

export async function getPersonalizedFlowerRecommendations(input: PersonalizedFlowerRecommendationsInput): Promise<PersonalizedFlowerRecommendationsOutput> {
  return personalizedFlowerRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFlowerRecommendationsPrompt',
  input: {schema: PersonalizedFlowerRecommendationsInputSchema},
  output: {schema: PersonalizedFlowerRecommendationsOutputSchema},
  prompt: `You are a flower recommendation expert. Given a list of popular flowers, you will provide a list of personalized flower recommendations.

Popular Flowers: {{{popularFlowers}}}

Recommendations:`,
});

const personalizedFlowerRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedFlowerRecommendationsFlow',
    inputSchema: PersonalizedFlowerRecommendationsInputSchema,
    outputSchema: PersonalizedFlowerRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
