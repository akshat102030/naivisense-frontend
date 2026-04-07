import PropTypes from 'prop-types'

export function AIModelHealth({ metrics }) {
  const items = metrics ?? {
    prediction: 89,
    rag: 94,
    records: 1248,
    lastRetrained: '14d ago',
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
        <Metric label="Prediction Acc." value={`${items.prediction}%`} progress={items.prediction} color="var(--gold)" />
        <Metric label="RAG Relevance" value={`${items.rag}%`} progress={items.rag} color="var(--cyan)" />
        <Metric label="Training Records" value={items.records} progress={62} color="var(--violet)" />
        <Metric label="Last Retrained" value={items.lastRetrained} progress={30} color="var(--amber)" />
      </div>
      <div
        style={{
          background: 'var(--gold-bg)',
          border: '1px solid var(--gold-border)',
          borderRadius: 10,
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 18 }}>🔄</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>Retrain recommended</div>
          <div style={{ fontSize: 11, color: 'var(--text2)' }}>
            47 new validated feedback records ready
          </div>
        </div>
        <button
          type="button"
          style={{
            border: 'none',
            borderRadius: 8,
            background: 'var(--gold)',
            color: 'var(--bg)',
            padding: '7px 12px',
            fontSize: 11,
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Trigger →
        </button>
      </div>
    </div>
  )
}

function Metric({ label, value, progress, color }) {
  return (
    <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px' }}>
      <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginTop: 4 }}>{value}</div>
      <div style={{ height: 4, background: 'var(--bg4)', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: color }} />
      </div>
    </div>
  )
}

Metric.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

AIModelHealth.propTypes = { metrics: PropTypes.object }

