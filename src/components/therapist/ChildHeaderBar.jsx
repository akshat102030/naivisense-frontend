import PropTypes from 'prop-types'

export function ChildHeaderBar({ child }) {
  if (!child) return null
  return (
    <div
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r2)',
        padding: '18px 20px',
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>{child.name}</div>
      <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 6 }}>
        Age {child.age} · {child.condition}
      </div>
    </div>
  )
}

ChildHeaderBar.propTypes = { child: PropTypes.object }

