import PropTypes from 'prop-types'

export function AnomalyAlerts({ items }) {
  if (!items?.length) return <div style={{ fontSize: 12, color: 'var(--text3)' }}>No anomalies.</div>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((a) => (
        <div
          key={a.id}
          style={{
            padding: '12px 14px',
            borderRadius: 10,
            borderLeft: `3px solid ${a.severity === 'critical' ? 'var(--red)' : a.severity === 'warning' ? 'var(--amber)' : 'var(--cyan)'}`,
            background:
              a.severity === 'critical'
                ? 'var(--red-bg)'
                : a.severity === 'warning'
                  ? 'var(--amber-bg)'
                  : 'var(--cyan-bg)',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{a.title}</div>
          <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 3 }}>{a.description}</div>
        </div>
      ))}
    </div>
  )
}

AnomalyAlerts.propTypes = { items: PropTypes.array }

