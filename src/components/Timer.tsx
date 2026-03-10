import { createPortal } from 'react-dom'
import { Clock } from 'lucide-react'
import { cn } from '#/lib/utils'

interface TimerProps {
  timeRemaining: number
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

export default function Timer({ timeRemaining }: TimerProps) {
  const isLow = timeRemaining <= 300 // 5 minutes
  const isCritical = timeRemaining <= 60 // 1 minute

  const timerSlot =
    typeof document !== 'undefined'
      ? document.getElementById('exam-timer-slot')
      : null

  const timerContent = (
    <div
      className={cn(
        'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-mono font-semibold',
        isCritical
          ? 'bg-testology-error/10 text-testology-error animate-pulse'
          : isLow
            ? 'bg-testology-error/10 text-testology-error'
            : 'bg-muted text-foreground',
      )}
      role="timer"
      aria-live="polite"
      aria-label={`${Math.floor(timeRemaining / 60)} minutes and ${timeRemaining % 60} seconds remaining`}
    >
      <Clock className="h-4 w-4" />
      {formatTime(timeRemaining)}
    </div>
  )

  if (timerSlot) {
    return createPortal(timerContent, timerSlot)
  }

  // Fallback if portal target not found
  return timerContent
}
