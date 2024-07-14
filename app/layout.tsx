import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import AuthProvider from "@/components/auth-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Learn Lingo",
  description: "Unlock your potential with the best language tutors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          roboto.variable
        )}
      >
        <div className="container md:px-7 min-h-svh flex flex-col">
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
