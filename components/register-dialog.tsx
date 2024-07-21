"use client";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import * as z from "zod";

import { useFormHandler } from "@/hooks/use-form-handler";
import { FormFieldComponent } from "./form-field";
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

const RegisterSchema = z.object({
  name: z.string().min(6, { message: "Name must be at least 6 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type RegisterFormInputs = z.infer<typeof RegisterSchema>;

export function RegisterDialog() {
  const auth = getAuth();
  const handleRegister = async (data: RegisterFormInputs) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    await updateProfile(auth.currentUser!, { displayName: data.name });
  };

  const {
    form,
    error,
    showPassword,
    setShowPassword,
    handleSubmit,
    handleOpen,
  } = useFormHandler(RegisterSchema, handleRegister);

  return (
    <Dialog onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button className="font-bold text-base lg:px-10">Registration</Button>
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
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <FormFieldComponent
                label="Name"
                type="text"
                name="name"
                form={form}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <FormFieldComponent
                label="Email"
                type="email"
                name="email"
                form={form}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <FormFieldComponent
                label="Password"
                type="password"
                name="password"
                form={form}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              {error && <p className="text-destructive">{error.message}</p>}
              <Button
                type="submit"
                variant="yellow"
                className="w-full h-[60px] text-lg"
              >
                Sign Up
              </Button>
              {error && (
                <FormMessage className="leading-none">
                  {error.message}
                </FormMessage>
              )}
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
