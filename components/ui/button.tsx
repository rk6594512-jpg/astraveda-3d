"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-antique/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-gold-antique to-gold-bright text-cosmic-black shadow-glow-gold hover:shadow-glow-soft hover:brightness-110",
        destructive:
          "bg-status-error/90 text-moon-white hover:bg-status-error shadow-lg",
        outline:
          "border border-gold-antique/20 bg-cosmic-indigo/40 text-gold-bright backdrop-blur-sm hover:bg-gold-antique/10 hover:border-gold-antique/40",
        secondary:
          "bg-cosmic-indigo/60 text-moon-white border border-lavender/10 hover:bg-cosmic-indigo/80 hover:border-lavender/20",
        ghost:
          "text-lavender hover:text-gold-bright hover:bg-gold-antique/5",
        link:
          "text-gold-bright underline-offset-4 hover:underline decoration-gold-antique/50",
        // AstraVeda custom variants
        cosmic:
          "glass-panel text-gold-bright border-gold-antique/15 hover:border-gold-antique/30 hover:shadow-glow-gold",
        gold:
          "bg-gold-gradient text-cosmic-black font-semibold shadow-glow-gold hover:shadow-glow-soft hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 py-2 text-xs",
        lg: "h-12 rounded-lg px-8 py-3 text-base",
        icon: "h-10 w-10 rounded-lg",
        xl: "h-14 rounded-xl px-10 py-4 text-base font-semibold",
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
