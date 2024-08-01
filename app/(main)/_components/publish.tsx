"use client";

import { Doc } from "@/convex/_generated/dataModel";
import useOrigin from "@/hooks/use-origion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Check, Copy, Globe } from "lucide-react";

interface PublishProps {
  initialData: Doc<"documents">;
}

export default function Publish({ initialData }: PublishProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const origin = useOrigin();
  const upsdate = useMutation(api.documents.update);
  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitting(true);
    const promise = upsdate({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmitting(false));
    toast.promise(promise, {
      loading: "Publishing a note...",
      success: "Note published",
      error: "Faild to publish a note",
    });
  };

  const unPublish = () => {
    setIsSubmitting(true);
    const promise = upsdate({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmitting(false));
    toast.promise(promise, {
      loading: "UnPublishing a note...",
      success: "Note unpublished",
      error: "Faild to unpublish a note",
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          Publish
          {initialData.isPublished && (
            <Globe className="ml-2 size-4 text-sky-500" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="size-4 animate-pulse text-sky-500" />
              <p className="text-xs font-medium text-sky-500">
                This note live on web
              </p>
            </div>
            <div className="flex items-center">
              <input
                value={url}
                className="h-8 flex-1 truncate rounded-l-md border bg-muted px-2 text-xs"
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none"
              >
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </div>
            <Button
              disabled={isSubmitting}
              onClick={unPublish}
              className="w-full text-sm"
              size="sm"
            >
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="mb-2 size-8 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium">Publish this note</p>
            <span className="mb-4 text-sm text-muted-foreground">
              Share your work with others
            </span>
            <Button
              disabled={isSubmitting}
              onClick={onPublish}
              className="w-full text-sm"
              size="sm"
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
