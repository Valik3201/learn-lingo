"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "./ui/button";
import { LogoIcon } from "./icons";
import { LoginDialog } from "./login-dialog";
import { RegisterDialog } from "./register-dialog";
import { FirebaseError } from "firebase/app";

export function NavMenu() {
  const { user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err as FirebaseError);
    }
  };

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

          {user && (
            <Button variant={"ghost"} className="text-base" asChild>
              <Link href="/favorites">Favorites</Link>
            </Button>
          )}
        </div>
      </nav>

      {user ? (
        <div className="justify-self-end flex items-center gap-2">
          <p className="font-medium mr-2">Hello, {user.displayName}</p>
          <Button variant="destructive" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      ) : (
        <div className="justify-self-end flex items-center gap-2">
          <LoginDialog />
          <RegisterDialog />
        </div>
      )}
    </header>
  );
}
