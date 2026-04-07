import PropTypes from 'prop-types'
import { memo } from 'react'

function ChatMessageImpl({ message }) {
  return (
    <div style={{ fontSize: 12, color: 'var(--text2)' }}>
      {message.role}: {message.content}
    </div>
  )
}

ChatMessageImpl.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.oneOf(['user', 'ai']).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export const ChatMessage = memo(ChatMessageImpl)

