import { useMemo, useState } from 'react'
import { Panel } from '../../components/common/Panel.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'

export function BehaviorLogsPage() {
  const { selectedChild } = useChild()
  const { behaviorLogs } = useMockData()
  const [severity, setSeverity] = useState('all')

  const logs = useMemo(() => {
    return behaviorLogs
      .filter((x) => x.childId === selectedChild?.id)
      .filter((x) => (severity === 'all' ? true : x.severity === severity))
  }, [behaviorLogs, selectedChild?.id, severity])

  return (
    <Panel title="Behavior Logs" action="Log New Behavior">
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {['all', 'high', 'medium', 'positive'].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSeverity(s)}
            style={{
              border: '1px solid var(--border)',
              background: severity === s ? 'var(--bg4)' : 'var(--bg3)',
              color: severity === s ? 'var(--text)' : 'var(--text2)',
              borderRadius: 8,
              padding: '6px 10px',
              fontSize: 11,
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', fontSize: 10, color: 'var(--text3)' }}>
            <th style={{ padding: '8px 10px' }}>Type</th>
            <th style={{ padding: '8px 10px' }}>Description</th>
            <th style={{ padding: '8px 10px' }}>Time</th>
            <th style={{ padding: '8px 10px' }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td style={{ padding: '10px', borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>
                {log.type}
              </td>
              <td style={{ padding: '10px', borderTop: '1px solid var(--border)', color: 'var(--text)' }}>
                {log.description}
              </td>
              <td style={{ padding: '10px', borderTop: '1px solid var(--border)', color: 'var(--text3)' }}>
                {log.recordedAt}
              </td>
              <td style={{ padding: '10px', borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>
                {log.severity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  )
}

