import PropTypes from 'prop-types'
import { memo } from 'react'

function AnomalyQueueItemImpl({ item }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 10,
        background: 'var(--bg3)',
        borderLeft: `3px solid ${
          item.severity === 'critical' ? 'var(--red)' : item.severity === 'warning' ? 'var(--amber)' : 'var(--cyan)'
        }`,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 800, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.title}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 2 }}>{item.childName}</div>
      </div>
      <button
        type="button"
        style={{
          borderRadius: 10,
          border: '1px solid var(--border)',
          background: 'var(--bg4)',
          color: 'var(--text2)',
          padding: '6px 10px',
          cursor: 'pointer',
          fontSize: 10,
          fontWeight: 800,
          whiteSpace: 'nowrap',
        }}
      >
        Review
      </button>
    </div>
  )
}

AnomalyQueueItemImpl.propTypes = { item: PropTypes.object.isRequired }

export const AnomalyQueueItem = memo(AnomalyQueueItemImpl)

