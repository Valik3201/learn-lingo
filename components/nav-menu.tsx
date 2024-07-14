"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "./ui/button";
import { LogoIcon } from "./icons";

export function NavMenu() {
  const { user, loading } = useAuthStore();

  return (
    <nav className="grid md:col-span-2 md:grid-cols-2 items-center">
      <Link href="/" className="flex items-center gap-2 font-medium w-fit">
        <LogoIcon className="mr-2" />
        LearnLingo
      </Link>

      <div className="hidden md:flex justify-self-center gap-2">
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
  );
}
