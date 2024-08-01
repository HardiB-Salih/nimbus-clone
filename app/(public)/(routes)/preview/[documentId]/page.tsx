"use client";

import Cover from "@/components/cover";
import Toolbar from "@/components/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface PageProps {
  params: {
    documentId: Id<"documents">;
  };
}

export default function Page({ params: { documentId } }: PageProps) {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    [],
  );
  const document = useQuery(api.documents.getById, { documentId });
  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div className="flex w-full flex-col">
        <Skeleton className="mb-4 h-[35vh] w-full" />
        <div className="space-y-2">
          <Skeleton className="mx-14 my-6 h-12 w-[250px]" />
          <Skeleton className="mx-14 my-6 h-6 w-[200px]" />
          <Skeleton className="mx-14 my-6 h-4 w-[400px]" />
          <Skeleton className="mx-14 my-6 h-4 w-[400px]" />
          <Skeleton className="mx-14 my-6 h-4 w-[400px]" />
          <Skeleton className="mx-14 my-6 h-4 w-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-40">
      <Cover preview url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar preview initialData={document} />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document.content}
        />
      </div>
    </div>
  );
}
