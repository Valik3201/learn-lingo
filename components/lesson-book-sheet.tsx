"use client";

import { useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";

import type { Teacher } from "@/store/useTeachersStore";
import { FormFieldComponent } from "@/components/form-field";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormMessage } from "@/components/ui/form";
import { Loader } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z
    .string()
    .min(1, { message: "Phone Number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  reason: z.string().min(1, { message: "Please select a reason" }),
});

export function LessonBookSheet({ teacher }: { teacher?: Teacher }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      reason: "career-business",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
      setIsSubmitted(true);
    }, 1000);
  }

  const handleOpen = () => {
    form.reset({ reason: "career-business" });
    setShowMessage(false);
    setIsSubmitted(false);
  };

  return (
    <Sheet onOpenChange={handleOpen}>
      <SheetTrigger asChild>
        <Button variant="yellow" className="px-12 py-6 text-lg sm:w-fit">
          Book trial lesson
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-96 sm:max-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Book trial lesson</SheetTitle>
          <SheetDescription>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </SheetDescription>
        </SheetHeader>

        {teacher && (
          <div className="flex gap-4 mb-5">
            <Image
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
              width={44}
              height={44}
              className="aspect-square rounded-full"
            />
            <div className="flex flex-col gap-1 font-medium">
              <p className="text-xs text-[#8A8A89]">Your teacher</p>
              <p>
                {teacher.name} {teacher.surname}
              </p>
            </div>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5 mb-10">
              <h3 className="font-medium text-xl md:text-2xl mb-5">
                What is your main reason for learning English?
              </h3>

              <RadioGroup
                defaultValue="career-business"
                onValueChange={(value) => form.setValue("reason", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="career-business"
                    id="career-business"
                  />
                  <Label
                    htmlFor="career-business"
                    className="text-base font-normal"
                  >
                    Career and business
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kids-lesson" id="kids-lesson" />
                  <Label
                    htmlFor="kids-lesson"
                    className="text-base font-normal"
                  >
                    Lesson for kids
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="living-abroad" id="living-abroad" />
                  <Label
                    htmlFor="living-abroad"
                    className="text-base font-normal"
                  >
                    Living abroad
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="exams-coursework"
                    id="exams-coursework"
                  />
                  <Label
                    htmlFor="exams-coursework"
                    className="text-base font-normal"
                  >
                    Exams and coursework
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="culture-travel-hobby"
                    id="culture-travel-hobby"
                  />
                  <Label
                    htmlFor="culture-travel-hobby"
                    className="text-base font-normal"
                  >
                    Culture, travel or hobby
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4">
              <FormFieldComponent
                placeholder="Full Name"
                name="name"
                form={form}
              />
              <FormFieldComponent
                placeholder="Email"
                type="email"
                name="email"
                form={form}
              />
              <FormFieldComponent
                placeholder="Phone Number"
                name="number"
                form={form}
              />

              {!isSubmitted && (
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
                    "Book"
                  )}
                </Button>
              )}

              {isSubmitted && (
                <SheetClose asChild>
                  <Button
                    variant="yellow"
                    className="w-full h-[60px] text-lg mt-10"
                  >
                    Close
                  </Button>
                </SheetClose>
              )}

              {showMessage && (
                <FormMessage className="text-primary font-bold text-lg mt-5 text-center">
                  Your trial lesson has been successfully booked!
                </FormMessage>
              )}
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
