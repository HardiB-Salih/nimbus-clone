"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import Spinner from "@/components/Spinner";
import Navigation from "./_components/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!isAuthenticated) redirect("/");

  return (
    <div className="h-full flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
