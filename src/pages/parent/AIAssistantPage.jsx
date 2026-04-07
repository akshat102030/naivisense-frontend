import { useState } from 'react'
import { Panel } from '../../components/common/Panel.jsx'
import { AIChat } from '../../components/parent/AIChat.jsx'
import { useChild } from '../../hooks/useChild.js'

export function AIAssistantPage() {
  const { selectedChild } = useChild()
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'How can I help with today’s therapy plan?' },
  ])

  return (
    <Panel
      title="AI Assistant"
      action={
        <span style={{ fontSize: 11, color: 'var(--text3)' }}>
          Asking about: {selectedChild?.name} ({selectedChild?.condition})
        </span>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 14, minHeight: 460 }}>
        <div style={{ borderRight: '1px solid var(--border)', paddingRight: 12 }}>
          <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 8 }}>Conversations</div>
          <div style={{ display: 'grid', gap: 8 }}>
            {['Today', 'Yesterday', 'Mar 28'].map((d) => (
              <div key={d} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px' }}>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>{d}</div>
                <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>Why sudden tantrums?</div>
              </div>
            ))}
          </div>
        </div>
        <AIChat
          messages={messages}
          onSend={(text) =>
            setMessages((prev) => [...prev, { role: 'user', content: text }, { role: 'ai', content: 'Thanks, I noted that. I suggest tracking triggers before transitions.' }])
          }
        />
      </div>
    </Panel>
  )
}

