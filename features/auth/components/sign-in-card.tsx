'use client';

import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-1/3 h-full md:w-[486px] border-2 shadow-xl m-24">
      <CardHeader className="flex p-7">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <p className="text-xs">Make your projects on time</p>
      </CardHeader>
      <div className="px-7 mb-2"></div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                    />
                  </FormControl>
                  <FormMessage className=" text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage className=" text-red-600" />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary">
          <FcGoogle className="mr-2" />
          Log In with Google
        </Button>
        <Button variant="secondary">
          <SiGithub className="mr-2" />
          Log In with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
