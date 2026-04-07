import PropTypes from 'prop-types'
import { KPICard } from './KPICard.jsx'

export function KPIRibbon({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
      {items.map((it) => (
        <KPICard key={it.label} label={it.label} value={it.value} />
      ))}
    </div>
  )
}

KPIRibbon.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
}

