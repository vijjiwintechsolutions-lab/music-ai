"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext =
  React.createContext<
    DialogContextValue | undefined
  >(undefined);

function useDialogContext() {
  const context =
    React.useContext(
      DialogContext
    );

  if (!context) {
    throw new Error(
      "Dialog components must be used inside <Dialog>."
    );
  }

  return context;
}

interface DialogProps {
  open?: boolean;
  onOpenChange?: (
    open: boolean
  ) => void;
  children: React.ReactNode;
}

function Dialog({
  open: controlledOpen,
  onOpenChange,
  children,
}: DialogProps) {
  const [
    internalOpen,
    setInternalOpen,
  ] = React.useState(false);

  const open =
    controlledOpen ??
    internalOpen;

  const setOpen = (
    value: boolean
  ) => {
    if (
      controlledOpen ===
      undefined
    ) {
      setInternalOpen(
        value
      );
    }

    onOpenChange?.(
      value
    );
  };

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

function DialogTrigger({
  asChild = false,
  children,
  onClick,
  ...props
}: DialogTriggerProps) {
  const {
    setOpen,
  } = useDialogContext();

  if (asChild) {
    if (
      React.isValidElement(
        children
      )
    ) {
      const child =
        children as React.ReactElement<{
          onClick?: (
            event: React.MouseEvent
          ) => void;
        }>;

      return React.cloneElement(
        child,
        {
          onClick: (
            event: React.MouseEvent
          ) => {
            child.props.onClick?.(
              event
            );

            if (
              !event.defaultPrevented
            ) {
              setOpen(
                true
              );
            }
          },
        }
      );
    }

    return null;
  }

  return (
    <button
      type="button"
      onClick={(
        event
      ) => {
        onClick?.(
          event
        );

        if (
          !event.defaultPrevented
        ) {
          setOpen(
            true
          );
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

interface DialogCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

function DialogClose({
  asChild = false,
  children,
  onClick,
  ...props
}: DialogCloseProps) {
  const {
    setOpen,
  } = useDialogContext();

  if (asChild) {
    if (
      React.isValidElement(
        children
      )
    ) {
      const child =
        children as React.ReactElement<{
          onClick?: (
            event: React.MouseEvent
          ) => void;
        }>;

      return React.cloneElement(
        child,
        {
          onClick: (
            event: React.MouseEvent
          ) => {
            child.props.onClick?.(
              event
            );

            if (
              !event.defaultPrevented
            ) {
              setOpen(
                false
              );
            }
          },
        }
      );
    }

    return null;
  }

  return (
    <button
      type="button"
      onClick={(
        event
      ) => {
        onClick?.(
          event
        );

        if (
          !event.defaultPrevented
        ) {
          setOpen(
            false
          );
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showClose?: boolean;
}

function DialogContent({
  className,
  children,
  showClose = true,
  ...props
}: DialogContentProps) {
  const {
    open,
    setOpen,
  } = useDialogContext();

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        setOpen(
          false
        );
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    setOpen,
  ]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
        onMouseDown={() =>
          setOpen(false)
        }
      />

      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-50 w-full max-w-lg rounded-2xl border border-white/10 bg-background p-6 text-foreground shadow-2xl",
          className
        )}
        onMouseDown={(
          event
        ) =>
          event.stopPropagation()
        }
        {...props}
      >
        {children}

        {showClose && (
          <button
            type="button"
            aria-label="Close dialog"
            onClick={() =>
              setOpen(
                false
              )
            }
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition hover:bg-white/10 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <span
              aria-hidden="true"
              className="text-xl leading-none"
            >
              ×
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

const DialogHeader =
  React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(
    (
      {
        className,
        ...props
      },
      ref
    ) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          className
        )}
        {...props}
      />
    )
  );

DialogHeader.displayName =
  "DialogHeader";

const DialogFooter =
  React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(
    (
      {
        className,
        ...props
      },
      ref
    ) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          className
        )}
        {...props}
      />
    )
  );

DialogFooter.displayName =
  "DialogFooter";

const DialogTitle =
  React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(
    (
      {
        className,
        ...props
      },
      ref
    ) => (
      <h2
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      />
    )
  );

DialogTitle.displayName =
  "DialogTitle";

const DialogDescription =
  React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(
    (
      {
        className,
        ...props
      },
      ref
    ) => (
      <p
        ref={ref}
        className={cn(
          "text-sm text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  );

DialogDescription.displayName =
  "DialogDescription";

function DialogOverlay({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {
    open,
  } = useDialogContext();

  if (!open) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
};
