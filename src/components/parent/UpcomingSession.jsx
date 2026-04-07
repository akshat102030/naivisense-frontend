import PropTypes from 'prop-types'

export function UpcomingSession({ session }) {
  return (
    <div style={{ padding: 12, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg3)' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{session.type}</div>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{session.startsAt}</div>
    </div>
  )
}

UpcomingSession.propTypes = { session: PropTypes.object.isRequired }

