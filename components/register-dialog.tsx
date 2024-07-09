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
import { EyeOff } from "lucide-react";

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold text-base px-10">Registration</Button>
      </DialogTrigger>
      <DialogContent className="max-w-96 sm:max-w-[566px]">
        <DialogHeader>
          <DialogTitle>Registration</DialogTitle>
          <DialogDescription>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="sr-only">
              Name
            </Label>
            <Input id="name" placeholder="Name" className="h-14" />
          </div>
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
            Sign Up
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
