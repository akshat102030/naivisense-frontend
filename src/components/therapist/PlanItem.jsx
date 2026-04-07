import PropTypes from 'prop-types'
import { memo } from 'react'

function PlanItemImpl({ item }) {
  return (
    <div style={{ padding: 12, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg3)' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{item.title}</div>
      <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 4 }}>{item.description}</div>
    </div>
  )
}

PlanItemImpl.propTypes = { item: PropTypes.object.isRequired }

export const PlanItem = memo(PlanItemImpl)

