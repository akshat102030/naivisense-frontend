import PropTypes from 'prop-types'

export function AlertBanner({ children }) {
  return (
    <div
      style={{
        background: 'var(--amber-bg)',
        border: '1px solid rgba(251,191,36,0.2)',
        borderRadius: 'var(--r)',
        padding: '12px 16px',
        color: 'var(--amber)',
        fontSize: 13,
      }}
    >
      {children}
    </div>
  )
}

AlertBanner.propTypes = { children: PropTypes.node.isRequired }

