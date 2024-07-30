"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeadingProps {}

export default function Heading({}: HeadingProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Document, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br /> better, faster work
        happen
      </h3>
      {isLoading && <Spinner className="mx-auto h-10" />}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="sm">Get Notion Free</Button>
        </SignInButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion
            <ArrowRight className="size-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
}
