import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col md:flex-row gap-4 items-center justify-between md:px-16 py-5">
      <div className="flex items-center gap-2 font-medium">
        <Link href="/" className="flex items-center gap-2 font-medium w-fit">
          <LogoIcon className="mr-2" />
          LearnLingo
        </Link>
      </div>
      <div>
        © {new Date().getFullYear()}{" "}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "p-0 text-base font-normal"
          )}
        >
          LearnLingo
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
