"use client";

import { SidebarNav } from "@/components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/profile",
  },
  {
    title: "Appearance",
    href: "/profile/appearance",
  },
];

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:px-16 space-y-8">
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>

          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </main>
  );
}
