import PropTypes from 'prop-types'
import { useState } from 'react'

export function SessionNotes({ initialValue = '', onSave }) {
  const [value, setValue] = useState(initialValue)
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: '100%',
          height: 100,
          resize: 'none',
          borderRadius: 10,
          border: '1px solid var(--border)',
          background: 'var(--bg3)',
          padding: 12,
          color: 'var(--text)',
          outline: 'none',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        <button
          type="button"
          onClick={() => onSave?.(value)}
          style={{
            borderRadius: 8,
            border: 'none',
            background: 'var(--teal-accent)',
            color: 'var(--bg)',
            padding: '8px 12px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Save Note →
        </button>
      </div>
    </div>
  )
}

SessionNotes.propTypes = {
  initialValue: PropTypes.string,
  onSave: PropTypes.func,
}

