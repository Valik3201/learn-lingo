import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-6">
      <section className="flex flex-col lg:flex-row gap-6">
        <div className="bg-primary-foreground rounded-3xl p-16 w-full lg:w-[60%] h-[530px] place-content-center">
          <h1 className="text-3xl md:text-5xl font-medium mb-9 md:max-w-[548px] tracking-tight">
            Unlock your potential with the best{" "}
            <span className="relative">
              <span
                className="block absolute inset-0 top-0 md:top-3 h-10 bg-yellow-foreground rounded-md"
                aria-hidden="true"
              ></span>
              <span className="relative italic font-normal">language</span>
            </span>{" "}
            tutors
          </h1>
          <p className="mb-16 max-w-[461px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Button className="w-60 h-[60px] text-lg" variant={"yellow"}>
            Get Started
          </Button>
        </div>
        <div className="w-full lg:w-[40%] bg-yellow-foreground rounded-3xl flex justify-center items-end">
          <Image
            src="/hero.svg"
            width={391}
            height={578}
            alt="Hero Image"
            priority
            className="w-1/2 md:w-fit"
          />
        </div>
      </section>

      <section>
        <ul className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-20 py-11 place-content-center items-center border-dashed border-yellow border-2 rounded-3xl">
          <li className="flex gap-4">
            <h2 className="font-medium text-3xl text-nowrap">32,000 +</h2>
            <p className="text-sm max-w-24 opacity-70">Experienced tutors</p>
          </li>
          <li className="flex gap-4">
            <h2 className="font-medium text-3xl text-nowrap">300,000 +</h2>
            <p className="text-sm max-w-24 opacity-70">5-star tutor reviews</p>
          </li>
          <li className="flex gap-4">
            <h2 className="font-medium text-3xl text-nowrap">120 +</h2>
            <p className="text-sm max-w-24 opacity-70">Subjects taught</p>
          </li>
          <li className="flex gap-4">
            <h2 className="font-medium text-3xl text-nowrap">200 +</h2>
            <p className="text-sm max-w-24 opacity-70">Tutor nationalities</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
