"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { LogoutDialog } from "@/components/logout-dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoIcon, HamburgerIcon } from "./icons";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuthStore();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="justify-self-end w-fit mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerIcon />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-6">
        <MobileLink
          href="/"
          className="flex items-center font-medium w-fit"
          onOpenChange={setOpen}
        >
          <LogoIcon className="mr-2" />
          LearnLingo
        </MobileLink>

        <div className="flex flex-col justify-between h-full py-6">
          <div className="flex flex-col space-y-6 font-medium">
            <MobileLink href={"/"} onOpenChange={setOpen}>
              Home
            </MobileLink>

            <MobileLink href={"/teachers"} onOpenChange={setOpen}>
              Teachers
            </MobileLink>

            {user && (
              <>
                <MobileLink href={"/favorites"} onOpenChange={setOpen}>
                  Favorites
                </MobileLink>

                <MobileLink href={"/"} onOpenChange={setOpen}>
                  Profile
                </MobileLink>
              </>
            )}
          </div>

          {user && <LogoutDialog />}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}