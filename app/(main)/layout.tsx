"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import Spinner from "@/components/Spinner";
import Navigation from "./_components/navigation";
import SearchCommand from "@/components/search-command";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!isAuthenticated) redirect("/");

  return (
    <div className="flex h-full">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
}
