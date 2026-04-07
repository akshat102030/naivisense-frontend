import PropTypes from 'prop-types'
import { memo } from 'react'

function BehaviorLogItemImpl({ item }) {
  return (
    <div style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg3)' }}>
      <div style={{ fontSize: 13, color: 'var(--text)' }}>{item.description}</div>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{item.recordedAt}</div>
    </div>
  )
}

BehaviorLogItemImpl.propTypes = { item: PropTypes.object.isRequired }

export const BehaviorLogItem = memo(BehaviorLogItemImpl)

