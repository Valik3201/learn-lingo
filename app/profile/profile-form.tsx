"use client";

import type { FirebaseError } from "firebase/app";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/store/useAuthStore";
import { Badge } from "@/components/ui/badge";
import { Loader } from "lucide-react";

const profileFormSchema = z.object({
  displayName: z
    .string()
    .min(2, {
      message: "Display Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Display Name must not be longer than 30 characters.",
    })
    .optional(),
  email: z.string().email().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const { user, loading, updateUserProfile, sendVerificationEmail } =
    useAuthStore();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
    defaultValues: {
      displayName: user?.displayName || "",
      email: user?.email || "",
    },
  });

  async function onSubmit(data: ProfileFormValues) {
    if (data.displayName !== user?.displayName || data.email !== user?.email) {
      try {
        await updateUserProfile(data.displayName, data.email);

        toast({
          title: "Profile updated successfully",
          description: (
            <>
              {data.displayName !== user?.displayName && (
                <p>
                  Updated display name to{" "}
                  <span className="font-bold">{data.displayName}</span>
                </p>
              )}
              {data.email !== user?.email && (
                <p>
                  Updated email to{" "}
                  <span className="font-bold">{data.email}</span>
                </p>
              )}
            </>
          ),
        });
      } catch (error) {
        toast({
          title: "Error updating profile",
          description: (error as FirebaseError).message,
          variant: "destructive",
        });
      }
    }
  }

  const handleSendVerificationEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await sendVerificationEmail();
      toast({
        title: "Verification email sent",
        description: "Please check your inbox.",
      });
    } catch (error) {
      toast({
        title: "Error sending verification email",
        description: (error as FirebaseError).message,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input placeholder={user?.displayName!} {...field} />
              </FormControl>
              <FormDescription>
                This is your display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 items-center">
                Email
                {user?.emailVerified ? (
                  <Badge className="px-3 py-0.5 text-xs bg-green-500 hover:bg-green-500">
                    <span className="text-xs">Verified</span>
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="px-3 py-0.5">
                    <span className="text-xs">Unverified</span>
                  </Badge>
                )}
              </FormLabel>
              <FormControl>
                <Input placeholder={user?.email!} {...field} />
              </FormControl>

              {!user?.emailVerified && (
                <FormDescription>
                  <Button
                    variant="link"
                    className="ps-0"
                    onClick={handleSendVerificationEmail}
                  >
                    Send verification email
                  </Button>
                </FormDescription>
              )}

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="yellow" disabled={loading}>
          {loading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Update profile"
          )}
        </Button>
      </form>
    </Form>
  );
}
