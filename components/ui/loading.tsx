import { cn } from "@/lib/utils"

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-border/20 border-t-primary animate-spin"></div>
        <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-transparent border-l-primary/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
    </div>
  )
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end justify-center space-x-3 mt-8", className)}>
      <div className="h-4 w-4 rounded-full bg-primary animate-[bounce_1.4s_ease-in-out_infinite] [animation-delay:-0.32s]"></div>
      <div className="h-4 w-4 rounded-full bg-primary animate-[bounce_1.4s_ease-in-out_infinite] [animation-delay:-0.16s]"></div>
      <div className="h-4 w-4 rounded-full bg-primary animate-[bounce_1.4s_ease-in-out_infinite]"></div>
    </div>
  )
}

export function LoadingPage({ variant = "spinner" }: { variant?: "spinner" | "dots" }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        {variant === "spinner" ? (
          <LoadingSpinner />
        ) : (
          <LoadingDots />
        )}
        <div className="h-1 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full -translate-x-full bg-primary animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  )
}