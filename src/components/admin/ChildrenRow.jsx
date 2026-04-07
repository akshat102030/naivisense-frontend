import PropTypes from 'prop-types'
import { memo } from 'react'

function ChildrenRowImpl({ child }) {
  return (
    <tr>
      <td style={{ padding: '10px 12px' }}>{child.name}</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{child.condition}</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{child.progress?.overall ?? 0}%</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{child.hasAlert ? 'Active' : 'Clear'}</td>
    </tr>
  )
}

ChildrenRowImpl.propTypes = { child: PropTypes.object.isRequired }

export const ChildrenRow = memo(ChildrenRowImpl)

