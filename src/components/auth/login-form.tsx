'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/brand/logo';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export function LoginForm() {
  const router = useRouter();

  // 1) Hooks que deben ejecutarse SIEMPRE en el mismo orden
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 2)
  if (!mounted) return null;

  const handleDemoLogin = () => {
    form.setValue('email', 'demo@lasflores.com');
    form.setValue('password', 'Demo123!');
  };

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/loading');
    }, 500);
  };

  return (
    <main className="min-h-screen grid place-items-center bg-[#E9F2D3]">
      <Card className="w-[440px] shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-3">
            <Logo size={56} priority />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Las Flores</CardTitle>
          <CardDescription>Enter your credentials to access the flower catalog.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" autoComplete="off">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="name@example.com"
                        disabled={isLoading}
                        autoComplete="off"
                        data-lpignore="true"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="••••••••"
                        disabled={isLoading}
                        autoComplete="new-password"
                        data-lpignore="true"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Logging In...' : 'Login'}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={handleDemoLogin} disabled={isLoading}>
            Demo Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
