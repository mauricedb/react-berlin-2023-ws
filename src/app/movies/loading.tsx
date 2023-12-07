import { RotateCw } from 'lucide-react'

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2"
    >
      <RotateCw className="animate-spin text-foreground/40" size="5rem" />
    </div>
  )
}
