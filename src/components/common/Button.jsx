import PropTypes from 'prop-types'

export function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  const stylesByVariant = {
    primary: { background: 'var(--accent)', color: '#fff', border: 'none' },
    ghost: { background: 'transparent', color: 'var(--text2)', border: '1px solid var(--border2)' },
    outline: { background: 'transparent', color: 'var(--text2)', border: '1px solid var(--border2)' },
    gold: { background: 'var(--gold)', color: 'var(--bg)', border: 'none' },
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        borderRadius: 8,
        padding: '8px 14px',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: 12,
        transition: 'transform 0.15s',
        ...stylesByVariant[variant],
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'ghost', 'outline', 'gold']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
}

