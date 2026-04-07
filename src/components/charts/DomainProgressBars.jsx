import PropTypes from 'prop-types'
import { ProgressBar } from '../common/ProgressBar.jsx'

export function DomainProgressBars({ progress }) {
  if (!progress) return null
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <ProgressBar label="Communication" percent={progress.communication ?? 0} />
      <ProgressBar label="Motor" percent={progress.motor ?? 0} />
      <ProgressBar label="Social" percent={progress.social ?? 0} />
      <ProgressBar label="Compliance" percent={progress.compliance ?? 0} />
    </div>
  )
}

DomainProgressBars.propTypes = {
  progress: PropTypes.object,
}

