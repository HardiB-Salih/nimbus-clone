import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const spinnerVariant = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariant> {
  className?: string;
}

export default function Spinner({ size, className }: SpinnerProps) {
  return <Loader2 className={cn(spinnerVariant({ size }), className)} />;
}
