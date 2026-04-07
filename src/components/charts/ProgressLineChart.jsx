import PropTypes from 'prop-types'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export function ProgressLineChart({ data }) {
  return (
    <div style={{ width: '100%', height: 180 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="var(--text3)" tick={{ fontSize: 11 }} />
          <YAxis stroke="var(--text3)" tick={{ fontSize: 11 }} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
            }}
          />
          <Line
            type="monotone"
            dataKey="overall"
            stroke="var(--accent)"
            strokeWidth={2.5}
            dot={{ r: 3, fill: 'var(--accent)' }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

ProgressLineChart.propTypes = {
  data: PropTypes.array,
}

