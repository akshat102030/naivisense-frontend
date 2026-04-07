import { Panel } from '../../components/common/Panel.jsx'
import { TherapyPlanCard } from '../../components/parent/TherapyPlanCard.jsx'
import { useChild } from '../../hooks/useChild.js'

export function TherapyPlanPage() {
  const { selectedChild } = useChild()
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <Panel title="Current Therapy Plan">
        <TherapyPlanCard
          title="Speech & Language Therapy"
          description="Focus on vocabulary expansion and command following using structured repetition and visual aids."
          confidence={selectedChild?.aiConfidence ?? 91}
        />
      </Panel>
      <Panel title="Plan Notes">
        <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>
          This therapy plan is generated using behavior logs, therapist sessions and parent feedback.
          Plan updates are reviewed by assigned therapist.
        </div>
      </Panel>
    </div>
  )
}

