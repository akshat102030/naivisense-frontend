import { Panel } from '../../components/common/Panel.jsx'
import { AnomalyAlerts } from '../../components/therapist/AnomalyAlerts.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function AnomalyAlertsPage() {
  const { anomalies } = useMockData()
  return (
    <Panel title="Anomaly Alerts">
      <AnomalyAlerts items={anomalies} />
    </Panel>
  )
}

