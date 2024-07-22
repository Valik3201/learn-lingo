"use client";

import { useEffect } from "react";
import { create } from "zustand";
import {
  onAuthStateChanged,
  sendEmailVerification,
  updateEmail,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";
import type { FirebaseError } from "firebase/app";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateUserProfile: (displayName?: string, email?: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  setUser: (user: User | null) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  updateUserProfile: async (displayName, email) => {
    set({ loading: true });
    const user = auth.currentUser;
    if (user) {
      try {
        if (displayName) {
          await updateProfile(user, { displayName });
          set({
            user: {
              ...user,
              displayName: displayName || user.displayName,
            },
          });
        }
        if (email) {
          await updateEmail(user, email);
          set({
            user: {
              ...user,
              email: email || user.email,
            },
          });
        }
      } catch (error) {
        set({ error: (error as FirebaseError).message });
      } finally {
        set({ loading: false });
      }
    }
  },
  sendVerificationEmail: async () => {
    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user);
      } catch (error) {
        set({ error: (error as FirebaseError).message });
      }
    }
  },
}));

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return { user, loading };
};
