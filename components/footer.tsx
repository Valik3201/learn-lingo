import { LogoIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col md:flex-row gap-4 items-center justify-between md:px-16 py-5">
      <div className="flex items-center gap-2 font-medium">
        <LogoIcon className="mr-2" />
        LearnLingo
      </div>
      <div>© {new Date().getFullYear()} LearnLingo. All rights reserved.</div>
    </footer>
  );
}
