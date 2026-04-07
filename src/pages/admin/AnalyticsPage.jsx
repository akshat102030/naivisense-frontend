import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { SessionBarChart } from '../../components/charts/SessionBarChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'

export function AnalyticsPage() {
  const trend = [
    { month: 'Nov', overall: 62 },
    { month: 'Dec', overall: 65 },
    { month: 'Jan', overall: 68 },
    { month: 'Feb', overall: 70 },
    { month: 'Mar', overall: 71 },
    { month: 'Apr', overall: 73 },
  ]
  const bar = Array.from({ length: 12 }, (_, i) => ({
    day: i + 1,
    speech: 4 + (i % 3),
    ot: 3 + (i % 2),
    social: 2 + (i % 2),
  }))
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Panel title="Total Sessions Per Week">
        <ProgressLineChart data={trend} />
      </Panel>
      <Panel title="Anomaly Frequency Over Time">
        <SessionBarChart data={bar} />
      </Panel>
    </div>
  )
}

