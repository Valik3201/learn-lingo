import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="my-auto">
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center space-y-10">
            <h1 className="mb-4 text-yellow text-5xl tracking-tight font-extrabold lg:text-7xl text-primary-600 dark:text-primary-500">
              404 Not Found
            </h1>
            <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Whoops! That page doesn’t exist.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              You'll find lots to explore on the home page.
            </p>

            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "yellow" }),
                "text-base p-6"
              )}
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
