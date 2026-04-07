import PropTypes from 'prop-types'
import { useChild } from '../../hooks/useChild.js'

export function ChildSwitcher({ childrenList }) {
  const { selectedChild, setSelectedChild } = useChild()
  const list = childrenList ?? []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {list.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => setSelectedChild(c)}
          style={{
            textAlign: 'left',
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid var(--border)',
            background: selectedChild?.id === c.id ? 'var(--bg4)' : 'var(--bg3)',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700 }}>{c.name}</div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>{c.condition}</div>
        </button>
      ))}
    </div>
  )
}

ChildSwitcher.propTypes = {
  childrenList: PropTypes.array,
}

