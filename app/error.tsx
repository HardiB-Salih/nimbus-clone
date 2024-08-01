"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image src="/error.png" alt="error" height={300} width={300} />
      <h2 className="text-xl font-medium">Something went wrong</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
}
