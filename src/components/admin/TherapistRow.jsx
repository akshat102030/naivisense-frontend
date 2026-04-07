import PropTypes from 'prop-types'
import { memo } from 'react'

function TherapistRowImpl({ therapist }) {
  return (
    <tr>
      <td style={{ padding: '10px 12px' }}>{therapist.name}</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{therapist.workload}%</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{therapist.childCount}</td>
      <td style={{ padding: '10px 12px', color: 'var(--text2)' }}>{therapist.status}</td>
    </tr>
  )
}

TherapistRowImpl.propTypes = { therapist: PropTypes.object.isRequired }

export const TherapistRow = memo(TherapistRowImpl)

