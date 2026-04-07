import { DomainProgressBars } from '../../components/charts/DomainProgressBars.jsx'
import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'

export function ParentProgressPage() {
  const { selectedChild } = useChild()
  const { progressHistory } = useMockData()
  const data = progressHistory[selectedChild?.id] ?? []

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <Panel title="Progress Trend" action="Last 6 months">
        <ProgressLineChart data={data} />
      </Panel>
      <Panel title="Domain Breakdown">
        <DomainProgressBars progress={selectedChild?.progress} />
      </Panel>
    </div>
  )
}

