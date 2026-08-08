"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
    | "purple"
    | "pink"
    | "ghost";

  size?:
    | "default"
    | "sm"
    | "lg";
}

function Badge({
  className,
  variant = "default",
  size = "default",
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantClasses: Record<
    NonNullable<
      BadgeProps["variant"]
    >,
    string
  > = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",

    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",

    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",

    outline:
      "border-border bg-transparent text-foreground",

    success:
      "border-transparent bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20",

    warning:
      "border-transparent bg-amber-500/15 text-amber-400 hover:bg-amber-500/20",

    info:
      "border-transparent bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/20",

    purple:
      "border-transparent bg-violet-500/15 text-violet-400 hover:bg-violet-500/20",

    pink:
      "border-transparent bg-pink-500/15 text-pink-400 hover:bg-pink-500/20",

    ghost:
      "border-transparent bg-transparent text-muted-foreground hover:bg-white/10 hover:text-foreground",
  };

  const sizeClasses: Record<
    NonNullable<
      BadgeProps["size"]
    >,
    string
  > = {
    default:
      "min-h-6 px-2.5 py-0.5 text-xs",

    sm:
      "min-h-5 px-2 py-0 text-[11px]",

    lg:
      "min-h-7 px-3 py-1 text-sm",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[
          variant
        ],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export {
  Badge,
};
