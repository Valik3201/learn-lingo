"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "./ui/button";
import { LogoIcon } from "./icons";

export function NavMenu() {
  const pathname = usePathname();
  const { user, loading } = useAuthStore();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/teachers", label: "Teachers" },
    { href: "/favorites", label: "Favorites", condition: !loading && user },
  ];

  return (
    <nav className="grid md:col-span-2 md:grid-cols-2 items-center">
      <Link href="/" className="flex items-center gap-2 font-medium w-fit">
        <LogoIcon className="mr-2" />
        LearnLingo
      </Link>

      <div className="hidden md:flex justify-self-center gap-2">
        {navLinks.map(({ href, label, condition = true }) =>
          condition ? (
            <Button
              key={href}
              variant={"ghost"}
              className={`text-base ${
                pathname === href ? "" : "text-[#8A8A89]"
              }`}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ) : null
        )}
      </div>
    </nav>
  );
}
