import PropTypes from 'prop-types'

export function GaugeChart({ value = 0 }) {
  const v = Math.max(0, Math.min(100, value))
  const total = 204
  const offset = total - (v / 100) * total

  return (
    <svg viewBox="0 0 160 90" width="160" height="90" role="img" aria-label={`Gauge ${v}%`}>
      <path
        d="M15 85 A65 65 0 0 1 145 85"
        fill="none"
        stroke="var(--bg4)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M15 85 A65 65 0 0 1 145 85"
        fill="none"
        stroke="url(#gGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={total}
        strokeDashoffset={offset}
      />
      <defs>
        <linearGradient id="gGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--teal-accent)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

GaugeChart.propTypes = {
  value: PropTypes.number,
}

