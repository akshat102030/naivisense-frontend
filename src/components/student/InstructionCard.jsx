import PropTypes from 'prop-types'

export function InstructionCard({ title, instruction, visualHint, audioHint }) {
  return (
    <div
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: 16,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 8, lineHeight: 1.5 }}>
        {instruction}
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: 'var(--text3)' }}>Visual: {visualHint}</div>
      <div style={{ marginTop: 4, fontSize: 11, color: 'var(--text3)' }}>Audio: {audioHint}</div>
    </div>
  )
}

InstructionCard.propTypes = {
  title: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  visualHint: PropTypes.string.isRequired,
  audioHint: PropTypes.string.isRequired,
}

