import PropTypes from 'prop-types'

export function StatCard({ label, value, subtext }) {
  return (
    <div
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r2)',
        padding: '18px 20px',
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: 'var(--text3)',
          textTransform: 'uppercase',
          letterSpacing: 0.6,
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)' }}>{value}</div>
      {subtext ? <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 6 }}>{subtext}</div> : null}
    </div>
  )
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtext: PropTypes.node,
}

