import { useState } from 'react'
import { Panel } from '../../components/common/Panel.jsx'
import { AnomalyQueue } from '../../components/admin/AnomalyQueue.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function AnomalyReviewPage() {
  const { anomalies } = useMockData()
  const [tab, setTab] = useState('critical')
  const filtered = anomalies.filter((a) => a.severity === tab)

  return (
    <Panel title="Anomaly Review">
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {['critical', 'warning', 'info'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={{
              border: '1px solid var(--border)',
              background: tab === t ? 'var(--bg4)' : 'var(--bg3)',
              color: tab === t ? 'var(--text)' : 'var(--text2)',
              borderRadius: 8,
              padding: '6px 10px',
              fontSize: 11,
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <AnomalyQueue items={filtered} />
    </Panel>
  )
}

