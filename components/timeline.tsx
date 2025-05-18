import { cn } from "@/lib/utils"

export function Timeline({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-rose-100",
      className
    )}>
      {children}
    </div>
  )
}

export function TimelineItem({ title, icon, children, className }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("relative pl-10", className)}>
      <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-700">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-medium leading-none">{title}</h4>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
} 