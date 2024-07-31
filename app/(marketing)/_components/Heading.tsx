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
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Document, & Plans. Unified. Welcome to{" "}
        <span className="underline">Nimbus</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Nimbus is the connected workspace where <br /> better, faster work
        happen
      </h3>
      {isLoading && <Spinner className="mx-auto h-10" />}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="sm">Get Nimbus Free</Button>
        </SignInButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Nimbus
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
