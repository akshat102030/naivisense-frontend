import PropTypes from 'prop-types'
import { ChildrenRow } from './ChildrenRow.jsx'

export function ChildrenTable({ children }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left', fontSize: 10, color: 'var(--text3)' }}>
          <th style={{ padding: '8px 12px' }}>Child</th>
          <th style={{ padding: '8px 12px' }}>Condition</th>
          <th style={{ padding: '8px 12px' }}>Progress</th>
          <th style={{ padding: '8px 12px' }}>Alert</th>
        </tr>
      </thead>
      <tbody>
        {children?.map((c) => (
          <ChildrenRow key={c.id} child={c} />
        ))}
      </tbody>
    </table>
  )
}

ChildrenTable.propTypes = { children: PropTypes.array }

