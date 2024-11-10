import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'password required'),
});
export const signUpSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});
