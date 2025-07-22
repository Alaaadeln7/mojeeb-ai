"use client";

import {
  Info,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { Toaster as Sonner, toast, type ToastT } from "sonner";
import { cn } from "@/lib/utils";

type ToastStatus = "success" | "error" | "info" | "warning" | "loading";
type ToastVariant = "default" | "description" | "action";

interface ExtendedToastProps extends ToastT {
  variant?: ToastVariant;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const statusIcons: Record<ToastStatus, React.ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  loading: <Loader2 className="h-5 w-5 animate-spin" />,
};

const statusColors: Record<ToastStatus, string> = {
  success: "bg-green-500 text-green-50 border-green-600",
  error: "bg-red-500 text-red-50 border-red-600",
  info: "bg-blue-500 text-blue-50 border-blue-600",
  warning: "bg-yellow-500 text-yellow-50 border-yellow-600",
  loading: "bg-gray-500 text-gray-50 border-gray-600",
};

const Toaster = ({ ...props }: React.ComponentProps<typeof Sonner>) => {
  return (
    <Sonner
      className="toaster"
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast rounded-lg border p-4 shadow-lg",
            "flex items-start gap-3",
            "bg-background text-foreground border-border"
          ),
          title: "font-medium",
          description: "text-sm opacity-90",
          actionButton: cn(
            "px-3 py-1 text-sm font-medium rounded-md",
            "bg-primary text-primary-foreground hover:bg-primary/90"
          ),
          cancelButton: cn(
            "px-3 py-1 text-sm font-medium rounded-md",
            "bg-muted text-muted-foreground hover:bg-muted/80"
          ),
          success: statusColors.success,
          error: statusColors.error,
          info: statusColors.info,
          warning: statusColors.warning,
          loading: statusColors.loading,
        },
      }}
      {...props}
    />
  );
};

const showToast = (
  message: string,
  status: ToastStatus = "info",
  options?: ExtendedToastProps
) => {
  const baseOptions = {
    icon: statusIcons[status],
    ...options,
  };

  switch (status) {
    case "success":
      return toast.success(message, baseOptions);
    case "error":
      return toast.error(message, baseOptions);
    case "info":
      return toast.info(message, baseOptions);
    case "warning":
      return toast.warning(message, baseOptions);
    case "loading":
      return toast.loading(message, baseOptions);
    default:
      return toast(message, baseOptions);
  }
};

export { Toaster, showToast, toast };
export type { ToastStatus, ToastVariant, ExtendedToastProps };
