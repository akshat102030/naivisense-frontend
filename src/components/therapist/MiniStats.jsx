import PropTypes from 'prop-types'

export function MiniStats({ stats }) {
  if (!stats) return null
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {Object.entries(stats).map(([k, v]) => (
        <div key={k} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>{v}%</div>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 0.6, marginTop: 2 }}>
            {k}
          </div>
        </div>
      ))}
    </div>
  )
}

MiniStats.propTypes = { stats: PropTypes.object }

