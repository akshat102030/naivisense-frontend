import PropTypes from 'prop-types'
import { TherapistRow } from './TherapistRow.jsx'

export function TherapistTable({ therapists }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left', fontSize: 10, color: 'var(--text3)' }}>
          <th style={{ padding: '8px 12px' }}>Therapist</th>
          <th style={{ padding: '8px 12px' }}>Workload</th>
          <th style={{ padding: '8px 12px' }}>Children</th>
          <th style={{ padding: '8px 12px' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {therapists?.map((t) => (
          <TherapistRow key={t.id} therapist={t} />
        ))}
      </tbody>
    </table>
  )
}

TherapistTable.propTypes = { therapists: PropTypes.array }

