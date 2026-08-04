import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs shadow-sm",
      md: "px-5 py-2.5 text-sm shadow-md",
      lg: "px-7 py-3.5 text-base shadow-lg",
    };

    const variantStyles = {
      primary:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500",
      secondary:
        "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
      outline:
        "border border-slate-300 bg-transparent text-slate-800 hover:bg-slate-100 focus:ring-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:ring-slate-400",
      glow: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-95 shadow-indigo-500/25 hover:shadow-indigo-500/40 focus:ring-indigo-500",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
