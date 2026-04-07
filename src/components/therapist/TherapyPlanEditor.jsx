import PropTypes from 'prop-types'
import { PlanItem } from './PlanItem.jsx'

export function TherapyPlanEditor({ items }) {
  if (!items?.length) return <div style={{ fontSize: 12, color: 'var(--text3)' }}>No plan items.</div>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((it) => (
        <PlanItem key={it.id} item={it} />
      ))}
    </div>
  )
}

TherapyPlanEditor.propTypes = { items: PropTypes.array }

