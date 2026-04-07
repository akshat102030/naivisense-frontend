import PropTypes from 'prop-types'

export function Panel({ title, action, children }) {
  return (
    <section
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r2)',
        overflow: 'hidden',
      }}
    >
      {(title || action) && (
        <header
          style={{
            padding: '14px 18px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text)' }}>{title}</div>
          {action ? (
            <div style={{ fontSize: 11.5, color: 'var(--text2)' }}>{action}</div>
          ) : null}
        </header>
      )}
      <div style={{ padding: 18 }}>{children}</div>
    </section>
  )
}

Panel.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.node,
}

