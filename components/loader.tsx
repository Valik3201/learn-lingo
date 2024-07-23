import { LogoIcon } from "@/components/icons";
import { Loader as Loader2 } from "lucide-react";

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-foreground z-50 dark:bg-black">
      <div className="text-center">
        <div className="flex items-center justify-center mb-10">
          <LogoIcon className="mr-4 h-12 w-12" />
          <span className="text-2xl font-medium text-accent-foreground">
            LearnLingo
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-lg text-accent-foreground">Loading...</p>
        </div>
      </div>
    </div>
  );
}
