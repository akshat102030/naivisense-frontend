import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from './ChatMessage.jsx'

export function AIChat({ messages, onSend }) {
  const [text, setText] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ behavior: 'smooth' })
  }, [messages?.length])

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 220, overflowY: 'auto' }}>
        {messages?.map((m, idx) => <ChatMessage key={idx} message={m} />)}
        <div ref={endRef} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && text.trim()) {
              onSend(text.trim())
              setText('')
            }
          }}
          placeholder="Ask…"
          style={{
            flex: 1,
            borderRadius: 8,
            border: '1px solid var(--border)',
            background: 'var(--bg3)',
            padding: '9px 12px',
            color: 'var(--text)',
            outline: 'none',
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (!text.trim()) return
            onSend(text.trim())
            setText('')
          }}
          style={{ width: 36, borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
        >
          →
        </button>
      </div>
    </div>
  )
}

AIChat.propTypes = {
  messages: PropTypes.array,
  onSend: PropTypes.func.isRequired,
}

