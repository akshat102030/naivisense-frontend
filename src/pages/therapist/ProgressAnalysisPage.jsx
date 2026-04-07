import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'

export function ProgressAnalysisPage() {
  const { selectedChild } = useChild()
  const { progressHistory } = useMockData()
  const rows = progressHistory[selectedChild?.id] ?? []

  const domains = ['communication', 'motor', 'social', 'compliance']
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {domains.map((d) => (
          <Panel key={d} title={`${d[0].toUpperCase()}${d.slice(1)} Trend`}>
            <ProgressLineChart data={rows.map((r) => ({ month: r.month, overall: r[d] }))} />
          </Panel>
        ))}
      </div>
      <Panel title="Milestones">
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            'Followed 3-step command independently',
            'Reduced tantrum duration by 20%',
            'Improved peer interaction in group sessions',
          ].map((m, idx) => (
            <div key={idx} style={{ fontSize: 12, color: 'var(--text2)' }}>
              • {m}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

