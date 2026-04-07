import PropTypes from 'prop-types'
import { useState } from 'react'

export function ClinicalFeedback({ onSubmit }) {
  const [chip, setChip] = useState('On track')
  const [score, setScore] = useState(7)
  const [text, setText] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.({ chip, score, text })
      }}
    >
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['On track', 'Improved', 'Regression', 'Adjust plan'].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setChip(c)}
            style={{
              flex: '1 0 45%',
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: chip === c ? 'var(--teal-glow)' : 'var(--bg3)',
              color: chip === c ? 'var(--teal-accent)' : 'var(--text2)',
              cursor: 'pointer',
              fontSize: 11,
              fontWeight: 800,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--text3)' }}>Clinical score (1–10)</div>
      <input
        type="range"
        min="1"
        max="10"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        style={{ width: '100%', marginTop: 8 }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text3)', marginBottom: 10 }}>
        <span>1</span>
        <span style={{ color: 'var(--teal-accent)', fontWeight: 800 }}>{score}</span>
        <span>10</span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Clinical observations…"
        style={{
          width: '100%',
          height: 64,
          resize: 'none',
          borderRadius: 10,
          border: '1px solid var(--border)',
          background: 'var(--bg3)',
          padding: '10px 12px',
          color: 'var(--text)',
          outline: 'none',
        }}
      />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <button
          type="button"
          style={{
            flex: 1,
            borderRadius: 10,
            border: '1px solid var(--border2)',
            background: 'transparent',
            color: 'var(--text2)',
            padding: '8px 12px',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: 12,
          }}
        >
          Save Draft
        </button>
        <button
          type="submit"
          style={{
            flex: 1,
            borderRadius: 10,
            border: 'none',
            background: 'var(--teal-accent)',
            color: 'var(--bg)',
            padding: '8px 12px',
            cursor: 'pointer',
            fontWeight: 900,
            fontSize: 12,
          }}
        >
          Submit →
        </button>
      </div>
    </form>
  )
}

ClinicalFeedback.propTypes = { onSubmit: PropTypes.func }

