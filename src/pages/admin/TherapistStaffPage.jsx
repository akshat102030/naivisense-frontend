import { Panel } from '../../components/common/Panel.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function TherapistStaffPage() {
  const { therapists } = useMockData()
  return (
    <Panel title="Therapist Staff" action="Cards layout">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {therapists.map((t) => (
          <div key={t.id} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{t.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 3 }}>{t.specialty}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 8 }}>
              Children: {t.childCount} · Workload: {t.workload}%
            </div>
            <button type="button" style={{ marginTop: 10, width: '100%', border: '1px solid var(--border2)', background: 'transparent', color: 'var(--gold)', borderRadius: 8, padding: '7px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 800 }}>
              Reassign child
            </button>
          </div>
        ))}
      </div>
    </Panel>
  )
}

