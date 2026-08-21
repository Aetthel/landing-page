import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variantStyles = {
      default: "bg-brand text-dark hover:bg-brand/90",
      outline: "border border-ink/20 bg-transparent hover:bg-surface/50 text-ink",
      ghost: "hover:bg-surface/50 text-ink",
      link: "text-brand underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(
          combinedClassName,
          (children as React.ReactElement<any>).props?.className
        ),
        ...props,
      });
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";