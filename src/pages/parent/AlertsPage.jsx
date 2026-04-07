import { Panel } from '../../components/common/Panel.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function AlertsPage() {
  const { anomalies } = useMockData()
  return (
    <Panel title="Alerts" action="All alerts">
      <div style={{ display: 'grid', gap: 10 }}>
        {anomalies.map((a) => (
          <div
            key={a.id}
            style={{
              borderRadius: 10,
              padding: '12px 14px',
              background:
                a.severity === 'critical'
                  ? 'var(--red-bg)'
                  : a.severity === 'warning'
                    ? 'var(--amber-bg)'
                    : 'var(--cyan-bg)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{a.title}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 3 }}>{a.description}</div>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 5 }}>{a.detectedAt}</div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

