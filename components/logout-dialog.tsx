"use client";

import { useFavoritesStore } from "@/store/useFavoritesStore";
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
import { LogOut } from "lucide-react";

export function LogoutDialog() {
  const { clearFavorites } = useFavoritesStore.getState();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      clearFavorites();
    } catch (err) {
      console.log(err as FirebaseError);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto w-full justify-start text-destructive hover:text-destructive px-1.5 py-2"
        >
          <LogOut className="ms-3 me-2 h-4 w-4" />
          Log Out
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-96 sm:max-w-[566px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout </DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="grid grid-cols-2 gap-2">
          <DialogClose>
            <Button variant="secondary" size="lg" className="w-full">
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
