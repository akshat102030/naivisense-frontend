import PropTypes from 'prop-types'

export function VoiceDock({ state = 'idle', onToggle }) {
  const label =
    state === 'listening'
      ? 'Listening...'
      : state === 'speaking'
        ? 'Speaking...'
        : state === 'processing'
          ? 'Processing...'
          : 'Tap to Speak'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '10px 12px',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: 46,
          height: 46,
          borderRadius: 999,
          border: 'none',
          background: state === 'idle' ? 'var(--green)' : 'var(--teal-accent)',
          color: 'var(--bg)',
          fontSize: 20,
          cursor: 'pointer',
        }}
        aria-label="Toggle voice interaction"
      >
        🎙️
      </button>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>Voice Assist</div>
        <div style={{ fontSize: 11, color: 'var(--text2)' }}>{label}</div>
      </div>
    </div>
  )
}

VoiceDock.propTypes = {
  state: PropTypes.oneOf(['idle', 'listening', 'processing', 'speaking']),
  onToggle: PropTypes.func,
}

