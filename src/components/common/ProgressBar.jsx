import PropTypes from 'prop-types'

export function ProgressBar({ label, percent }) {
  return (
    <div>
      {label ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: 'var(--text2)' }}>{label}</span>
          <span style={{ fontSize: 12, color: 'var(--text)' }}>{percent}%</span>
        </div>
      ) : null}
      <div
        style={{
          height: 6,
          background: 'var(--bg3)',
          borderRadius: 999,
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            width: `${Math.max(0, Math.min(100, percent))}%`,
            height: '100%',
            background: 'linear-gradient(90deg,var(--accent),var(--violet))',
          }}
        />
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  label: PropTypes.string,
  percent: PropTypes.number.isRequired,
}

