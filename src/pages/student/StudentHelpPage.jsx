import { Panel } from '../../components/common/Panel.jsx'

export function StudentHelpPage() {
  return (
    <Panel title="Help & Support">
      <div style={{ display: 'grid', gap: 8 }}>
        <HelpCard title="Need a break?" desc="Tap pause during session anytime." />
        <HelpCard title="Need instructions again?" desc="Use Repeat in each step." />
        <HelpCard title="Need a person?" desc="Ask therapist or parent for live help." />
      </div>
    </Panel>
  )
}

function HelpCard({ title, desc }) {
  return (
    <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 4 }}>{desc}</div>
    </div>
  )
}

