import { SessionBarChart } from '../../components/charts/SessionBarChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { AIModelHealth } from '../../components/admin/AIModelHealth.jsx'
import { ActivityFeed } from '../../components/admin/ActivityFeed.jsx'
import { AnomalyQueue } from '../../components/admin/AnomalyQueue.jsx'
import { ChildrenTable } from '../../components/admin/ChildrenTable.jsx'
import { FeedbackVerifyQueue } from '../../components/admin/FeedbackVerifyQueue.jsx'
import { KPIRibbon } from '../../components/admin/KPIRibbon.jsx'
import { TherapistTable } from '../../components/admin/TherapistTable.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function AdminOverviewPage() {
  const { children, therapists, feedbackQueue, anomalies } = useMockData()

  const kpis = [
    { label: 'Total Children', value: 34 },
    { label: 'Active Therapists', value: 6 },
    { label: 'Avg Progress', value: '71%' },
    { label: 'Open Anomalies', value: 3 },
    { label: 'Pending Verif.', value: 5 },
    { label: 'AI Accuracy', value: '89%' },
  ]

  const sessionData = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1
    const weekday = day % 7 === 6 || day % 7 === 0
    return {
      day,
      speech: weekday ? 0 : 4 + (day % 5),
      ot: weekday ? 0 : 3 + (day % 4),
      social: weekday ? 0 : 2 + (day % 3),
    }
  })

  const feedItems = [
    {
      id: 'f1',
      title: 'Anomaly flagged: Tantrum spike detected for Aryan Mehta',
      time: '2 min ago',
      actor: 'AI System',
      color: 'var(--red)',
    },
    {
      id: 'f2',
      title: 'Feedback submitted by Dr. Priya for Aryan - Score 4.1',
      time: '18 min ago',
      actor: 'Dr. Priya Nair',
      color: 'var(--gold)',
    },
    {
      id: 'f3',
      title: 'New therapy plan generated for Kabir Mehta - Confidence 86%',
      time: '1 hr ago',
      actor: 'Prediction Engine',
      color: 'var(--cyan)',
    },
    {
      id: 'f4',
      title: 'Parent feedback approved for Sara Kulkarni - added to training data',
      time: '2 hr ago',
      actor: 'Admin System',
      color: 'var(--green)',
    },
    {
      id: 'f5',
      title: 'Document "ABA_Guidelines_v3.pdf" indexed into RAG vector store',
      time: '3 hr ago',
      actor: 'Dr. Priya Nair',
      color: 'var(--violet)',
    },
    {
      id: 'f6',
      title: 'Session notes logged for Rohan Verma - compliance concern noted',
      time: '4 hr ago',
      actor: 'Dr. Meera K.',
      color: 'var(--amber)',
    },
  ]

  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <KPIRibbon items={kpis} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 320px', gap: 18, marginBottom: 18 }}>
        <Panel title="Sessions This Month" action="Weekly">
          <SessionBarChart data={sessionData} />
          <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />
          <TherapistTable therapists={therapists} />
        </Panel>

        <Panel title="Feedback Verification Queue" action={<span style={{ color: 'var(--gold)' }}>5 pending</span>}>
          <FeedbackVerifyQueue items={feedbackQueue.slice(0, 3)} />
        </Panel>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Panel title="Anomaly Queue" action="View all">
            <AnomalyQueue items={anomalies} />
          </Panel>
          <Panel title="AI Model Health">
            <AIModelHealth />
          </Panel>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <Panel title="All Children" action="View all →">
          <ChildrenTable children={children.slice(0, 5)} />
        </Panel>
        <Panel title="Live Activity Feed">
          <ActivityFeed items={feedItems} />
        </Panel>
      </div>
    </div>
  )
}

