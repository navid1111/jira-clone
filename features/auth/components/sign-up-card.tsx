import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
const SignUpCard = () => {
  return (
    <Card className=" w-1/3 h-full md:w-[486 px] border-2 shadow-xl m-24 ">
      <CardHeader className=" flex p-7">
        <CardTitle className=" text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up you are agreeing to our{' '}
          <span className=" text-blue-700"> Privacy policy</span>
        </CardDescription>
        {/* <p className=" text-xs">Make your projects on time</p> */}
      </CardHeader>
      <div className="px-7 mb-2"></div>
      <CardContent className="p-7">
        <form className=" space-y-4">
          <Input
            required
            type="name"
            value={''}
            onChange={() => {}}
            placeholder="enter your username"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={''}
            onChange={() => {}}
            placeholder="enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={''}
            onChange={() => {}}
            placeholder="enter password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button size="lg" disabled={false} className=" w-full">
            LogIn
          </Button>
        </form>
      </CardContent>
      <div className="  mb-2 ">
        <DottedSeparator />
      </div>
      <CardContent className=" p-7 flex flex-col gap-y-4">
        <Button variant="secondary">
          <FcGoogle />
          LogIn with Google
        </Button>
        <Button variant="secondary">
          {' '}
          <SiGithub />
          LogIn with Github{' '}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
