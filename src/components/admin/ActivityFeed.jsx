import PropTypes from 'prop-types'

export function ActivityFeed({ items }) {
  if (!items?.length) return <div style={{ fontSize: 12, color: 'var(--text3)' }}>No activity yet.</div>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {items.map((it) => (
        <div key={it.id} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 999, background: it.color ?? 'var(--cyan)' }} />
            <div style={{ width: 1, flex: 1, minHeight: 16, background: 'var(--border)', marginTop: 4 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: 'var(--text)' }}>{it.title}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 3, fontSize: 10, color: 'var(--text3)' }}>
              <span>{it.time}</span>
              <span style={{ color: 'var(--text2)' }}>{it.actor}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ActivityFeed.propTypes = { items: PropTypes.array }

