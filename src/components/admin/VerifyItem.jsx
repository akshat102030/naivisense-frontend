import PropTypes from 'prop-types'
import { memo, useState } from 'react'

function VerifyItemImpl({ item, onAction }) {
  const [disabled, setDisabled] = useState(false)

  const act = (action) => {
    if (disabled) return
    setDisabled(true)
    setTimeout(() => onAction?.(item, action), 400)
  }

  return (
    <div
      style={{
        padding: '12px 14px',
        borderRadius: 10,
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        opacity: disabled ? 0.5 : 1,
        transition: 'opacity 0.2s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{item.childName}</div>
        <div style={{ fontSize: 10, color: 'var(--text3)' }}>Session {item.sessionDate}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
        <div style={{ background: 'var(--bg4)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase' }}>Therapist</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: 'var(--cyan)' }}>{item.therapistScore}</div>
        </div>
        <div style={{ background: 'var(--bg4)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase' }}>Parent</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: 'var(--violet)' }}>{item.parentScore}</div>
        </div>
        <div style={{ background: 'var(--bg4)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 9, color: 'var(--text3)', textTransform: 'uppercase' }}>Gap</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: item.gap >= 1 ? 'var(--red)' : 'var(--green)' }}>
            {item.gap}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button
          type="button"
          disabled={disabled}
          onClick={() => act('approved')}
          style={{
            flex: 1,
            borderRadius: 10,
            border: '1px solid rgba(52,211,153,0.2)',
            background: 'transparent',
            color: 'var(--green)',
            padding: '6px 10px',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: 11,
          }}
        >
          ✓ Approve
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => act('flagged')}
          style={{
            flex: 1,
            borderRadius: 10,
            border: '1px solid rgba(251,191,36,0.2)',
            background: 'transparent',
            color: 'var(--amber)',
            padding: '6px 10px',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: 11,
          }}
        >
          ⚑ Flag
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => act('rejected')}
          style={{
            flex: 1,
            borderRadius: 10,
            border: '1px solid rgba(248,113,113,0.2)',
            background: 'transparent',
            color: 'var(--red)',
            padding: '6px 10px',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: 11,
          }}
        >
          ✕ Reject
        </button>
      </div>
    </div>
  )
}

VerifyItemImpl.propTypes = {
  item: PropTypes.object.isRequired,
  onAction: PropTypes.func,
}

export const VerifyItem = memo(VerifyItemImpl)

