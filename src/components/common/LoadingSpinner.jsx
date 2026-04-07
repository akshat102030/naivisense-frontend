import PropTypes from 'prop-types'

export function LoadingSpinner({ label = 'Loading…' }) {
  return <div style={{ fontSize: 12, color: 'var(--text3)' }}>{label}</div>
}

LoadingSpinner.propTypes = { label: PropTypes.string }

