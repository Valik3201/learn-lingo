"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import type { FirebaseError } from "firebase/app";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function LogoutDialog() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err as FirebaseError);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Log Out</Button>
      </DialogTrigger>
      <DialogContent className="max-w-96 sm:max-w-[566px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout </DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="secondary" size="lg">
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="submit"
            onClick={handleLogout}
            variant="destructive"
            size="lg"
          >
            Log Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
