import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { AIModelHealth } from '../../components/admin/AIModelHealth.jsx'

export function ModelHealthPage() {
  const trend = [
    { month: 'R1', overall: 78 },
    { month: 'R2', overall: 80 },
    { month: 'R3', overall: 82 },
    { month: 'R4', overall: 84 },
    { month: 'R5', overall: 86 },
    { month: 'R6', overall: 89 },
  ]
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Panel title="Prediction Accuracy Trend">
        <ProgressLineChart data={trend} />
      </Panel>
      <Panel title="AI Model Health">
        <AIModelHealth />
      </Panel>
    </div>
  )
}

