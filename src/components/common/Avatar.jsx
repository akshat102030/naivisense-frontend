import PropTypes from 'prop-types'

export function Avatar({ name, variant }) {
  const initial = (name?.trim?.()?.[0] ?? 'U').toUpperCase()
  const bg =
    variant === 'admin'
      ? 'linear-gradient(135deg,var(--gold),var(--amber))'
      : variant === 'therapist'
        ? 'linear-gradient(135deg,var(--teal-accent),var(--cyan))'
        : variant === 'student'
          ? 'linear-gradient(135deg,var(--green),var(--teal-accent))'
          : 'linear-gradient(135deg,var(--accent),var(--violet))'

  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: variant === 'admin' ? 10 : 999,
        display: 'grid',
        placeItems: 'center',
        color: variant === 'admin' ? 'var(--bg)' : '#fff',
        fontWeight: 700,
        background: bg,
        flexShrink: 0,
      }}
      aria-label={name}
      title={name}
    >
      {initial}
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['student', 'parent', 'therapist', 'admin']).isRequired,
}

