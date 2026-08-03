type AvatarProps = {
  initials: string
  color: string
  online?: boolean
  size?: "sm" | "md"
}

export function Avatar({ initials, color, online, size = "md" }: AvatarProps) {
  const dimensions = size === "sm" ? "h-10 w-10 text-sm" : "h-12 w-12 text-base"

  return (
    <div className="relative shrink-0">
      <div
        className={`flex items-center justify-center rounded-full font-medium text-foreground ${dimensions}`}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {initials}
      </div>
      {online && (
        <span
          className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-panel bg-primary"
          aria-label="online"
        />
      )}
    </div>
  )
}
