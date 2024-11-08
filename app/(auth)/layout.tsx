import { Button } from '@/components/ui/button';
import Image from 'next/image';
interface AuthLayOutProps {
  children: React.ReactNode;
}

const AuthLayOut = ({ children }: AuthLayOutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className=" flex justify-between items-center">
          <Image src="\logoipsum-296.svg" height={25} width={40} alt="logo" />

          <Button variant="secondary">SignUp</Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md: pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayOut;
