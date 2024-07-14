"use client";

import { useState } from "react";
import type { Teacher } from "@/store/useTeachersStore";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export function LessonBookSheet({ teacher }: { teacher?: Teacher }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <Sheet>
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

        <div className="space-y-5 mb-10">
          <h3 className="font-medium text-xl md:text-2xl mb-5">
            What is your main reason for learning English?
          </h3>

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="text-base font-normal">
                Career and business
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="text-base font-normal">
                Lesson for kids
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three" className="text-base font-normal">
                Living abroad
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-four" id="option-four" />
              <Label htmlFor="option-four" className="text-base font-normal">
                Exams and coursework
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-five" id="option-five" />
              <Label htmlFor="option-five" className="text-base font-normal">
                Culture, travel or hobby
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-4 mb-10">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="sr-only">
              Full Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="h-14"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-14"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="number" className="sr-only">
              Phone Number
            </Label>

            <Input
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone Number"
              className="h-14"
            />
          </div>
        </div>
        <SheetFooter>
          <Button
            type="submit"
            variant="yellow"
            className="w-full h-[60px] text-lg"
          >
            Book
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
