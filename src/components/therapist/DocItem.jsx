import PropTypes from 'prop-types'
import { memo } from 'react'

function DocItemImpl({ doc }) {
  return (
    <div style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg3)' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{doc.name}</div>
      <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 2 }}>{doc.status}</div>
    </div>
  )
}

DocItemImpl.propTypes = { doc: PropTypes.object.isRequired }

export const DocItem = memo(DocItemImpl)

