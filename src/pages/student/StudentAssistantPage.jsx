import { useState } from 'react'
import { AIChat } from '../../components/parent/AIChat.jsx'
import { Panel } from '../../components/common/Panel.jsx'

export function StudentAssistantPage() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I can help you with the next therapy step. Want me to explain it simply?' },
  ])

  return (
    <Panel title="Student AI Assistant">
      <AIChat
        messages={messages}
        onSend={(text) =>
          setMessages((m) => [
            ...m,
            { role: 'user', content: text },
            { role: 'ai', content: 'Great job asking! Let us do one step at a time together.' },
          ])
        }
      />
    </Panel>
  )
}

