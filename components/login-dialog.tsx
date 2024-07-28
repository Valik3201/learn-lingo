"use client";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as z from "zod";

import { useFormHandler } from "@/hooks/use-form-handler";
import { FormFieldComponent } from "@/components/form-field";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormMessage } from "@/components/ui/form";
import { LoginIcon } from "@/components/icons";
import { Loader } from "lucide-react";

const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormInputs = z.infer<typeof LoginSchema>;

export function LoginDialog() {
  const auth = getAuth();

  const handleLogin = async (data: LoginFormInputs) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const {
    form,
    error,
    loading,
    showPassword,
    setShowPassword,
    handleSubmit,
    handleOpen,
  } = useFormHandler({
    schema: LoginSchema,
    onSubmit: handleLogin,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Dialog onOpenChange={handleOpen}>
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
            and continue your search for a teacher.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <FormFieldComponent
                label="Email"
                type="email"
                name="email"
                form={form}
              />
              <FormFieldComponent
                label="Password"
                type="password"
                name="password"
                form={form}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              {error && (
                <FormMessage className="leading-none">
                  {error.message}
                </FormMessage>
              )}

              <Button
                type="submit"
                variant="yellow"
                className="w-full h-[60px] text-lg mt-10"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </span>
                ) : (
                  "Log In"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
