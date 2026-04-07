import { useState } from 'react'
import { Panel } from '../../components/common/Panel.jsx'
import { AIChat } from '../../components/parent/AIChat.jsx'

export function AIInsightsPage() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'I can summarize trends from uploaded therapy documents.' },
  ])
  return (
    <Panel title="AI Insights" action="RAG-enabled chat">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 14, minHeight: 460 }}>
        <AIChat
          messages={messages}
          onSend={(text) =>
            setMessages((m) => [...m, { role: 'user', content: text }, { role: 'ai', content: 'Insight: compliance dip correlates with routine-transition logs.' }])
          }
        />
        <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 12 }}>
          <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 8 }}>Context Sources</div>
          {['DS_SpeechProtocol_2024.pdf', 'ABA_Guidelines_v3.pdf', 'MotorSkills_Framework.docx'].map((d) => (
            <div key={d} style={{ padding: '7px 9px', borderRadius: 8, background: 'var(--bg3)', border: '1px solid var(--border)', fontSize: 11, color: 'var(--text2)', marginBottom: 8 }}>
              {d}
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}

