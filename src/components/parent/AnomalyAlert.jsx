import PropTypes from 'prop-types'

export function AnomalyAlert({ message }) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: '1px solid rgba(248,113,113,0.2)',
        background: 'var(--red-bg)',
        color: 'var(--red)',
        padding: '10px 12px',
        fontSize: 12,
      }}
    >
      {message}
    </div>
  )
}

AnomalyAlert.propTypes = { message: PropTypes.string.isRequired }

