import { Check, X } from 'lucide-react'

interface ResultsSummaryProps {
  score: number
  total: number
  percentage: number
  mode: 'exam' | 'practice'
  passed?: boolean
}

export default function ResultsSummary({
  score,
  total,
  percentage,
  mode,
  passed,
}: ResultsSummaryProps) {
  return (
    <div className="mb-8 text-center">
      {/* Score circle */}
      <div className="mx-auto mb-6 flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-border bg-card shadow-sm">
        <span className="text-4xl font-bold text-foreground">{score}/{total}</span>
        <span className="text-lg font-medium text-muted-foreground">{percentage}%</span>
      </div>

      {/* Pass/Fail message for exam mode */}
      {mode === 'exam' && passed !== undefined && (
        <div className="mb-2 flex items-center justify-center gap-2" aria-live="polite">
          {passed ? (
            <>
              <Check className="h-6 w-6 text-testology-success" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-testology-success">
                Congratulations!
              </h2>
            </>
          ) : (
            <>
              <X className="h-6 w-6 text-testology-error" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-testology-error">
                Keep Practicing!
              </h2>
            </>
          )}
        </div>
      )}

      {mode === 'exam' && passed !== undefined && (
        <p className="text-muted-foreground">
          {passed
            ? 'You passed the exam! Great job mastering this material.'
            : `You need 80% to pass. Keep studying and try again!`}
        </p>
      )}

      {mode === 'practice' && (
        <p className="text-muted-foreground">
          You answered {score} out of {total} questions correctly.
        </p>
      )}
    </div>
  )
}
