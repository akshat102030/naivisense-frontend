import PropTypes from 'prop-types'
import { useState } from 'react'

export function FeedbackForm({ onSubmit }) {
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.({ rating, text })
        setText('')
      }}
    >
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setRating(n)}
            style={{
              fontSize: 18,
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: n <= rating ? 'var(--amber)' : 'var(--text3)',
            }}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Observations…"
        style={{
          width: '100%',
          height: 70,
          resize: 'none',
          borderRadius: 8,
          border: '1px solid var(--border)',
          background: 'var(--bg3)',
          padding: '10px 12px',
          color: 'var(--text)',
          outline: 'none',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <div style={{ fontSize: 11, color: 'var(--text3)' }}>Feeds the AI learning system</div>
        <button
          type="submit"
          style={{
            borderRadius: 8,
            border: 'none',
            background: 'var(--accent)',
            color: '#fff',
            padding: '8px 12px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Submit →
        </button>
      </div>
    </form>
  )
}

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func,
}

