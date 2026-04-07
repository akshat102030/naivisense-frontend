import { Panel } from '../../components/common/Panel.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function BehaviorLogsPage() {
  const { behaviorLogs } = useMockData()
  return (
    <Panel title="Behavior Logs" action="Clinical view">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', fontSize: 10, color: 'var(--text3)' }}>
            <th style={{ padding: '8px 10px' }}>Child</th>
            <th style={{ padding: '8px 10px' }}>Type</th>
            <th style={{ padding: '8px 10px' }}>Description</th>
            <th style={{ padding: '8px 10px' }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          {behaviorLogs.map((log) => (
            <tr key={log.id}>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>{log.childId}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>{log.type}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text)' }}>{log.description}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>{log.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  )
}

