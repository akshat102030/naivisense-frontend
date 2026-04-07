import { Panel } from '../../components/common/Panel.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function SessionsPage() {
  const { sessions } = useMockData()
  return (
    <Panel title="Sessions" action="Upcoming + past">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', fontSize: 10, color: 'var(--text3)' }}>
            <th style={{ padding: '8px 10px' }}>Type</th>
            <th style={{ padding: '8px 10px' }}>Therapist</th>
            <th style={{ padding: '8px 10px' }}>Starts At</th>
            <th style={{ padding: '8px 10px' }}>Badge</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id}>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text)' }}>{s.type}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>{s.therapistName}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--text3)' }}>{s.startsAt}</td>
              <td style={{ padding: 10, borderTop: '1px solid var(--border)', color: 'var(--teal-accent)' }}>{s.badge ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  )
}

