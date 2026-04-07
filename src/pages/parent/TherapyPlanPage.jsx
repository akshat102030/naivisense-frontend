import { Panel } from '../../components/common/Panel.jsx'
import { TherapyPlanCard } from '../../components/parent/TherapyPlanCard.jsx'
import { useChild } from '../../hooks/useChild.js'
import { homePlanByChildId } from '../../data/mockHomePlan.js'

export function TherapyPlanPage() {
  const { selectedChild } = useChild()
  const homePlan = homePlanByChildId[selectedChild?.id] ?? homePlanByChildId.c001

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

      <Panel title="Mock Child Profile (Context)" action="Home Plan · 24 Hours">
        <div style={{ display: 'grid', gap: 8 }}>
          <div style={{ fontSize: 13, color: 'var(--text)' }}>
            <strong>Age:</strong> {homePlan.profile.age} years
          </div>
          <div style={{ fontSize: 13, color: 'var(--text)' }}>
            <strong>Condition:</strong> {homePlan.profile.condition}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text)' }}>
            <strong>Goals:</strong> {homePlan.profile.goals.join(' | ')}
          </div>
        </div>
      </Panel>

      <Panel title="24-Hour Home Therapy Timeline">
        <div style={{ display: 'grid', gap: 14 }}>
          {homePlan.timeline.map((block) => (
            <section
              key={block.block}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--r)',
                background: 'var(--bg3)',
                overflow: 'hidden',
              }}
            >
              <header
                style={{
                  padding: '12px 14px',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 8,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)' }}>{block.block}</div>
                <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>{block.window}</div>
              </header>

              <div style={{ display: 'grid', gap: 10, padding: 14 }}>
                {block.items.map((item) => (
                  <div
                    key={`${block.block}-${item.time}-${item.title}`}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: 12,
                      background: 'var(--bg2)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)' }}>
                        {item.time} - {item.title}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 700 }}>
                        {item.type}
                        {item.duration ? ` · ${item.duration}` : ''}
                      </div>
                    </div>
                    <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: 'var(--text2)', fontSize: 12, lineHeight: 1.5 }}>
                      {item.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Panel>

      <Panel title="Sample Daily Diet Chart">
        <div style={{ display: 'grid', gap: 10 }}>
          {homePlan.diet.map((meal) => (
            <details
              key={`${meal.slot}-${meal.time}`}
              open
              style={{
                border: '1px solid var(--border)',
                borderRadius: 10,
                background: 'var(--bg3)',
                padding: '10px 12px',
              }}
            >
              <summary style={{ cursor: 'pointer', fontSize: 12.5, fontWeight: 700, color: 'var(--text)' }}>
                {meal.slot} ({meal.time})
              </summary>
              <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text2)' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>Focus: {meal.focus}</div>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
                  {meal.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </Panel>

      <Panel title="Parent Guidelines">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 12,
          }}
        >
          <div style={{ border: '1px solid var(--red-bg)', borderRadius: 10, padding: 12, background: 'var(--bg3)' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--red)', marginBottom: 6 }}>Avoid</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text2)', fontSize: 12, lineHeight: 1.5 }}>
              {homePlan.guidelines.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ border: '1px solid var(--amber-bg)', borderRadius: 10, padding: 12, background: 'var(--bg3)' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--amber)', marginBottom: 6 }}>Include</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text2)', fontSize: 12, lineHeight: 1.5 }}>
              {homePlan.guidelines.include.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
    </div>
  )
}

