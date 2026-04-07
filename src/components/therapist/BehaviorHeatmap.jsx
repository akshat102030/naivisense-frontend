import PropTypes from 'prop-types'

export function BehaviorHeatmap({ data }) {
  const cells = data?.length ? data : new Array(28).fill(0).map((_, i) => (i % 9 === 0 ? 4 : i % 5))

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7,1fr)',
          gap: 4,
          marginBottom: 10,
        }}
      >
        {cells.slice(0, 28).map((v, i) => (
          <div
            key={i}
            style={{
              aspectRatio: '1 / 1',
              borderRadius: 4,
              background:
                v >= 4
                  ? 'var(--teal-accent)'
                  : v === 3
                    ? 'rgba(0,200,150,0.7)'
                    : v === 2
                      ? 'rgba(0,200,150,0.4)'
                      : v === 1
                        ? 'rgba(0,200,150,0.2)'
                        : 'var(--bg4)',
            }}
          />
        ))}
      </div>
      <div style={{ fontSize: 10, color: 'var(--text3)' }}>Low → High</div>
    </div>
  )
}

BehaviorHeatmap.propTypes = {
  data: PropTypes.array,
}

