"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "./ui/button";
import { LogoIcon } from "./icons";
import { LoginDialog } from "./login-dialog";
import { RegisterDialog } from "./register-dialog";
import { LogoutDialog } from "./logout-dialog";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { user } = useAuthStore();

  return (
    <header className="grid grid-cols-2 md:grid-cols-3 md:px-16 py-5">
      <NavMenu />
      <MobileNav />

      {user ? (
        <div className="hidden md:flex justify-self-end items-center gap-2">
          <p className="hidden lg:block font-medium mr-2">
            Hello, {user.displayName}
          </p>
          <LogoutDialog />
        </div>
      ) : (
        <div className="hidden md:flex justify-self-end items-center gap-2">
          <LoginDialog />
          <RegisterDialog />
        </div>
      )}
    </header>
  );
}
