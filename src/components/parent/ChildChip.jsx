import PropTypes from 'prop-types'

export function ChildChip({ child }) {
  return <div style={{ fontSize: 12, color: 'var(--text3)' }}>{child?.name ?? 'Child'}</div>
}

ChildChip.propTypes = { child: PropTypes.object }

