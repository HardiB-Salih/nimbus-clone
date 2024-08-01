"use client";

import Cover from "@/components/cover";
import Toolbar from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

interface PageProps {
  params: {
    documentId: Id<"documents">;
  };
}

export default function Page({ params: { documentId } }: PageProps) {
  const document = useQuery(api.documents.getById, { documentId });

  if (document == undefined) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
}
