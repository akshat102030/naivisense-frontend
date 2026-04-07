import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { ProgressBar } from '../common/ProgressBar.jsx'
import { InstructionCard } from './InstructionCard.jsx'

export function StepWizard({ steps }) {
  const [index, setIndex] = useState(0)
  const current = steps[index]
  const pct = useMemo(
    () => Math.round(((index + 1) / Math.max(steps.length, 1)) * 100),
    [index, steps.length],
  )

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--text2)' }}>
          Step {index + 1} of {steps.length}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text3)' }}>Est. 2 min</div>
      </div>
      <ProgressBar percent={pct} />
      <InstructionCard
        title={current.title}
        instruction={current.instruction}
        visualHint={current.visualHint}
        audioHint={current.audioHint}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          style={{
            minHeight: 44,
            padding: '0 14px',
            borderRadius: 10,
            border: '1px solid var(--border2)',
            background: 'transparent',
            color: 'var(--text2)',
            cursor: index === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))}
          style={{
            minHeight: 44,
            padding: '0 14px',
            borderRadius: 10,
            border: 'none',
            background: 'var(--green)',
            color: 'var(--bg)',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          {index === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

StepWizard.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      instruction: PropTypes.string.isRequired,
      visualHint: PropTypes.string.isRequired,
      audioHint: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

