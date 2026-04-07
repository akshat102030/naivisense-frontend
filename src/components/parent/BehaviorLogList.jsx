import PropTypes from 'prop-types'
import { BehaviorLogItem } from './BehaviorLogItem.jsx'

export function BehaviorLogList({ items }) {
  if (!items?.length) return <div style={{ fontSize: 12, color: 'var(--text3)' }}>No behavior logs yet.</div>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((it) => (
        <BehaviorLogItem key={it.id} item={it} />
      ))}
    </div>
  )
}

BehaviorLogList.propTypes = { items: PropTypes.array }

