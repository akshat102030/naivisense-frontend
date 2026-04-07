import PropTypes from 'prop-types'

export function Badge({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10,
        fontWeight: 700,
        padding: '2px 8px',
        borderRadius: 999,
        border: '1px solid var(--border)',
        background: 'var(--bg3)',
        color: 'var(--text2)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

