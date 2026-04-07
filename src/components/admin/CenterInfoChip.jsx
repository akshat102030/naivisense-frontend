import PropTypes from 'prop-types'

export function CenterInfoChip({ name, location, status }) {
  return (
    <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '12px 14px' }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{name}</div>
      <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 4 }}>
        {status} · {location}
      </div>
    </div>
  )
}

CenterInfoChip.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

