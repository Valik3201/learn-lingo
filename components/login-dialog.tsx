import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginIcon } from "./icons";
import { EyeOff } from "lucide-react";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="font-bold text-base">
          <LoginIcon className="mr-2" />
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-96 sm:max-w-[566px]">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="h-14"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                <EyeOff />
              </div>

              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-14"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="yellow"
            className="w-full h-[60px] text-lg"
          >
            Log In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
