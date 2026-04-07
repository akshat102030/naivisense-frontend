import PropTypes from 'prop-types'
import { useState } from 'react'
import { DocItem } from './DocItem.jsx'

export function DocumentUpload({ initialDocs = [] }) {
  const [docs] = useState(initialDocs)
  return (
    <div>
      <div
        style={{
          border: '1.5px dashed var(--border2)',
          borderRadius: 'var(--r)',
          padding: 20,
          textAlign: 'center',
          marginBottom: 12,
          color: 'var(--text2)',
        }}
      >
        Drop therapy docs here (mock)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {docs.map((d) => (
          <DocItem key={d.id ?? d.name} doc={d} />
        ))}
      </div>
    </div>
  )
}

DocumentUpload.propTypes = {
  initialDocs: PropTypes.array,
}

