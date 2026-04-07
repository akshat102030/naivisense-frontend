import PropTypes from 'prop-types'
import { ProgressBar } from '../common/ProgressBar.jsx'

export function TherapyPlanCard({ title, description, confidence }) {
  return (
    <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 6, lineHeight: 1.5 }}>{description}</div>
      <div style={{ marginTop: 10 }}>
        <ProgressBar label="Confidence" percent={confidence} />
      </div>
    </div>
  )
}

TherapyPlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  confidence: PropTypes.number.isRequired,
}

