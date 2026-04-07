import { Panel } from '../../components/common/Panel.jsx'

export function ReportsPage() {
  return (
    <Panel title="Reports" action="Generate / Export">
      <div style={{ display: 'grid', gap: 10 }}>
        {[
          'Monthly Center Performance Report',
          'Therapist Workload Distribution',
          'Anomaly and Escalation Summary',
          'AI Model Accuracy and Drift',
        ].map((r) => (
          <div key={r} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'var(--text2)' }}>{r}</span>
            <button type="button" style={{ border: '1px solid var(--border2)', background: 'transparent', color: 'var(--gold)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 800 }}>
              Export
            </button>
          </div>
        ))}
      </div>
    </Panel>
  )
}

