import PropTypes from 'prop-types'
import { useState } from 'react'

const moods = [
  { id: 'great', emoji: '😊', label: 'Great' },
  { id: 'ok', emoji: '🙂', label: 'Okay' },
  { id: 'low', emoji: '😔', label: 'Low' },
]

export function MoodSelector({ value, onChange }) {
  const [internal, setInternal] = useState(value ?? 'ok')
  const current = value ?? internal

  return (
    <div>
      <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 8 }}>How do you feel now?</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {moods.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => {
              setInternal(m.id)
              onChange?.(m.id)
            }}
            aria-pressed={current === m.id}
            style={{
              minHeight: 44,
              minWidth: 90,
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: current === m.id ? 'var(--bg4)' : 'var(--bg3)',
              color: current === m.id ? 'var(--text)' : 'var(--text2)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 20 }}>{m.emoji}</span>
            <span style={{ fontSize: 11 }}>{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

MoodSelector.propTypes = {
  value: PropTypes.oneOf(['great', 'ok', 'low']),
  onChange: PropTypes.func,
}

