import { Link } from 'react-router-dom'
import { MoodSelector } from '../../components/common/MoodSelector.jsx'
import { Panel } from '../../components/common/Panel.jsx'
import { StatCard } from '../../components/common/StatCard.jsx'
import { VoiceDock } from '../../components/student/VoiceDock.jsx'
import { useChild } from '../../hooks/useChild.js'

export function StudentOverviewPage() {
  const { selectedChild } = useChild()

  const tasks = [
    { id: 't1', title: 'Speech Matching', duration: '10 min', difficulty: 'Easy' },
    { id: 't2', title: 'Motor Coordination', duration: '12 min', difficulty: 'Medium' },
    { id: 't3', title: 'Social Turn Taking', duration: '8 min', difficulty: 'Easy' },
  ]

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        <StatCard label="Daily Goal" value="3 tasks" subtext="Small steps today" />
        <StatCard label="Streak" value="6 days" subtext="Great consistency" />
        <StatCard label="Mood" value="🙂" subtext="Checked in" />
      </div>

      <Panel
        title={`Hi ${selectedChild?.name?.split(' ')[0] ?? 'Student'}! Today’s Therapy Tasks`}
        action={<Link to="/student/session">Start session →</Link>}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {tasks.map((task) => (
            <div key={task.id} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{task.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
                {task.duration} · {task.difficulty}
              </div>
              <Link
                to="/student/session"
                style={{
                  marginTop: 10,
                  display: 'inline-block',
                  padding: '7px 10px',
                  borderRadius: 8,
                  background: 'var(--green)',
                  color: 'var(--bg)',
                  fontSize: 11,
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                Start
              </Link>
            </div>
          ))}
        </div>
      </Panel>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Panel title="Mood Check-In">
          <MoodSelector />
        </Panel>
        <Panel title="Voice Support">
          <VoiceDock state="idle" />
        </Panel>
      </div>
    </div>
  )
}

