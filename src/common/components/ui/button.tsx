import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/common/libs/cn"

const buttonVariants = cva(
  "tw-appinline-flex tw-appitems-center tw-appjustify-center tw-appwhitespace-nowrap tw-approunded-md tw-apptext-sm tw-appfont-medium tw-apptransition-colors focus-visible:tw-appoutline-none focus-visible:tw-appring-1 focus-visible:tw-appring-ring disabled:tw-apppointer-events-none disabled:tw-appopacity-50",
  {
    variants: {
      variant: {
        default:
          "tw-appbg-primary tw-apptext-primary-foreground tw-appshadow hover:tw-appbg-primary/90",
        destructive:
          "tw-appbg-destructive tw-apptext-destructive-foreground tw-appshadow-sm hover:tw-appbg-destructive/90",
        outline:
          "tw-appborder tw-appborder-input tw-appbg-background tw-appshadow-sm hover:tw-appbg-accent hover:tw-apptext-accent-foreground",
        secondary:
          "tw-appbg-secondary tw-apptext-secondary-foreground tw-appshadow-sm hover:tw-appbg-secondary/80",
        ghost: "hover:tw-appbg-accent hover:tw-apptext-accent-foreground",
        link: "tw-apptext-primary tw-appunderline-offset-4 hover:tw-appunderline",
      },
      size: {
        default: "tw-apph-9 tw-apppx-4 tw-apppy-2",
        sm: "tw-apph-8 tw-approunded-md tw-apppx-3 tw-apptext-xs",
        lg: "tw-apph-10 tw-approunded-md tw-apppx-8",
        icon: "tw-apph-9 tw-appw-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
