"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "success"
    | "warning"
    | "gradient";

  size?:
    | "default"
    | "sm"
    | "lg"
    | "icon";
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses: Record<
      NonNullable<ButtonProps["variant"]>,
      string
    > = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90",

      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",

      outline:
        "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",

      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",

      ghost:
        "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",

      link:
        "bg-transparent p-0 text-primary underline-offset-4 hover:underline",

      success:
        "bg-emerald-600 text-white hover:bg-emerald-700",

      warning:
        "bg-amber-500 text-black hover:bg-amber-600",

      gradient:
        "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg hover:from-violet-500 hover:to-cyan-400",
    };

    const sizeClasses: Record<
      NonNullable<ButtonProps["size"]>,
      string
    > = {
      default:
        "h-10 px-4 py-2",

      sm:
        "h-9 rounded-md px-3",

      lg:
        "h-11 rounded-md px-8",

      icon:
        "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export {
  Button,
};
