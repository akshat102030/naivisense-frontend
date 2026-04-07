import { useState } from 'react'
import { GaugeChart } from '../../components/charts/GaugeChart.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { AnomalyAlerts } from '../../components/therapist/AnomalyAlerts.jsx'
import { BehaviorHeatmap } from '../../components/therapist/BehaviorHeatmap.jsx'
import { ChildHeaderBar } from '../../components/therapist/ChildHeaderBar.jsx'
import { ClinicalFeedback } from '../../components/therapist/ClinicalFeedback.jsx'
import { DocumentUpload } from '../../components/therapist/DocumentUpload.jsx'
import { MiniStats } from '../../components/therapist/MiniStats.jsx'
import { SessionNotes } from '../../components/therapist/SessionNotes.jsx'
import { TherapyPlanEditor } from '../../components/therapist/TherapyPlanEditor.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'

const tabs = ['Overview', 'Therapy Plan', 'Behavior Logs', 'Documents', 'Feedback']

export function TherapistOverviewPage() {
  const { selectedChild } = useChild()
  const { anomalies } = useMockData()
  const [activeTab, setActiveTab] = useState('Overview')

  const samplePlan = [
    {
      id: 'p1',
      title: 'Speech & Language Therapy',
      description:
        'Vocabulary expansion using structured repetition, visual flashcards and AAC practice.',
    },
    {
      id: 'p2',
      title: 'Occupational Therapy - Fine Motor',
      description: 'Hand-eye coordination exercises using peg boards and putty.',
    },
    {
      id: 'p3',
      title: 'Social Skills Group',
      description: 'Peer interaction sessions and role-play exercises.',
    },
  ]

  const sampleDocs = [
    { id: 'd1', name: 'DS_SpeechProtocol_2024.pdf', status: 'Indexed' },
    { id: 'd2', name: 'ABA_Guidelines_v3.pdf', status: 'Indexed' },
    { id: 'd3', name: 'MotorSkills_Framework.docx', status: 'Processing' },
  ]

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <ChildHeaderBar child={selectedChild} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: 2,
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r)',
          padding: 3,
          width: 'fit-content',
          marginBottom: 20,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            style={{
              borderRadius: 7,
              padding: '7px 16px',
              border: activeTab === tab ? '1px solid var(--border2)' : '1px solid transparent',
              background: activeTab === tab ? 'var(--bg4)' : 'transparent',
              color: activeTab === tab ? 'var(--text)' : 'var(--text2)',
              cursor: 'pointer',
              fontSize: 12.5,
              fontWeight: 700,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 18 }}>
        <div>
          <div style={{ marginBottom: 16 }}>
            <Panel title="Behavior Activity · Last 4 Weeks" action="View full log">
              <BehaviorHeatmap data={new Array(28).fill(0)} />
            </Panel>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Panel title="Active Therapy Plan" action="AI confidence: 91%">
              <TherapyPlanEditor items={samplePlan} />
            </Panel>
          </div>
          <Panel title="Session Notes" action="Today · Mar 30, 2025">
            <SessionNotes
              initialValue="Aryan responded well to visual flashcard exercise today. Successfully followed 3-step commands on 4/5 attempts."
            />
          </Panel>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Panel title="Overall Score" action="This month">
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <GaugeChart value={selectedChild?.progress?.overall ?? 74} />
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, textAlign: 'center', marginTop: 4 }}>
              {selectedChild?.progress?.overall ?? 74}%
            </div>
            <div style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center', marginTop: 2 }}>
              Composite progress score
            </div>
            <div style={{ marginTop: 14 }}>
              <MiniStats stats={selectedChild?.progress} />
            </div>
          </Panel>

          <Panel title="Anomaly Alerts" action="Dismiss all">
            <AnomalyAlerts items={anomalies.slice(0, 3)} />
          </Panel>

          <Panel title="RAG Documents" action="Manage →">
            <DocumentUpload initialDocs={sampleDocs} />
          </Panel>

          <Panel title="Clinical Feedback" action="Session · Mar 30">
            <ClinicalFeedback />
          </Panel>
        </div>
      </div>
    </div>
  )
}

