'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AuthLayOutProps {
  children: React.ReactNode;
}

const AuthLayOut = ({ children }: AuthLayOutProps) => {
  const pathname = usePathname();
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className=" flex justify-between items-center">
          <Image src="\logoipsum-296.svg" height={25} width={40} alt="logo" />

          <Button asChild variant="secondary">
            <Link href={pathname === '/sign-in' ? '/sign-up' : '/sign-in'}>
              {pathname === '/sign-in' ? 'SignUp' : 'LogIn'}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md: pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayOut;
