import PropTypes from 'prop-types'
import { AnomalyQueueItem } from './AnomalyQueueItem.jsx'

export function AnomalyQueue({ items }) {
  if (!items?.length) return <div style={{ fontSize: 12, color: 'var(--text3)' }}>No anomalies.</div>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((it) => (
        <AnomalyQueueItem key={it.id} item={it} />
      ))}
    </div>
  )
}

AnomalyQueue.propTypes = { items: PropTypes.array }

