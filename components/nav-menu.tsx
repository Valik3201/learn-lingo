import Link from "next/link";
import { Button } from "./ui/button";
import { LogoIcon } from "./icons";
import { LoginDialog } from "./login-dialog";
import { RegisterDialog } from "./register-dialog";

export function NavMenu() {
  return (
    <header className="grid grid-cols-3 px-16 py-5">
      <nav className="col-span-2 grid grid-cols-2 items-center">
        <Link href="/" className="flex items-center gap-2 font-medium w-fit">
          <LogoIcon className="mr-2" />
          LearnLingo
        </Link>

        <div className="justify-self-center flex gap-2">
          <Button variant={"ghost"} className="text-base" asChild>
            <Link href="/">Home</Link>
          </Button>

          <Button variant={"ghost"} className="text-base" asChild>
            <Link href="/teachers">Teachers</Link>
          </Button>
        </div>
      </nav>

      <div className="justify-self-end flex items-center gap-2">
        <LoginDialog />
        <RegisterDialog />
      </div>
    </header>
  );
}
