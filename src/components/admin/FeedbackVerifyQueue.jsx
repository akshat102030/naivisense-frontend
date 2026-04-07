import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { VerifyItem } from './VerifyItem.jsx'

export function FeedbackVerifyQueue({ items }) {
  const [queue, setQueue] = useState(items ?? [])

  const pendingCount = useMemo(() => queue.length, [queue.length])

  return (
    <div>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 10 }}>
        {pendingCount} pending
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {queue.map((it) => (
          <VerifyItem
            key={it.id}
            item={it}
            onAction={(item) => {
              setQueue((q) => q.filter((x) => x.id !== item.id))
            }}
          />
        ))}
      </div>
    </div>
  )
}

FeedbackVerifyQueue.propTypes = { items: PropTypes.array }

