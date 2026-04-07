import { useState } from 'react'
import { AlertBanner } from '../../components/common/AlertBanner.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { StatCard } from '../../components/common/StatCard.jsx'
import { DomainProgressBars } from '../../components/charts/DomainProgressBars.jsx'
import { ProgressLineChart } from '../../components/charts/ProgressLineChart.jsx'
import { AIChat } from '../../components/parent/AIChat.jsx'
import { BehaviorLogList } from '../../components/parent/BehaviorLogList.jsx'
import { FeedbackForm } from '../../components/parent/FeedbackForm.jsx'
import { TherapyPlanCard } from '../../components/parent/TherapyPlanCard.jsx'
import { UpcomingSession } from '../../components/parent/UpcomingSession.jsx'
import { useChild } from '../../hooks/useChild.js'
import { useMockData } from '../../hooks/useMockData.js'
import { homePlanByChildId } from '../../data/mockHomePlan.js'

export function ParentOverviewPage() {
  const { selectedChild } = useChild()
  const { progressHistory, behaviorLogs, sessions } = useMockData()
  const homePlan = homePlanByChildId[selectedChild?.id] ?? homePlanByChildId.c001
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content:
        "Hi Rahul! Aryan has shown improvement in command following this week. Would you like a summary?",
    },
    { role: 'user', content: 'Why is he having more tantrums suddenly?' },
    {
      role: 'ai',
      content:
        "Based on logs, routine disruption is likely. The system has flagged this for Dr. Priya's review.",
    },
  ])

  const progressData = progressHistory[selectedChild?.id] ?? []
  const childLogs = behaviorLogs.filter((x) => x.childId === selectedChild?.id).slice(0, 4)
  const childSessions = sessions.filter((x) => x.childId === selectedChild?.id).slice(0, 2)

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <AlertBanner>
          <strong>Behavioral alert:</strong> Unusual increase in tantrum frequency detected over the
          past 3 days. Therapist has been notified.
        </AlertBanner>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        <StatCard label="Overall Progress" value={`${selectedChild?.progress?.overall ?? 0}%`} subtext="↑ 8% this month" />
        <StatCard label="Sessions Done" value={selectedChild?.sessionCount ?? 0} subtext="↑ 3 vs last month" />
        <StatCard label="Behavior Alerts" value={selectedChild?.hasAlert ? 2 : 0} subtext="Active this week" />
        <StatCard label="Therapy Match" value={`${selectedChild?.aiConfidence ?? 0}%`} subtext="AI confidence score" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 18, marginBottom: 20 }}>
        <Panel title="Progress Trend" action="Last 6 months">
          <ProgressLineChart data={progressData} />
          <div style={{ marginTop: 12 }}>
            <DomainProgressBars progress={selectedChild?.progress} />
          </div>
        </Panel>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Panel title="Current Therapy Plan" action="View all">
            <TherapyPlanCard
              title="Speech & Language Therapy"
              description="Focus on vocabulary expansion and command following using structured repetition and visual aids."
              confidence={selectedChild?.aiConfidence ?? 91}
            />
          </Panel>
          <Panel title="24-Hour Home Plan" action="View full in Therapy Plan">
            <div style={{ display: 'grid', gap: 8 }}>
              {homePlan.timeline.slice(0, 3).map((block) => (
                <div
                  key={block.block}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    background: 'var(--bg3)',
                    padding: '10px 12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{block.block}</div>
                    <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 700 }}>{block.window}</div>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 12, color: 'var(--text2)' }}>
                    {block.items[0]?.time} - {block.items[0]?.title}
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>
                Includes speech, OT, ABA, sensory play, social practice, and day-wise diet chart.
              </div>
            </div>
          </Panel>
          <Panel title="Upcoming Sessions">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {childSessions.map((s) => (
                <UpcomingSession key={s.id} session={s} />
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <Panel title="Recent Behavior Logs" action="Log new +">
          <BehaviorLogList items={childLogs} />
        </Panel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Panel title="AI Assistant" action="Full chat →">
            <AIChat
              messages={messages}
              onSend={(text) => setMessages((m) => [...m, { role: 'user', content: text }])}
            />
          </Panel>
          <Panel title="Submit Feedback" action="Session · Mar 28">
            <FeedbackForm onSubmit={() => {}} />
          </Panel>
        </div>
      </div>
    </div>
  )
}

