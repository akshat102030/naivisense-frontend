import { Panel } from '../../components/common/Panel.jsx'
import { FeedbackVerifyQueue } from '../../components/admin/FeedbackVerifyQueue.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function FeedbackVerificationPage() {
  const { feedbackQueue } = useMockData()
  return (
    <Panel title="Feedback Verification" action="Pending | Verified | Flagged">
      <FeedbackVerifyQueue items={feedbackQueue} />
      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--text3)' }}>
        This data will be used to improve the AI model.
      </div>
    </Panel>
  )
}

