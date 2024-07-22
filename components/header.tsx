"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { LoginDialog } from "./login-dialog";
import { RegisterDialog } from "./register-dialog";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { UserMenu } from "./user-menu";

export function Header() {
  const { user, loading } = useAuthStore();

  return (
    <header className="grid grid-cols-2 md:grid-cols-3 md:px-16 py-5">
      <NavMenu />
      <MobileNav />

      {!loading && user ? (
        <div className="hidden md:flex justify-self-end items-center gap-2">
          <UserMenu name={user.displayName!} />
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
