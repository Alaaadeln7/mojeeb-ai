import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600 text-white [a&]:hover:bg-blue-600/90 dark:bg-blue-500",
        secondary:
          "border-transparent bg-gray-100 text-gray-800 [a&]:hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
        destructive:
          "border-transparent bg-red-600 text-white [a&]:hover:bg-red-600/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/90",
        success:
          "border-transparent bg-green-600 text-white [a&]:hover:bg-green-600/90 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-500/40 dark:bg-green-500",
        warning:
          "border-transparent bg-yellow-500 text-gray-900 [a&]:hover:bg-yellow-500/90 focus-visible:ring-yellow-500/20 dark:focus-visible:ring-yellow-500/40 dark:bg-yellow-400",
        info: "border-transparent bg-cyan-500 text-white [a&]:hover:bg-cyan-500/90 focus-visible:ring-cyan-500/20 dark:focus-visible:ring-cyan-500/40 dark:bg-cyan-400",
        outline:
          "text-gray-900 border-gray-300 [a&]:hover:bg-gray-50 [a&]:hover:text-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
        subtle:
          "border-transparent bg-gray-50 text-gray-600 [a&]:hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
