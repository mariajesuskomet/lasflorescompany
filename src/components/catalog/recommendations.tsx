'use client';

import { getPersonalizedFlowerRecommendations } from '@/ai/flows/personalized-flower-recommendations';
import { products } from '@/lib/data';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const popularFlowers = products.slice(0, 10).map((p) => p.name);

export function Recommendations() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getPersonalizedFlowerRecommendations({ popularFlowers });
      setRecommendations(result.recommendations);
    } catch (err) {
      setError('Sorry, we couldn\'t fetch recommendations at this time.');
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <Card className="text-center w-full max-w-2xl mx-auto my-10 p-8 border-dashed">
      <CardHeader>
        <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
            <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="mt-4">No Flowers Found</CardTitle>
        <CardDescription>
          Your search didn't return any results. Would you like some personalized recommendations based on popular items?
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isLoading && recommendations.length === 0 && (
          <Button onClick={handleGetRecommendations}>
            <Sparkles className="mr-2 h-4 w-4" />
            Get Recommendations
          </Button>
        )}
        {isLoading && (
          <div className="space-y-2">
            <p className='text-sm text-muted-foreground mb-4'>Thinking of the perfect bouquet...</p>
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        )}
        {error && <p className="text-destructive mt-4">{error}</p>}
        {recommendations.length > 0 && (
          <div className="text-left">
            <h4 className="font-semibold mb-2 text-center">You might like these:</h4>
            <ul className="columns-2 list-inside text-muted-foreground list-none space-y-1">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-accent shrink-0"/> 
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
