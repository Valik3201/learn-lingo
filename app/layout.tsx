import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learn-lingo-one.vercel.app"),
  title: "Learn Lingo",
  description: "Unlock your potential with the best language tutors",
  openGraph: {
    title: "Learn Lingo",
    description:
      "Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.",
    url: "https://learn-lingo-one.vercel.app",
    type: "website",
    siteName: "Learn Lingo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          roboto.variable
        )}
      >
        <div className="container md:px-7 min-h-svh flex flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>
              <Header />
              {children}
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
