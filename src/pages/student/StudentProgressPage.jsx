import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'

export function StudentProgressPage() {
  const { selectedChild } = useChild()
  const { progressHistory } = useMockData()
  const data = progressHistory[selectedChild?.id] ?? []

  return (
    <Panel title="My Progress" action="Last 6 months">
      <ProgressLineChart data={data} />
    </Panel>
  )
}

